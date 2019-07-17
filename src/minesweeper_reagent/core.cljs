(ns ^:figwheel-hooks minesweeper-reagent.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [clojure.set :as set]))

(def app-state
  (atom {:width 15
         :height 10
         :percent-mines 20
         :cells (set (for [x (range 15)
                           y (range 10)]
                       [x y]))
         :mines #{}
         :cleared #{}
         :mouse-down? false
         :flagged #{}}))

(def cells (reagent/cursor app-state [:cells]))
(def cleared (reagent/cursor app-state [:cleared]))
(def mines (reagent/cursor app-state [:mines]))
(def flagged (reagent/cursor app-state [:flagged]))

(defn new-board! []
  (swap! app-state assoc :cells
         (set (for [x (range (:width @app-state))
                    y (range (:height @app-state))]
                [x y])))
  (reset! mines #{})
  (reset! cleared #{})
  (reset! flagged #{}))

(defn number-input [label value on-change]
  [:label label
   [:input
    {:style {:width "6%"
             :background-color "lightgray"}
     :type "number"
     :value value
     :on-change on-change}]])

(defn height-input []
  (number-input "Height: " (:height @app-state)
                (fn [e] (swap! app-state assoc :height
                               (-> e .-target .-value))
                  (new-board!))))

(defn width-input []
  (number-input " Width: " (:width @app-state)
                  (fn [e] (swap! app-state assoc :width
                                 (-> e .-target .-value))
                    (new-board!))))

(defn mines-input []
  (number-input " % mines" (:percent-mines @app-state)
                (fn [e] (swap! app-state assoc :percent-mines
                               (js/parseInt (-> e .-target .-value)))
                  (new-board!))))

(defn set-mines [[x y]]
  (set (take (* (/ (:percent-mines @app-state) 100)
                (* (:height @app-state) (:width @app-state)))
             (shuffle (disj @cells [x y])))))

(defn neighbors [[x y]]
  (filter #(contains? @cells %)
          (for [dx [-1 0 1] dy [-1 0 1]]
            [(+ x dx) (+ y dy)])))

(defn mine-count [[x y]]
  (if (contains? @mines [x y]) 1 0))

(defn mine-detector [[x y]]
  (reduce + (map (partial mine-count)
                 (neighbors [x y]))))

(defn step [state [x y]]
  (cond
    (contains? state [x y])
    state
    (or (contains? @mines [x y])
        (< 0 (mine-detector [x y])))
    (conj state [x y])
    :else (reduce step (conj state [x y])
                  (filter #(not (contains? state %))
                  (neighbors [x y])))))

(defn game-status []
  (cond
    (seq (set/intersection @cleared @mines)) :dead
    (= @cells (set/union @cleared @mines)) :win
    (seq @cleared) :in-progress
    :else :new))

(defn icon []
  (case (game-status)
    :dead "🤯"
    :win "🤓"
    (if (:mouse-down? @app-state) "😬" "🥺")))

(defn step! [[x y]]
  (when-not (contains? @flagged [x y])
    (reset! cleared (step @cleared [x y]))))

(defn flag! [[x y]]
  (when-not (contains? @cleared [x y])
    (swap! flagged conj [x y])))

(defn unflag! [[x y]]
  (swap! flagged disj [x y]))

(defn covered-cell [[x y]]
  (let [focused? (atom false)]
    (fn [[x y]]
      [:rect
       {:width 1.85 :height 1.85
        :x -0.9 :y -0.9
        :stroke-width (if @focused? 0.1 0.08)
        :stroke "black"
        :fill (if @focused? "darkgrey" "silver")
        :on-mouse-down
        #(if-not (= (game-status) :dead)
           (swap! app-state assoc :mouse-down? true))
        :on-mouse-up
        #(swap! app-state assoc :mouse-down? false)
        :on-mouse-over
        #(if-not (= (game-status) :dead)
           (reset! focused? true))
        :on-mouse-out
        #(reset! focused? false)
        :on-click
        (fn [e] (when-not (or (contains? @flagged [x y])
                              (= (game-status) :dead))
                  (when (= (game-status) :new)
                    (reset! mines (set-mines [x y])))
                  (step! [x y])))
        :on-contextMenu
        (fn [e] (.preventDefault e)
          (swap! app-state assoc :mouse-down? false)
          (if (contains? @flagged [x y])
            (unflag! [x y])
            (flag! [x y])))}])))

(defn cleared-cell [[x y]]
  [:rect
   {:width 1.85 :height 1.85
    :x -0.9 :y -0.9
    :stroke-width 0.08
    :stroke "black"
    :fill "white"
    :on-contextMenu
    (fn [e]
      (.preventDefault e)
      (swap! app-state assoc :mouse-down? false)
      (run! step! (neighbors [x y])))}])

(defn flag [[x y]]
  [:text
   {:y 0.5 :text-anchor "middle" :font-weight "600" :fill "red" :font-size "1.5"
    :on-contextMenu
    #(do (.preventDefault %)
         (swap! app-state assoc :mouse-down? false)
         (if (contains? @flagged [x y]) (unflag! [x y])))}
   "☠️"])

(defn bomb []
  [:text
   {:y 0.5
    :text-anchor "middle"
    :font-size "1.5"}
   "💥"])

(defn mine-num [[x y]]
  [:text
   {:y 0.5
    :text-anchor "middle"
    :font-weight "900"
    :fill (case (mine-detector [x y])
            1 "blue" 2 "green" 3 "red" 4 "purple" 5 "brown" "black")
    :font-size "1.25"
    :on-mouse-down
    #(do (swap! app-state assoc :mouse-down? true)
         (js/setTimeout (fn [] (swap! app-state assoc :mouse-down? false)) 800))
    :on-contextMenu
    #(do (.preventDefault %)
         (swap! app-state assoc :mouse-down? false)
         (cond
           (contains? @cleared [x y])
           (run! step! (neighbors [x y]))
           (contains? @flagged [x y])
           (unflag! [x y])))}
   (mine-detector [x y])])

(defn render-board []
  [:svg
   {:view-box (str "0 0 " (:width @app-state) " " (:height @app-state))
    :shape-rendering "auto"
    :style {:max-height "500px"}}
   (doall
    (for [[x y] @cells]
      ^{:key [x y]}
      [:g {:transform (str "translate(" x  "," y ") "
                           "scale (0.5)"
                           "translate(1,1)")}
       (if (contains? @cleared [x y])
         [cleared-cell [x y]])
       (if (< 0 (mine-detector [x y]))
         [mine-num [x y]])
       (if (contains? @mines [x y])
         [bomb])
       (when-not (contains? @cleared [x y])
         [covered-cell [x y]])
       (if (contains? @flagged [x y])
         [flag [x y]])]))])

(defn minesweeper []
  [:center
      [:div {:style {:font-size "14px"}}
       [height-input] [width-input] [mines-input]]
   [:p]
   [:div
    {:style {:font-size "75px"}
     :on-click #(new-board!)}
    [icon]]
   [render-board]])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [minesweeper] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

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
