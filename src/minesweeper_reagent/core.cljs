(ns ^:figwheel-hooks minesweeper-reagent.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/minesweeper_reagent/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

(def board-width 12)
(def board-height 12)
(def num-mines 18)

(defn rand-positions []
  (shuffle
   (for [i (range board-width)
         j (range board-height)]
     [i j])))

(defn set-mines []
  (for [i (range (* board-height board-width))]
    {:mined (< i num-mines)
     :exposed false}))

(defn init-matrix []
  (into {}
        (map vector
             (rand-positions)
             (set-mines))))

(def atom-app-state (atom (init-matrix)))

(defn adjacents [app-state [x y]]
  (filter (partial contains? app-state) ; remove invalid squares
          (for [i [-1 0 1] j [-1 0 1] :when (or i j)]
            [(+ x i) (+ y j)])))

(defn mine-count [app-state pos]
  (if (:mined (get app-state pos)) 1 0))

(defn mine-detector [app-state pos]
  (reduce + (map (partial mine-count app-state) (adjacents app-state pos))))

(defn flood [app-state pos]
  (let [cell (get app-state pos)]
    (if (:exposed cell)
      app-state
      (let [new-app-state (assoc app-state pos (assoc cell :exposed true))]
        (if (or (:mined cell) (< 0 (mine-detector app-state pos)))
          new-app-state
          (reduce flood new-app-state (adjacents app-state pos)))))))

(defn game-status [app-state]
  (cond
    (some (fn [[_k v]] (and (:exposed v) (:mined v))) app-state)
    :dead
    (every? (fn [[_k v]] (or (:exposed v) (:mined v))) app-state)
    :win
    (some (fn [[_k v]] (:exposed v)) app-state)
    :in-progress
    :else :new))

; render UI

(defn message [app-state]
  (case (game-status app-state)
    :dead "Fuck. You blew up."
    :win "Congratulations!"
    "Tread lightly..."))

(defn flag [[x y]]
  (reset! atom-app-state (assoc @atom-app-state [x y] (assoc-in (get @atom-app-state [x y]) [:flagged] true))))

(defn unflag [[x y]]
  (reset! atom-app-state (assoc @atom-app-state [x y] (assoc-in (get @atom-app-state [x y]) [:flagged] false))))

(defn rect-cell [app-state pos condition]
  [:rect
   {:width 1.8
    :height 1.8
    :x -0.9
    :y -0.9
    :stroke-width 0.08
    :stroke "black"
    :fill (cond
            (:exposed condition) "white"
            (:flagged condition) "red"
            :else "grey")
    :on-click
    #(when (not= (:flagged condition) true)
        (case (game-status app-state)
      :new
       (reset! atom-app-state (flood (assoc app-state pos {:mined false :exposed false}) pos))

       :in-progress
       (reset! atom-app-state (flood app-state pos))))
    :on-contextMenu (fn [e] (do (.preventDefault e) (if (= (:flagged condition) true)
                                                      (unflag pos)
                                                      (flag pos))))}])

(defn text-cell [detected-text]
  [:text
   {:y 0.5
    :text-anchor "middle"
    :font-size 1.5}
   detected-text])

(defn cross []
  [:g {:stroke "darkred"
       :stroke-width 0.2
       :stroke-linecap "round"}
   [:line {:x1 -0.6 :y1 -0.6 :x2 0.6 :y2 0.6}]
   [:line {:x1 0.6 :y1 -0.6 :x2 -0.6 :y2 0.6}]])


(defn render-board [app-state]
  (into
   [:svg.board
    {:view-box (str "0 0 " board-width " " board-height)
     :shape-rendering "auto"
     :style {:max-height "500px"}}]
   (for [[[i j] condition] app-state]
     [:g {:transform (str "translate(" i  "," j ") "
                          "scale (0.5)"
                          "translate(1,1)")}
      [rect-cell app-state [i j] condition]
      (when (:exposed condition)
        (if (:mined condition)
          [cross]
          (let [detected (mine-detector app-state [i j])]
            (if (< 0 detected)
              [text-cell (str detected)]))))])))

(defn minesweeper []
  [:center
   [:h1 (message @atom-app-state)]
   [:button
    {:on-click
     (fn new-game-click [e]
       (reset! atom-app-state (init-matrix)))}
    "Reset"]
   [:div [render-board @atom-app-state]]])

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
