// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('minesweeper_reagent.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
minesweeper_reagent.core.grid_size = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((12));
minesweeper_reagent.core.num_mines = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((18));
minesweeper_reagent.core.rand_positions = (function minesweeper_reagent$core$rand_positions(){
return cljs.core.shuffle((function (){var iter__4324__auto__ = (function minesweeper_reagent$core$rand_positions_$_iter__10408(s__10409){
return (new cljs.core.LazySeq(null,(function (){
var s__10409__$1 = s__10409;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10409__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10409__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function minesweeper_reagent$core$rand_positions_$_iter__10408_$_iter__10410(s__10411){
return (new cljs.core.LazySeq(null,((function (s__10409__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10411__$1 = s__10411;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10411__$1);
if(temp__5457__auto____$1){
var s__10411__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10411__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10411__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10413 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10412 = (0);
while(true){
if((i__10412 < size__4323__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10412);
cljs.core.chunk_append(b__10413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__10414 = (i__10412 + (1));
i__10412 = G__10414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10413),minesweeper_reagent$core$rand_positions_$_iter__10408_$_iter__10410(cljs.core.chunk_rest(s__10411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10413),null);
}
} else {
var j = cljs.core.first(s__10411__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),minesweeper_reagent$core$rand_positions_$_iter__10408_$_iter__10410(cljs.core.rest(s__10411__$2)));
}
} else {
return null;
}
break;
}
});})(s__10409__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10409__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(minesweeper_reagent.core.grid_size))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,minesweeper_reagent$core$rand_positions_$_iter__10408(cljs.core.rest(s__10409__$1)));
} else {
var G__10415 = cljs.core.rest(s__10409__$1);
s__10409__$1 = G__10415;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(minesweeper_reagent.core.grid_size)));
})());
});
minesweeper_reagent.core.set_mines = (function minesweeper_reagent$core$set_mines(){
var iter__4324__auto__ = (function minesweeper_reagent$core$set_mines_$_iter__10416(s__10417){
return (new cljs.core.LazySeq(null,(function (){
var s__10417__$1 = s__10417;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10417__$1);
if(temp__5457__auto__){
var s__10417__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10417__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10417__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10419 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10418 = (0);
while(true){
if((i__10418 < size__4323__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10418);
cljs.core.chunk_append(b__10419,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mined,(i < cljs.core.deref(minesweeper_reagent.core.num_mines)),cljs.core.cst$kw$exposed,false], null));

var G__10420 = (i__10418 + (1));
i__10418 = G__10420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10419),minesweeper_reagent$core$set_mines_$_iter__10416(cljs.core.chunk_rest(s__10417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10419),null);
}
} else {
var i = cljs.core.first(s__10417__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mined,(i < cljs.core.deref(minesweeper_reagent.core.num_mines)),cljs.core.cst$kw$exposed,false], null),minesweeper_reagent$core$set_mines_$_iter__10416(cljs.core.rest(s__10417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(minesweeper_reagent.core.grid_size) * cljs.core.deref(minesweeper_reagent.core.grid_size))));
});
minesweeper_reagent.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,minesweeper_reagent.core.rand_positions(),minesweeper_reagent.core.set_mines())));
minesweeper_reagent.core.neighbors = (function minesweeper_reagent$core$neighbors(p__10421){
var vec__10422 = p__10421;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10422,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10422,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.deref(minesweeper_reagent.core.app_state)),(function (){var iter__4324__auto__ = ((function (vec__10422,x,y){
return (function minesweeper_reagent$core$neighbors_$_iter__10425(s__10426){
return (new cljs.core.LazySeq(null,((function (vec__10422,x,y){
return (function (){
var s__10426__$1 = s__10426;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10426__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10426__$1,i,xs__6012__auto__,temp__5457__auto__,vec__10422,x,y){
return (function minesweeper_reagent$core$neighbors_$_iter__10425_$_iter__10427(s__10428){
return (new cljs.core.LazySeq(null,((function (s__10426__$1,i,xs__6012__auto__,temp__5457__auto__,vec__10422,x,y){
return (function (){
var s__10428__$1 = s__10428;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10428__$1);
if(temp__5457__auto____$1){
var s__10428__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10428__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10428__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10430 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10429 = (0);
while(true){
if((i__10429 < size__4323__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10429);
if(cljs.core.truth_((function (){var or__3949__auto__ = i;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return j;
}
})())){
cljs.core.chunk_append(b__10430,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + i),(y + j)], null));

var G__10431 = (i__10429 + (1));
i__10429 = G__10431;
continue;
} else {
var G__10432 = (i__10429 + (1));
i__10429 = G__10432;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10430),minesweeper_reagent$core$neighbors_$_iter__10425_$_iter__10427(cljs.core.chunk_rest(s__10428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10430),null);
}
} else {
var j = cljs.core.first(s__10428__$2);
if(cljs.core.truth_((function (){var or__3949__auto__ = i;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return j;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + i),(y + j)], null),minesweeper_reagent$core$neighbors_$_iter__10425_$_iter__10427(cljs.core.rest(s__10428__$2)));
} else {
var G__10433 = cljs.core.rest(s__10428__$2);
s__10428__$1 = G__10433;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__10426__$1,i,xs__6012__auto__,temp__5457__auto__,vec__10422,x,y))
,null,null));
});})(s__10426__$1,i,xs__6012__auto__,temp__5457__auto__,vec__10422,x,y))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,minesweeper_reagent$core$neighbors_$_iter__10425(cljs.core.rest(s__10426__$1)));
} else {
var G__10434 = cljs.core.rest(s__10426__$1);
s__10426__$1 = G__10434;
continue;
}
} else {
return null;
}
break;
}
});})(vec__10422,x,y))
,null,null));
});})(vec__10422,x,y))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
minesweeper_reagent.core.mine_count = (function minesweeper_reagent$core$mine_count(p__10435){
var vec__10436 = p__10435;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10436,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10436,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$mined.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return (1);
} else {
return (0);
}
});
minesweeper_reagent.core.mine_detector = (function minesweeper_reagent$core$mine_detector(p__10439){
var vec__10440 = p__10439;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(minesweeper_reagent.core.mine_count),minesweeper_reagent.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
});
minesweeper_reagent.core.step = (function minesweeper_reagent$core$step(grid,p__10443){
var vec__10444 = p__10443;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10444,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10444,(1),null);
var square = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var step_square = cljs.core.assoc_in(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$exposed], null),true);
if(cljs.core.truth_(cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(square))){
return grid;
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.cst$kw$mined.cljs$core$IFn$_invoke$arity$1(square);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((0) < minesweeper_reagent.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
}
})())){
return step_square;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(minesweeper_reagent.core.step,step_square,minesweeper_reagent.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

}
}
});
minesweeper_reagent.core.game_status = (function minesweeper_reagent$core$game_status(){
if(cljs.core.truth_(cljs.core.some((function (p__10447){
var vec__10448 = p__10447;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10448,(1),null);
var and__3938__auto__ = cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.cst$kw$mined.cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__3938__auto__;
}
}),cljs.core.deref(minesweeper_reagent.core.app_state)))){
return cljs.core.cst$kw$dead;
} else {
if(cljs.core.every_QMARK_((function (p__10451){
var vec__10452 = p__10451;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10452,(1),null);
var or__3949__auto__ = cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$mined.cljs$core$IFn$_invoke$arity$1(v);
}
}),cljs.core.deref(minesweeper_reagent.core.app_state))){
return cljs.core.cst$kw$win;
} else {
if(cljs.core.truth_(cljs.core.some((function (p__10455){
var vec__10456 = p__10455;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,(1),null);
return cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref(minesweeper_reagent.core.app_state)))){
return cljs.core.cst$kw$in_DASH_progress;
} else {
return cljs.core.cst$kw$new;

}
}
}
});
minesweeper_reagent.core.mouse_down_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
minesweeper_reagent.core.icon = (function minesweeper_reagent$core$icon(){
var G__10459 = minesweeper_reagent.core.game_status();
var G__10459__$1 = (((G__10459 instanceof cljs.core.Keyword))?G__10459.fqn:null);
switch (G__10459__$1) {
case "dead":
return "\uD83E\uDD2F";

break;
case "win":
return "\uD83E\uDD13";

break;
default:
if(cljs.core.truth_(cljs.core.deref(minesweeper_reagent.core.mouse_down_QMARK_))){
return "\uD83D\uDE2C";
} else {
return "\uD83E\uDD7A";
}

}
});
minesweeper_reagent.core.mouse_over_cell = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
minesweeper_reagent.core.flag_BANG_ = (function minesweeper_reagent$core$flag_BANG_(p__10461){
var vec__10462 = p__10461;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,(1),null);
if(cljs.core.not(cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(minesweeper_reagent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$flagged], null),true);
} else {
return null;
}
});
minesweeper_reagent.core.unflag_BANG_ = (function minesweeper_reagent$core$unflag_BANG_(p__10465){
var vec__10466 = p__10465;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10466,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10466,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(minesweeper_reagent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$flagged], null),false);
});
minesweeper_reagent.core.step_BANG_ = (function minesweeper_reagent$core$step_BANG_(p__10469){
var vec__10470 = p__10469;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(1),null);
if(cljs.core.not(cljs.core.cst$kw$flagged.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return cljs.core.reset_BANG_(minesweeper_reagent.core.app_state,minesweeper_reagent.core.step(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
return null;
}
});
minesweeper_reagent.core.rect_cell = (function minesweeper_reagent$core$rect_cell(p__10474){
var vec__10475 = p__10474;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10475,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_contextMenu,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_up,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[-0.9,"black",((function (vec__10475,x,y){
return (function (p1__10473_SHARP_){
p1__10473_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return cljs.core.run_BANG_(minesweeper_reagent.core.step_BANG_,minesweeper_reagent.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$flagged.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return minesweeper_reagent.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return minesweeper_reagent.core.flag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
}
});})(vec__10475,x,y))
,((function (vec__10475,x,y){
return (function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.mouse_over_cell,null);
});})(vec__10475,x,y))
,(cljs.core.truth_(cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?"white":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref(minesweeper_reagent.core.mouse_over_cell)))?"darkgrey":"silver"
)),1.85,((function (vec__10475,x,y){
return (function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.mouse_down_QMARK_,true);
});})(vec__10475,x,y))
,((function (vec__10475,x,y){
return (function (){
if(cljs.core.not(cljs.core.cst$kw$flagged.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
var G__10478 = minesweeper_reagent.core.game_status();
var G__10478__$1 = (((G__10478 instanceof cljs.core.Keyword))?G__10478.fqn:null);
switch (G__10478__$1) {
case "new":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(minesweeper_reagent.core.app_state,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mined,false,cljs.core.cst$kw$exposed,false], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(minesweeper_reagent.core.app_state,minesweeper_reagent.core.step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

break;
case "in-progress":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(minesweeper_reagent.core.app_state,minesweeper_reagent.core.step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10478__$1)].join('')));

}
} else {
return null;
}
});})(vec__10475,x,y))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref(minesweeper_reagent.core.mouse_over_cell)))?0.1:0.08),((function (vec__10475,x,y){
return (function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.mouse_down_QMARK_,false);
});})(vec__10475,x,y))
,((function (vec__10475,x,y){
return (function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.mouse_over_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(vec__10475,x,y))
,-0.9,1.85])], null);
});
minesweeper_reagent.core.mine_num = (function minesweeper_reagent$core$mine_num(p__10481){
var vec__10482 = p__10481;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_weight,"900",cljs.core.cst$kw$fill,(function (){var G__10485 = minesweeper_reagent.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
switch (G__10485) {
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
})(),cljs.core.cst$kw$font_DASH_size,"1.25",cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (vec__10482,x,y){
return (function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.mouse_down_QMARK_,true);
});})(vec__10482,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_up,((function (vec__10482,x,y){
return (function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.mouse_down_QMARK_,false);
});})(vec__10482,x,y))
,cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__10482,x,y){
return (function (p1__10480_SHARP_){
p1__10480_SHARP_.preventDefault();

return cljs.core.run_BANG_(minesweeper_reagent.core.step_BANG_,minesweeper_reagent.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(vec__10482,x,y))
], null),minesweeper_reagent.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
});
minesweeper_reagent.core.bomb = (function minesweeper_reagent$core$bomb(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,"1.5"], null),"\uD83D\uDCA5"], null);
});
minesweeper_reagent.core.flag = (function minesweeper_reagent$core$flag(p__10488){
var vec__10489 = p__10488;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$y,0.5,cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_weight,"600",cljs.core.cst$kw$fill,"red",cljs.core.cst$kw$font_DASH_size,"1.5",cljs.core.cst$kw$on_DASH_contextMenu,((function (vec__10489,x,y){
return (function (p1__10487_SHARP_){
p1__10487_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.cst$kw$flagged.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweeper_reagent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return minesweeper_reagent.core.unflag_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return null;
}
});})(vec__10489,x,y))
], null),"\u2620\uFE0F"], null);
});
minesweeper_reagent.core.render_board = (function minesweeper_reagent$core$render_board(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$board,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(minesweeper_reagent.core.grid_size))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(minesweeper_reagent.core.grid_size))].join(''),cljs.core.cst$kw$shape_DASH_rendering,"auto",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"800px"], null)], null)], null),(function (){var iter__4324__auto__ = (function minesweeper_reagent$core$render_board_$_iter__10492(s__10493){
return (new cljs.core.LazySeq(null,(function (){
var s__10493__$1 = s__10493;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10493__$1);
if(temp__5457__auto__){
var s__10493__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10493__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10493__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10495 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10494 = (0);
while(true){
if((i__10494 < size__4323__auto__)){
var vec__10496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10494);
var vec__10499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10496,(1),null);
cljs.core.chunk_append(b__10495,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.rect_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),(cljs.core.truth_(cljs.core.cst$kw$flagged.cljs$core$IFn$_invoke$arity$1(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),(cljs.core.truth_(cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(attrs))?(cljs.core.truth_(cljs.core.cst$kw$mined.cljs$core$IFn$_invoke$arity$1(attrs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.bomb], null):((((0) < minesweeper_reagent.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.mine_num,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null)):null)], null));

var G__10508 = (i__10494 + (1));
i__10494 = G__10508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10495),minesweeper_reagent$core$render_board_$_iter__10492(cljs.core.chunk_rest(s__10493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10495),null);
}
} else {
var vec__10502 = cljs.core.first(s__10493__$2);
var vec__10505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10502,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10502,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") ","scale (0.5)","translate(1,1)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.rect_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),(cljs.core.truth_(cljs.core.cst$kw$flagged.cljs$core$IFn$_invoke$arity$1(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null),(cljs.core.truth_(cljs.core.cst$kw$exposed.cljs$core$IFn$_invoke$arity$1(attrs))?(cljs.core.truth_(cljs.core.cst$kw$mined.cljs$core$IFn$_invoke$arity$1(attrs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.bomb], null):((((0) < minesweeper_reagent.core.mine_detector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.mine_num,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null):null)):null)], null),minesweeper_reagent$core$render_board_$_iter__10492(cljs.core.rest(s__10493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.deref(minesweeper_reagent.core.app_state));
})());
});
minesweeper_reagent.core.size_input = (function minesweeper_reagent$core$size_input(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Grid size: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref(minesweeper_reagent.core.grid_size),cljs.core.cst$kw$on_DASH_change,(function (p1__10509_SHARP_){
return cljs.core.reset_BANG_(minesweeper_reagent.core.grid_size,p1__10509_SHARP_.target.value);
})], null)], null)], null)], null);
});
});
minesweeper_reagent.core.mines_input = (function minesweeper_reagent$core$mines_input(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Mine count: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref(minesweeper_reagent.core.num_mines),cljs.core.cst$kw$on_DASH_change,(function (p1__10510_SHARP_){
return cljs.core.reset_BANG_(minesweeper_reagent.core.num_mines,p1__10510_SHARP_.target.value);
})], null)], null)], null)], null);
});
});
minesweeper_reagent.core.minesweeper = (function minesweeper_reagent$core$minesweeper(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Minesweeper"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.size_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.mines_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"75px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(minesweeper_reagent.core.app_state,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,minesweeper_reagent.core.rand_positions(),minesweeper_reagent.core.set_mines())));
})], null),minesweeper_reagent.core.icon()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.render_board], null)], null);
});
minesweeper_reagent.core.mount_app_element = (function minesweeper_reagent$core$mount_app_element(){
var temp__5457__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
var G__10511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.minesweeper], null);
var G__10512 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10511,G__10512) : reagent.core.render_component.call(null,G__10511,G__10512));
} else {
return null;
}
});
minesweeper_reagent.core.mount_app_element();
minesweeper_reagent.core.on_reload = (function minesweeper_reagent$core$on_reload(){
return minesweeper_reagent.core.mount_app_element();
});
