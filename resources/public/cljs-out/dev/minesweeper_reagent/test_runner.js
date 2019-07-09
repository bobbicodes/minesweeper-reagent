// Compiled by ClojureScript 1.10.339 {}
goog.provide('minesweeper_reagent.test_runner');
goog.require('cljs.core');
goog.require('minesweeper_reagent.core_test');
goog.require('figwheel.main.testing');
minesweeper_reagent.test_runner._main = (function minesweeper_reagent$test_runner$_main(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23097 = arguments.length;
var i__4532__auto___23098 = (0);
while(true){
if((i__4532__auto___23098 < len__4531__auto___23097)){
args__4534__auto__.push((arguments[i__4532__auto___23098]));

var G__23099 = (i__4532__auto___23098 + (1));
i__4532__auto___23098 = G__23099;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return minesweeper_reagent.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

minesweeper_reagent.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5323__auto___23100 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5323__auto___23100))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5323__auto___23100,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),((function (reporter__5323__auto___23100){
return (function (m__5324__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5324__auto__);
});})(reporter__5323__auto___23100))
);
}

cljs.test.run_block.call(null,(function (){var env23095 = cljs.test.empty_env.call(null);
var summary23096 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23095,summary23096,reporter__5323__auto___23100){
return (function (){
cljs.test.set_env_BANG_.call(null,env23095);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"minesweeper-reagent.test-runner","minesweeper-reagent.test-runner",-1556594543,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10402__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10402__auto__,env23095,summary23096,reporter__5323__auto___23100){
return (function (){
if((env__10402__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10402__auto__,env23095,summary23096,reporter__5323__auto___23100))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10402__auto__,env23095,summary23096,reporter__5323__auto___23100){
return (function (){
if((env__10402__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10402__auto__,env23095,summary23096,reporter__5323__auto___23100))
], null));
})());
});})(env23095,summary23096,reporter__5323__auto___23100))
,((function (env23095,summary23096,reporter__5323__auto___23100){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"minesweeper-reagent.test-runner","minesweeper-reagent.test-runner",-1556594543,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env23095,summary23096,reporter__5323__auto___23100))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23095,summary23096,reporter__5323__auto___23100){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary23096,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary23096),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env23095,summary23096,reporter__5323__auto___23100))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23095,summary23096,reporter__5323__auto___23100){
return (function (){
cljs.test.set_env_BANG_.call(null,env23095);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary23096));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary23096),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env23095,summary23096,reporter__5323__auto___23100))
], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
});

minesweeper_reagent.test_runner._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
minesweeper_reagent.test_runner._main.cljs$lang$applyTo = (function (seq23094){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23094));
});


//# sourceMappingURL=test_runner.js.map
