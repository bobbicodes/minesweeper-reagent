// Compiled by ClojureScript 1.10.339 {}
goog.provide('minesweeper_reagent.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
minesweeper_reagent.core.board_width = (9);
minesweeper_reagent.core.board_height = (9);
minesweeper_reagent.core.num_mines = (18);
minesweeper_reagent.core.rand_positions = (function minesweeper_reagent$core$rand_positions(){
return cljs.core.shuffle.call(null,(function (){var iter__4324__auto__ = (function minesweeper_reagent$core$rand_positions_$_iter__18651(s__18652){
return (new cljs.core.LazySeq(null,(function (){
var s__18652__$1 = s__18652;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18652__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__18652__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function minesweeper_reagent$core$rand_positions_$_iter__18651_$_iter__18653(s__18654){
return (new cljs.core.LazySeq(null,((function (s__18652__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__18654__$1 = s__18654;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18654__$1);
if(temp__5457__auto____$1){
var s__18654__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18654__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18654__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18656 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18655 = (0);
while(true){
if((i__18655 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__18655);
cljs.core.chunk_append.call(null,b__18656,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__18657 = (i__18655 + (1));
i__18655 = G__18657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18656),minesweeper_reagent$core$rand_positions_$_iter__18651_$_iter__18653.call(null,cljs.core.chunk_rest.call(null,s__18654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18656),null);
}
} else {
var j = cljs.core.first.call(null,s__18654__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),minesweeper_reagent$core$rand_positions_$_iter__18651_$_iter__18653.call(null,cljs.core.rest.call(null,s__18654__$2)));
}
} else {
return null;
}
break;
}
});})(s__18652__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__18652__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,minesweeper_reagent.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,minesweeper_reagent$core$rand_positions_$_iter__18651.call(null,cljs.core.rest.call(null,s__18652__$1)));
} else {
var G__18658 = cljs.core.rest.call(null,s__18652__$1);
s__18652__$1 = G__18658;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,minesweeper_reagent.core.board_width));
})());
});
minesweeper_reagent.core.set_mines = (function minesweeper_reagent$core$set_mines(){
var squares = cljs.core.repeat.call(null,minesweeper_reagent.core.num_mines,(1));
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,squares),(minesweeper_reagent.core.board_width * minesweeper_reagent.core.board_height))){
return squares;
} else {
var G__18659 = cljs.core.conj.call(null,squares,(0));
squares = G__18659;
continue;
}
break;
}
});
minesweeper_reagent.core.init_matrix = (function minesweeper_reagent$core$init_matrix(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,minesweeper_reagent.core.rand_positions.call(null),minesweeper_reagent.core.set_mines.call(null)));
});
if((typeof minesweeper_reagent !== 'undefined') && (typeof minesweeper_reagent.core !== 'undefined') && (typeof minesweeper_reagent.core.app_state !== 'undefined')){
} else {
minesweeper_reagent.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"matrix","matrix",803137200),minesweeper_reagent.core.init_matrix.call(null),new cljs.core.Keyword(null,"stepped","stepped",-834721899),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"message","message",-406056002),"Tread lightly..."], null));
}
minesweeper_reagent.core.mine_QMARK_ = (function minesweeper_reagent$core$mine_QMARK_(x,y){
return cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
minesweeper_reagent.core.top_left_QMARK_ = (function minesweeper_reagent$core$top_left_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,(x - (1)),(y - (1))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.top_QMARK_ = (function minesweeper_reagent$core$top_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,x,(y - (1))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.top_right_QMARK_ = (function minesweeper_reagent$core$top_right_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,(x + (1)),(y - (1))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.right_QMARK_ = (function minesweeper_reagent$core$right_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,(x + (1)),y))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.bottom_right_QMARK_ = (function minesweeper_reagent$core$bottom_right_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,(x + (1)),(y + (1))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.bottom_QMARK_ = (function minesweeper_reagent$core$bottom_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,x,(y + (1))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.bottom_left_QMARK_ = (function minesweeper_reagent$core$bottom_left_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,(x - (1)),(y + (1))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.left_QMARK_ = (function minesweeper_reagent$core$left_QMARK_(x,y,n){
if(cljs.core.truth_(minesweeper_reagent.core.mine_QMARK_.call(null,(x - (1)),y))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,n], null);
}
});
minesweeper_reagent.core.mine_detector = (function minesweeper_reagent$core$mine_detector(x,y){
return cljs.core.last.call(null,cljs.core.apply.call(null,minesweeper_reagent.core.left_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.bottom_left_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.bottom_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.bottom_right_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.right_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.top_right_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.top_QMARK_,cljs.core.apply.call(null,minesweeper_reagent.core.top_left_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(0)], null))))))))));
});
minesweeper_reagent.core.step = (function minesweeper_reagent$core$step(x,y){
return cljs.core.swap_BANG_.call(null,minesweeper_reagent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stepped","stepped",-834721899)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stepped","stepped",-834721899).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null)));
});
minesweeper_reagent.core.get_app_element = (function minesweeper_reagent$core$get_app_element(){
return goog.dom.getElement("app");
});
minesweeper_reagent.core.blank = (function minesweeper_reagent$core$blank(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"x","x",2099068185),(0.05 + i),new cljs.core.Keyword(null,"y","y",-1757859776),(0.05 + j),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function minesweeper_reagent$core$blank_$_blank_click(e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
cljs.core.swap_BANG_.call(null,minesweeper_reagent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stepped","stepped",-834721899)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stepped","stepped",-834721899).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)));

if(cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.swap_BANG_.call(null,minesweeper_reagent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"dead","dead",-1946604091));

return cljs.core.swap_BANG_.call(null,minesweeper_reagent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"message","message",-406056002),"Fuck. You blew up.");
} else {
return null;
}
} else {
return null;
}
})], null)], null);
});
minesweeper_reagent.core.rect_cell = (function minesweeper_reagent$core$rect_cell(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect.cell","rect.cell",-717382927),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(0.05 + x),new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"y","y",-1757859776),(0.05 + y),new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.025,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null);
});
minesweeper_reagent.core.text_cell = (function minesweeper_reagent$core$text_cell(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 + x),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.72 + y),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.6], null),(((minesweeper_reagent.core.mine_detector.call(null,x,y) === (0)))?"":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(minesweeper_reagent.core.mine_detector.call(null,x,y))].join(''))], null);
});
minesweeper_reagent.core.cross = (function minesweeper_reagent$core$cross(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"darkred",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + i)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + j)),") ","scale(0.3)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null);
});
minesweeper_reagent.core.clear_squares_BANG_ = (function minesweeper_reagent$core$clear_squares_BANG_(){
return cljs.core.map.call(null,minesweeper_reagent.core.step,new cljs.core.Keyword(null,"stepped","stepped",-834721899).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)));
});
minesweeper_reagent.core.render_board = (function minesweeper_reagent$core$render_board(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minesweeper_reagent.core.board_width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minesweeper_reagent.core.board_height)].join(''),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"500px"], null)], null)], null),(function (){var iter__4324__auto__ = (function minesweeper_reagent$core$render_board_$_iter__18660(s__18661){
return (new cljs.core.LazySeq(null,(function (){
var s__18661__$1 = s__18661;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18661__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__18661__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function minesweeper_reagent$core$render_board_$_iter__18660_$_iter__18662(s__18663){
return (new cljs.core.LazySeq(null,((function (s__18661__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__18663__$1 = s__18663;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18663__$1);
if(temp__5457__auto____$1){
var s__18663__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18663__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18663__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18665 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18664 = (0);
while(true){
if((i__18664 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__18664);
cljs.core.chunk_append.call(null,b__18665,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.rect_cell,i,j], null),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)]),new cljs.core.Keyword(null,"stepped","stepped",-834721899).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state))))?((cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.cross,i,j], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.text_cell,i,j], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.blank,i,j], null))], null));

var G__18666 = (i__18664 + (1));
i__18664 = G__18666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18665),minesweeper_reagent$core$render_board_$_iter__18660_$_iter__18662.call(null,cljs.core.chunk_rest.call(null,s__18663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18665),null);
}
} else {
var j = cljs.core.first.call(null,s__18663__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.rect_cell,i,j], null),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)]),new cljs.core.Keyword(null,"stepped","stepped",-834721899).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state))))?((cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.cross,i,j], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.text_cell,i,j], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.blank,i,j], null))], null),minesweeper_reagent$core$render_board_$_iter__18660_$_iter__18662.call(null,cljs.core.rest.call(null,s__18663__$2)));
}
} else {
return null;
}
break;
}
});})(s__18661__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__18661__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,minesweeper_reagent.core.board_height)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,minesweeper_reagent$core$render_board_$_iter__18660.call(null,cljs.core.rest.call(null,s__18661__$1)));
} else {
var G__18667 = cljs.core.rest.call(null,s__18661__$1);
s__18661__$1 = G__18667;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,minesweeper_reagent.core.board_width));
})());
});
minesweeper_reagent.core.minesweeper = (function minesweeper_reagent$core$minesweeper(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper_reagent.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function minesweeper_reagent$core$minesweeper_$_new_game_click(e){
return cljs.core.swap_BANG_.call(null,minesweeper_reagent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"matrix","matrix",803137200),minesweeper_reagent.core.init_matrix.call(null),new cljs.core.Keyword(null,"message","message",-406056002),"Welcome back",new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"stepped","stepped",-834721899),cljs.core.PersistentVector.EMPTY);
})], null),"Reset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.render_board], null)], null)], null);
});
minesweeper_reagent.core.mount = (function minesweeper_reagent$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_reagent.core.minesweeper], null),el);
});
minesweeper_reagent.core.mount_app_element = (function minesweeper_reagent$core$mount_app_element(){
var temp__5457__auto__ = minesweeper_reagent.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return minesweeper_reagent.core.mount.call(null,el);
} else {
return null;
}
});
minesweeper_reagent.core.mount_app_element.call(null);
minesweeper_reagent.core.on_reload = (function minesweeper_reagent$core$on_reload(){
return minesweeper_reagent.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
