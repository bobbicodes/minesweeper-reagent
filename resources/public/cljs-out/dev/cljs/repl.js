// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18527){
var map__18528 = p__18527;
var map__18528__$1 = ((((!((map__18528 == null)))?(((((map__18528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18528):map__18528);
var m = map__18528__$1;
var n = cljs.core.get.call(null,map__18528__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18530_18552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18531_18553 = null;
var count__18532_18554 = (0);
var i__18533_18555 = (0);
while(true){
if((i__18533_18555 < count__18532_18554)){
var f_18556 = cljs.core._nth.call(null,chunk__18531_18553,i__18533_18555);
cljs.core.println.call(null,"  ",f_18556);


var G__18557 = seq__18530_18552;
var G__18558 = chunk__18531_18553;
var G__18559 = count__18532_18554;
var G__18560 = (i__18533_18555 + (1));
seq__18530_18552 = G__18557;
chunk__18531_18553 = G__18558;
count__18532_18554 = G__18559;
i__18533_18555 = G__18560;
continue;
} else {
var temp__5457__auto___18561 = cljs.core.seq.call(null,seq__18530_18552);
if(temp__5457__auto___18561){
var seq__18530_18562__$1 = temp__5457__auto___18561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18530_18562__$1)){
var c__4351__auto___18563 = cljs.core.chunk_first.call(null,seq__18530_18562__$1);
var G__18564 = cljs.core.chunk_rest.call(null,seq__18530_18562__$1);
var G__18565 = c__4351__auto___18563;
var G__18566 = cljs.core.count.call(null,c__4351__auto___18563);
var G__18567 = (0);
seq__18530_18552 = G__18564;
chunk__18531_18553 = G__18565;
count__18532_18554 = G__18566;
i__18533_18555 = G__18567;
continue;
} else {
var f_18568 = cljs.core.first.call(null,seq__18530_18562__$1);
cljs.core.println.call(null,"  ",f_18568);


var G__18569 = cljs.core.next.call(null,seq__18530_18562__$1);
var G__18570 = null;
var G__18571 = (0);
var G__18572 = (0);
seq__18530_18552 = G__18569;
chunk__18531_18553 = G__18570;
count__18532_18554 = G__18571;
i__18533_18555 = G__18572;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18573 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18573);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18573)))?cljs.core.second.call(null,arglists_18573):arglists_18573));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18534_18574 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18535_18575 = null;
var count__18536_18576 = (0);
var i__18537_18577 = (0);
while(true){
if((i__18537_18577 < count__18536_18576)){
var vec__18538_18578 = cljs.core._nth.call(null,chunk__18535_18575,i__18537_18577);
var name_18579 = cljs.core.nth.call(null,vec__18538_18578,(0),null);
var map__18541_18580 = cljs.core.nth.call(null,vec__18538_18578,(1),null);
var map__18541_18581__$1 = ((((!((map__18541_18580 == null)))?(((((map__18541_18580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18541_18580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18541_18580):map__18541_18580);
var doc_18582 = cljs.core.get.call(null,map__18541_18581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18583 = cljs.core.get.call(null,map__18541_18581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18579);

cljs.core.println.call(null," ",arglists_18583);

if(cljs.core.truth_(doc_18582)){
cljs.core.println.call(null," ",doc_18582);
} else {
}


var G__18584 = seq__18534_18574;
var G__18585 = chunk__18535_18575;
var G__18586 = count__18536_18576;
var G__18587 = (i__18537_18577 + (1));
seq__18534_18574 = G__18584;
chunk__18535_18575 = G__18585;
count__18536_18576 = G__18586;
i__18537_18577 = G__18587;
continue;
} else {
var temp__5457__auto___18588 = cljs.core.seq.call(null,seq__18534_18574);
if(temp__5457__auto___18588){
var seq__18534_18589__$1 = temp__5457__auto___18588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18534_18589__$1)){
var c__4351__auto___18590 = cljs.core.chunk_first.call(null,seq__18534_18589__$1);
var G__18591 = cljs.core.chunk_rest.call(null,seq__18534_18589__$1);
var G__18592 = c__4351__auto___18590;
var G__18593 = cljs.core.count.call(null,c__4351__auto___18590);
var G__18594 = (0);
seq__18534_18574 = G__18591;
chunk__18535_18575 = G__18592;
count__18536_18576 = G__18593;
i__18537_18577 = G__18594;
continue;
} else {
var vec__18543_18595 = cljs.core.first.call(null,seq__18534_18589__$1);
var name_18596 = cljs.core.nth.call(null,vec__18543_18595,(0),null);
var map__18546_18597 = cljs.core.nth.call(null,vec__18543_18595,(1),null);
var map__18546_18598__$1 = ((((!((map__18546_18597 == null)))?(((((map__18546_18597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18546_18597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18546_18597):map__18546_18597);
var doc_18599 = cljs.core.get.call(null,map__18546_18598__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18600 = cljs.core.get.call(null,map__18546_18598__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18596);

cljs.core.println.call(null," ",arglists_18600);

if(cljs.core.truth_(doc_18599)){
cljs.core.println.call(null," ",doc_18599);
} else {
}


var G__18601 = cljs.core.next.call(null,seq__18534_18589__$1);
var G__18602 = null;
var G__18603 = (0);
var G__18604 = (0);
seq__18534_18574 = G__18601;
chunk__18535_18575 = G__18602;
count__18536_18576 = G__18603;
i__18537_18577 = G__18604;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18548 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18549 = null;
var count__18550 = (0);
var i__18551 = (0);
while(true){
if((i__18551 < count__18550)){
var role = cljs.core._nth.call(null,chunk__18549,i__18551);
var temp__5457__auto___18605__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18605__$1)){
var spec_18606 = temp__5457__auto___18605__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18606));
} else {
}


var G__18607 = seq__18548;
var G__18608 = chunk__18549;
var G__18609 = count__18550;
var G__18610 = (i__18551 + (1));
seq__18548 = G__18607;
chunk__18549 = G__18608;
count__18550 = G__18609;
i__18551 = G__18610;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18548);
if(temp__5457__auto____$1){
var seq__18548__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18548__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18548__$1);
var G__18611 = cljs.core.chunk_rest.call(null,seq__18548__$1);
var G__18612 = c__4351__auto__;
var G__18613 = cljs.core.count.call(null,c__4351__auto__);
var G__18614 = (0);
seq__18548 = G__18611;
chunk__18549 = G__18612;
count__18550 = G__18613;
i__18551 = G__18614;
continue;
} else {
var role = cljs.core.first.call(null,seq__18548__$1);
var temp__5457__auto___18615__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18615__$2)){
var spec_18616 = temp__5457__auto___18615__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18616));
} else {
}


var G__18617 = cljs.core.next.call(null,seq__18548__$1);
var G__18618 = null;
var G__18619 = (0);
var G__18620 = (0);
seq__18548 = G__18617;
chunk__18549 = G__18618;
count__18550 = G__18619;
i__18551 = G__18620;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
