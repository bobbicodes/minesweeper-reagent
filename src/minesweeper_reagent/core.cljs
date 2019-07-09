(ns ^:figwheel-hooks minesweeper-reagent.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(def board-width 12)
(def board-height 12)
(def num-mines 18)

(defn rand-positions []
  (shuffle
   (for [i (range board-width) j (range board-height)]
     [i j])))

(defn set-mines []
  (for [i (range (* board-height board-width))]
    {:mined (< i num-mines)
     :exposed false}))

(def app-state
  (atom (into {} (map vector (rand-positions) (set-mines)))))

(defn neighbors [[x y]]
  (filter (partial contains? @app-state) ; remove invalid squares
          (for [i [-1 0 1] j [-1 0 1] :when (or i j)]
            [(+ x i) (+ y j)])))

(defn mine-count [[x y]]
  (if (:mined (get @app-state [x y])) 1 0))

(defn mine-detector [[x y]]
  (reduce + (map (partial mine-count)
                 (neighbors [x y]))))

(defn step [grid [x y]]
  (let [square (get grid [x y])
        step-square (assoc-in grid [[x y] :exposed] true)]
    (cond
      (:exposed square) grid
      (or (:mined square) (< 0 (mine-detector [x y]))) step-square
      :else (reduce step step-square (neighbors [x y])))))

(defn game-status []
  (cond
    (some (fn [[_k v]] (and (:exposed v) (:mined v))) @app-state) :dead
    (every? (fn [[_k v]] (or (:exposed v) (:mined v))) @app-state) :win
    (some (fn [[_k v]] (:exposed v)) @app-state) :in-progress
    :else :new))

(def mouse-down? (atom false))

(defn icon []
  (case (game-status)
    :dead "🤯"
    :win "🤓"
    (if @mouse-down? "😬" "🥺")))

(def mouse-over-cell (atom nil))

(defn flag! [[x y]]
  (when (not (:exposed (get @app-state [x y])))
  (swap! app-state assoc-in [[x y] :flagged] true)))

(defn unflag! [[x y]]
  (swap! app-state assoc-in [[x y] :flagged] false))

(defn step! [[x y]]
  (when (not (:flagged (get @app-state [x y])))
    (reset! app-state (step @app-state [x y]))))

(defn rect-cell [[x y]]
  [:rect
   {:width 1.85 :height 1.85
    :x -0.9 :y -0.9
    :stroke-width (if (= [x y] @mouse-over-cell) 0.1 0.08)
    :stroke "black"
    :fill (cond
            (:exposed (get @app-state [x y])) "white"
            (= [x y] @mouse-over-cell) "darkgrey"
            :else "silver")
    :on-mouse-down
    #(reset! mouse-down? true)
    :on-mouse-up
    #(reset! mouse-down? false)
    :on-mouse-over
    #(reset! mouse-over-cell [x y])
    :on-mouse-out
    #(reset! mouse-over-cell nil)
    :on-click
    #(when (not (:flagged (get @app-state [x y])))
       (case (game-status)
         :new
         (do
           (swap! app-state assoc [x y] {:mined false :exposed false})
           (swap! app-state step [x y]))
         :in-progress
         (swap! app-state step [x y])))
    :on-contextMenu
    #(do (.preventDefault %)
         (cond
           (:exposed (get @app-state [x y]))
           (run! step! (neighbors [x y]))
           (:flagged (get @app-state [x y]))
           (unflag! [x y])
           :else
           (flag! [x y])))}])

(defn mine-num [[x y]]
  [:text
   {:y 0.5
    :text-anchor "middle"
    :font-weight "900"
    :fill (case (mine-detector [x y])
            1 "blue"
            2 "green"
            3 "red"
            4 "purple"
            5 "brown"
            "black")
    :font-size "1.25"
    :on-contextMenu
    #(do (.preventDefault %)
         (run! step! (neighbors [x y])))}
   (mine-detector [x y])])

(defn bomb []
  [:text
   {:y 0.5
    :text-anchor "middle"
;    :font-weight "900"
    :font-size "1.5"}
   "💥"])

(defn flag [[x y]]
  [:text
   {:y 0.5 :text-anchor "middle" :font-weight "600" :fill "red" :font-size "1.5"
    :on-contextMenu
    #(do (.preventDefault %)
         (if (:flagged (get @app-state [x y])) (unflag! [x y])))}
   "☠️"])

(defn render-board []
  (into
   [:svg.board
    {:view-box (str "0 0 " board-width " " board-height)
     :shape-rendering "auto"
     :style {:max-height "500px"}}]
   (for [[[x y] attrs] @app-state]
     [:g {:transform (str "translate(" x  "," y ") "
                          "scale (0.5)"
                          "translate(1,1)")}
      [rect-cell [x y]]
      (if (:flagged attrs) [flag [x y]])
      (when (:exposed attrs)
        (if (:mined attrs)
          [bomb]
          (if (< 0 (mine-detector [x y]))
            [mine-num [x y]])))])))

(defn minesweeper []
  [:center
   [:div
    {:style {:font-size "75px"}
     :on-click #(reset! app-state (into {} (map vector (rand-positions) (set-mines))))}
    (icon)]
   [render-board]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (reagent/render-component [minesweeper] el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )