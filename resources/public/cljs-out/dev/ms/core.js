// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ms.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
ms.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,(15),cljs.core.cst$kw$height,(10),cljs.core.cst$kw$percent_DASH_mines,(20),cljs.core.cst$kw$cells,cljs.core.set((function (){var iter__4324__auto__ = (function ms$core$iter__13321(s__13322){
return (new cljs.core.LazySeq(null,(function (){
var s__13322__$1 = s__13322;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13322__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13322__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function ms$core$iter__13321_$_iter__13323(s__13324){
return (new cljs.core.LazySeq(null,((function (s__13322__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13324__$1 = s__13324;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13324__$1);
if(temp__5457__auto____$1){
var s__13324__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13324__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13324__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13326 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13325 = (0);
while(true){
if((i__13325 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13325);
cljs.core.chunk_append(b__13326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__13327 = (i__13325 + (1));
i__13325 = G__13327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13326),ms$core$iter__13321_$_iter__13323(cljs.core.chunk_rest(s__13324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13326),null);
}
} else {
var y = cljs.core.first(s__13324__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ms$core$iter__13321_$_iter__13323(cljs.core.rest(s__13324__$2)));
}
} else {
return null;
}
break;
}
});})(s__13322__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13322__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,ms$core$iter__13321(cljs.core.rest(s__13322__$1)));
} else {
var G__13328 = cljs.core.rest(s__13322__$1);
s__13322__$1 = G__13328;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((15)));
})()),cljs.core.cst$kw$mines,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$cleared,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false,cljs.core.cst$kw$flagged,cljs.core.PersistentHashSet.EMPTY], null));
ms.core.cells = reagent.core.cursor(ms.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells], null));
ms.core.cleared = reagent.core.cursor(ms.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cleared], null));
ms.core.mines = reagent.core.cursor(ms.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mines], null));
ms.core.flagged = reagent.core.cursor(ms.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flagged], null));
ms.core.new_board_BANG_ = (function ms$core$new_board_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$cells,cljs.core.set((function (){var iter__4324__auto__ = (function ms$core$new_board_BANG__$_iter__13329(s__13330){
return (new cljs.core.LazySeq(null,(function (){
var s__13330__$1 = s__13330;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13330__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13330__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function ms$core$new_board_BANG__$_iter__13329_$_iter__13331(s__13332){
return (new cljs.core.LazySeq(null,((function (s__13330__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13332__$1 = s__13332;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13332__$1);
if(temp__5457__auto____$1){
var s__13332__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13332__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13332__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13334 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13333 = (0);
while(true){
if((i__13333 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13333);
cljs.core.chunk_append(b__13334,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__13335 = (i__13333 + (1));
i__13333 = G__13335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13334),ms$core$new_board_BANG__$_iter__13329_$_iter__13331(cljs.core.chunk_rest(s__13332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13334),null);
}
} else {
var y = cljs.core.first(s__13332__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ms$core$new_board_BANG__$_iter__13329_$_iter__13331(cljs.core.rest(s__13332__$2)));
}
} else {
return null;
}
break;
}
});})(s__13330__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13330__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,ms$core$new_board_BANG__$_iter__13329(cljs.core.rest(s__13330__$1)));
} else {
var G__13336 = cljs.core.rest(s__13330__$1);
s__13330__$1 = G__13336;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state))));
})()));

cljs.core.reset_BANG_(ms.core.mines,cljs.core.PersistentHashSet.EMPTY);

cljs.core.reset_BANG_(ms.core.cleared,cljs.core.PersistentHashSet.EMPTY);

return cljs.core.reset_BANG_(ms.core.flagged,cljs.core.PersistentHashSet.EMPTY);
});
ms.core.width_input = (function ms$core$width_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Width: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$width,e.target.value);

return ms.core.new_board_BANG_();
})], null)], null)], null);
});
ms.core.height_input = (function ms$core$height_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Height: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$height,e.target.value);

return ms.core.new_board_BANG_();
})], null)], null)], null);
});
ms.core.mines_input = (function ms$core$mines_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," % mines",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$percent_DASH_mines.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$percent_DASH_mines,parseInt(e.target.value));

return ms.core.new_board_BANG_();
})], null)], null)], null);
});
ms.core.set_mines = (function ms$core$set_mines(p__13337){
var vec__13338 = p__13337;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13338,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13338,(1),null);
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$percent_DASH_mines.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)) / (100)) * (cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)) * cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)))),cljs.core.shuffle(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ms.core.cells),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))));
});
ms.core.neighbors = (function ms$core$neighbors(p__13342){
var vec__13343 = p__13342;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13343,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13343,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__13343,x,y){
return (function (p1__13341_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cells),p1__13341_SHARP_);
});})(vec__13343,x,y))
,(function (){var iter__4324__auto__ = ((function (vec__13343,x,y){
return (function ms$core$neighbors_$_iter__13346(s__13347){
return (new cljs.core.LazySeq(null,((function (vec__13343,x,y){
return (function (){
var s__13347__$1 = s__13347;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13347__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var dx = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13347__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__13343,x,y){
return (function ms$core$neighbors_$_iter__13346_$_iter__13348(s__13349){
return (new cljs.core.LazySeq(null,((function (s__13347__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__13343,x,y){
return (function (){
var s__13349__$1 = s__13349;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13349__$1);
if(temp__5457__auto____$1){
var s__13349__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13349__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13349__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13351 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13350 = (0);
while(true){
if((i__13350 < size__4323__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13350);
if(cljs.core.truth_((function (){var or__3949__auto__ = dx;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return dy;
}
})())){
cljs.core.chunk_append(b__13351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__13352 = (i__13350 + (1));
i__13350 = G__13352;
continue;
} else {
var G__13353 = (i__13350 + (1));
i__13350 = G__13353;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13351),ms$core$neighbors_$_iter__13346_$_iter__13348(cljs.core.chunk_rest(s__13349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13351),null);
}
} else {
var dy = cljs.core.first(s__13349__$2);
if(cljs.core.truth_((function (){var or__3949__auto__ = dx;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return dy;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),ms$core$neighbors_$_iter__13346_$_iter__13348(cljs.core.rest(s__13349__$2)));
} else {
var G__13354 = cljs.core.rest(s__13349__$2);
s__13349__$1 = G__13354;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__13347__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__13343,x,y))
,null,null));
});})(s__13347__$1,dx,xs__6012__auto__,temp__5457__auto__,vec__13343,x,y))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,ms$core$neighbors_$_iter__13346(cljs.core.rest(s__13347__$1)));
} else {
var G__13355 = cljs.core.rest(s__13347__$1);
s__13347__$1 = G__13355;
continue;
}
} else {
return null;
}
break;
}
});})(vec__13343,x,y))
,null,null));
});})(vec__13343,x,y))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
ms.core.mine_count = (function ms$core$mine_count(p__13356){
var vec__13357 = p__13356;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13357,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13357,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return (1);
} else {
return (0);
}
});
ms.core.mine_detector = (function ms$core$mine_detector(p__13360){
var vec__13361 = p__13360;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13361,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(ms.core.mine_count),ms.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
});
ms.core.step = (function ms$core$step(state,p__13365){
var vec__13366 = p__13365;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13366,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13366,(1),null);
if(cljs.core.contains_QMARK_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return state;
} else {
if(((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))) || (((0) < ms.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ms.core.step,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__13366,x,y){
return (function (p1__13364_SHARP_){
return !(cljs.core.contains_QMARK_(state,p1__13364_SHARP_));
});})(vec__13366,x,y))
,ms.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

}
}
});
ms.core.game_status = (function ms$core$game_status(){
if(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ms.core.cleared),cljs.core.deref(ms.core.mines)))){
return cljs.core.cst$kw$dead;
} else {
if(cljs.core.every_QMARK_((function (p1__13369_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),p1__13369_SHARP_)) || (cljs.core.contains_QMARK_(cljs.core.deref(ms.core.mines),p1__13369_SHARP_)));
}),cljs.core.deref(ms.core.cells))){
return cljs.core.cst$kw$win;
} else {
if(cljs.core.seq(cljs.core.deref(ms.core.cleared))){
return cljs.core.cst$kw$in_DASH_progress;
} else {
return cljs.core.cst$kw$new;

}
}
}
});
ms.core.icon = (function ms$core$icon(){
var G__13370 = ms.core.game_status();
var G__13370__$1 = (((G__13370 instanceof cljs.core.Keyword))?G__13370.fqn:null);
switch (G__13370__$1) {
case "dead":
return "\uD83E\uDD2F";

break;
case "win":
return "\uD83E\uDD13";

break;
default:
if(cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_down_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)))){
return "\uD83D\uDE2C";
} else {
return "\uD83E\uDD7A";
}

}
});
ms.core.step_BANG_ = (function ms$core$step_BANG_(p__13372){
var vec__13373 = p__13372;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13373,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13373,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return null;
} else {
return cljs.core.reset_BANG_(ms.core.cleared,ms.core.step(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
}
});
ms.core.flag_BANG_ = (function ms$core$flag_BANG_(p__13376){
var vec__13377 = p__13376;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13377,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13377,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ms.core.flagged,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
});
ms.core.unflag_BANG_ = (function ms$core$unflag_BANG_(p__13380){
var vec__13381 = p__13380;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13381,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13381,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ms.core.flagged,cljs.core.disj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
ms.core.cell = (function ms$core$cell(status,p__13385){
var vec__13386 = p__13385;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13386,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13386,(1),null);
var focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (focused_QMARK_,vec__13386,x,y){
return (function (status__$1,p__13389){
var vec__13390 = p__13389;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status__$1,cljs.core.cst$kw$covered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_contextMenu,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_up,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[-0.9,"black",((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (p1__13384_SHARP_){
p1__13384_SHARP_.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null))){
return ms.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
} else {
return ms.core.flag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
}
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
,((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
,(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?"darkgrey":"silver"),1.85,((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.core.game_status(),cljs.core.cst$kw$dead))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,true);
} else {
return null;
}
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
,((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (e){
if(((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.core.game_status(),cljs.core.cst$kw$dead)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.core.game_status(),cljs.core.cst$kw$new)){
cljs.core.reset_BANG_(ms.core.mines,ms.core.set_mines(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)));
} else {
}

return ms.core.step_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
}
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
,(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?0.1:0.08),((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
,((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.core.game_status(),cljs.core.cst$kw$dead))){
return cljs.core.reset_BANG_(focused_QMARK_,true);
} else {
return null;
}
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
,-0.9,1.85])], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,1.85,cljs.core.cst$kw$height,1.85,cljs.core.cst$kw$x,-0.9,cljs.core.cst$kw$y,-0.9,cljs.core.cst$kw$stroke_DASH_width,0.08,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y){
return (function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

return cljs.core.run_BANG_(ms.core.step_BANG_,ms.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)));
});})(vec__13390,x__$1,y__$1,focused_QMARK_,vec__13386,x,y))
], null)], null);
}
});
;})(focused_QMARK_,vec__13386,x,y))
});
ms.core.flag = (function ms$core$flag(p__13394){
var vec__13395 = p__13394;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13395,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13395,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_weight,"600",cljs.core.cst$kw$fill,"red",cljs.core.cst$kw$font_DASH_size,"1.5",cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__13395,x,y){
return (function (p1__13393_SHARP_){
p1__13393_SHARP_.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return ms.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return null;
}
});})(vec__13395,x,y))
], null),"\u2620\uFE0F"], null);
});
ms.core.bomb = (function ms$core$bomb(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,"1.5"], null),"\uD83D\uDCA5"], null);
});
ms.core.mine_num = (function ms$core$mine_num(p__13399){
var vec__13400 = p__13399;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13400,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13400,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_weight,"900",cljs.core.cst$kw$fill,(function (){var G__13403 = ms.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
switch (G__13403) {
case (1):
return "blue";

break;
case (2):
return "green";

break;
case (3):
return "red";

break;
case (4):
return "purple";

break;
case (5):
return "brown";

break;
default:
return "black";

}
})(),cljs.core.cst$kw$font_DASH_size,"1.25",cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (vec__13400,x,y){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,true);

return setTimeout(((function (vec__13400,x,y){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);
});})(vec__13400,x,y))
,(800));
});})(vec__13400,x,y))
,cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__13400,x,y){
return (function (p1__13398_SHARP_){
p1__13398_SHARP_.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ms.core.app_state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down_QMARK_,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.run_BANG_(ms.core.step_BANG_,ms.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return ms.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return null;
}
}
});})(vec__13400,x,y))
], null),ms.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
});
ms.core.render_board = (function ms$core$render_board(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ms.core.app_state)))].join(''),cljs.core.cst$kw$shape_DASH_rendering,"auto",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"500px"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function ms$core$render_board_$_iter__13405(s__13406){
return (new cljs.core.LazySeq(null,(function (){
var s__13406__$1 = s__13406;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13406__$1);
if(temp__5457__auto__){
var s__13406__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13406__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13406__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13408 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13407 = (0);
while(true){
if((i__13407 < size__4323__auto__)){
var vec__13409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13407);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13409,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13409,(1),null);
cljs.core.chunk_append(b__13408,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") ","scale (0.5)","translate(1,1)"].join('')], null),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.cell,cljs.core.cst$kw$cleared,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((((0) < ms.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.mine_num,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.bomb], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.cell,cljs.core.cst$kw$covered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13415 = (i__13407 + (1));
i__13407 = G__13415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13408),ms$core$render_board_$_iter__13405(cljs.core.chunk_rest(s__13406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13408),null);
}
} else {
var vec__13412 = cljs.core.first(s__13406__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13412,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13412,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") ","scale (0.5)","translate(1,1)"].join('')], null),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.cell,cljs.core.cst$kw$cleared,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((((0) < ms.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.mine_num,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.mines),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.bomb], null):null),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.cleared),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.cell,cljs.core.cst$kw$covered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),((cljs.core.contains_QMARK_(cljs.core.deref(ms.core.flagged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),ms$core$render_board_$_iter__13405(cljs.core.rest(s__13406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.deref(ms.core.cells));
})())], null);
});
ms.core.minesweeper = (function ms$core$minesweeper(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.height_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.width_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.mines_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"75px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return ms.core.new_board_BANG_();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.icon], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.render_board], null)], null);
});
ms.core.get_app_element = (function ms$core$get_app_element(){
return goog.dom.getElement("app");
});
ms.core.mount = (function ms$core$mount(el){
var G__13416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.minesweeper], null);
var G__13417 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13416,G__13417) : reagent.core.render_component.call(null,G__13416,G__13417));
});
ms.core.mount_app_element = (function ms$core$mount_app_element(){
var temp__5457__auto__ = ms.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return ms.core.mount(el);
} else {
return null;
}
});
ms.core.mount_app_element();
ms.core.on_reload = (function ms$core$on_reload(){
return ms.core.mount_app_element();
});
