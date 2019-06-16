(ns ^:figwheel-hooks minesweeper-reagent.core
  (:require [goog.dom :as gdom]
                      [reagent.core :as reagent :refer [atom]]))

(def board-width 12)
(def board-height 12)
(def num-mines 18)

(defn rand-positions []
  (shuffle
    (for [i (range board-width)
          j (range board-height)]
      [i j])))

(defn init-square [mine] 
  {
   :mined mine
   :exposed false
  }
)

(defn set-mines [] 
  (loop [squares (repeat num-mines (init-square true))]
    (if (= (count squares) (* board-width board-height))
      squares
      (recur (conj squares (init-square false))))))

(defn init-matrix []
  (into {}
        (map vector
             (rand-positions)
             (set-mines))))

(def app-state (atom (init-matrix)))

; mine-detector

(defn mine? [app-state pos]
  (:mined (get app-state pos))
)

; remove invalid and duplicate squares

(defn adjacents [app-state [x y]]
    (filter (partial contains? app-state)
               #{ [(dec x) (dec y)]
                  [x (dec y)]
                  [x (inc y)]
                  [(dec x) y]
                  [(inc x) y] 
                  [(inc x) (dec y)]
                  [(inc x) (inc y)]
                  [(dec x) (inc y)] }))

(defn mine-count [app-state pos]
  (if (mine? app-state pos) 1 0)
)

(defn mine-detector [app-state pos]
  (reduce + 0 (map (partial mine-count app-state) (adjacents app-state pos))))

(defn clear? [app-state pos]
  (zero? (mine-detector app-state pos)))

(defn flood [app-state pos]
  (let [cell (get app-state pos)]
    (if (:exposed cell)
      app-state
      (let [new-app-state (assoc app-state pos (assoc cell :exposed true))]
        (if (or (:mined cell) (not (clear? app-state pos)))
            new-app-state
            (reduce flood new-app-state (adjacents app-state pos))
        )
      )
    )
  )
)

; render UI

(defn game-status [app-state]
  (if (some (fn [[_k v]] (and (:exposed v) (:mined v) )) app-state)
      :dead
      (if (every? (fn [[_k v]] (or (:exposed v) (:mined v))) app-state)
          :win
          :in-progress
      )
  )
)

(defn message [app-state]
  (case (game-status app-state)
    :dead "Fuck. You blew up."
    :win "Congratulations!"
    :in-progress "Tread lightly")
)

(defn get-app-element []
  (gdom/getElement "app"))

(defn blank [[x y]]
  [:rect
   {:width 0.9
    :height 0.9
    :fill "grey"
    :x (+ 0.05 x)
    :y (+ 0.05 y)
    :on-click
    (fn blank-click [e]
      (when (= (game-status @app-state) :in-progress)
        (reset! app-state (flood @app-state [x y]))
        ))}])

(defn rect-cell [[x y]]
  [:rect.cell
   {:x (+ 0.05 x) :width 0.9
    :y (+ 0.05 y) :height 0.9
    :fill "white"
    :stroke-width 0.025
    :stroke "black"}])

(defn text-cell [[x y]]
  [:text
   {:x (+ 0.5 x) :width 1
    :y (+ 0.72 y) :height 1
    :text-anchor "middle"
    :font-size 0.6}
   (if (zero? (mine-detector @app-state [x y]))
     ""
     (str (mine-detector @app-state [x y])))])

(defn cross [[i j]]
  [:g {:stroke "darkred"
       :stroke-width 0.4
       :stroke-linecap "round"
       :transform
       (str "translate(" (+ 0.5 i) "," (+ 0.5 j) ") "
            "scale(0.3)")}
   [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
   [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])

(defn render-board []
  (into
    [:svg.board
     {:view-box (str "0 0 " board-width " " board-height)
      :shape-rendering "auto"
      :style {:max-height "500px"}}]
    (for [i (range board-width)
          j (range board-height)]
      [:g
       [rect-cell [i j]]
       (if (:exposed (get @app-state [i j]))
         (if (:mined (get @app-state [i j]))
           [cross [i j]]
           [text-cell [i j]])      
         [blank [i j]])])))

(defn minesweeper []
  [:center
   [:h1 (message @app-state)]
   [:button
    {:on-click
     (fn new-game-click [e]
       (reset! app-state (init-matrix)) )}
    "Reset"]
   [:div [render-board]]])

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
