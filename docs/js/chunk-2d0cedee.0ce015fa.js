(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cedee"],{"60fd":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h2",[t._v("Complete Histogram II")]),r("svg",{attrs:{width:"960",height:"600"}})])},e=[],o=r("5698"),i={data:function(){return{}},mounted:function(){var t={top:60,bottom:60,left:60,right:60},n=o["w"]("svg"),r=n.attr("width"),a=n.attr("height"),e=n.append("g").attr("transform","translate("+t.top+","+t.left+")"),i=[10,20,30,23,13,40,27,35,20],u=o["s"]().domain(o["r"](i.length)).rangeRound([0,r-t.left-t.right]),c=o["a"](u),d=o["t"]().domain([0,o["p"](i)]).range([a-t.top-t.bottom,0]),l=o["b"](d);e.append("g").attr("transform","translate(0,"+(a-t.top-t.bottom)+")").call(c),e.append("g").attr("transform","translate(0, 0)").call(l);var f=e.selectAll(".rect").data(i).enter().append("g"),p=20;f.append("rect").attr("x",(function(t,n){return u(n)+p/2})).attr("y",(function(){var t=d.domain()[0];return d(t)})).attr("width",(function(){return u.step()-p})).attr("height",(function(){return 0})).attr("fill","lightblue").transition().duration(2e3).delay((function(t,n){return 400*n})).attr("y",(function(t){return d(t)})).attr("height",(function(n){return a-t.top-t.bottom-d(n)})),f.append("text").attr("x",(function(t,n){return u(n)+p/2})).attr("y",(function(){var t=d.domain()[0];return d(t)})).attr("dx",(function(){u.step()})).attr("dy",20).text((function(t){return t})).transition().duration(2e3).delay((function(t,n){return 400*n})).attr("y",(function(t){return d(t)}))}},u=i,c=r("2877"),d=Object(c["a"])(u,a,e,!1,null,"294c4a04",null);n["default"]=d.exports}}]);
<<<<<<< HEAD:docs/js/chunk-2d0cedee.0b19d0cd.js
//# sourceMappingURL=chunk-2d0cedee.0b19d0cd.js.map
=======
//# sourceMappingURL=chunk-2d0cedee.0ce015fa.js.map
>>>>>>> 3dcbe143e84e041b05bbf9823851f93d821ee0fa:docs/js/chunk-2d0cedee.0ce015fa.js
