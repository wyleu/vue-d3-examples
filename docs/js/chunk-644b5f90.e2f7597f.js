(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644b5f90"],{"662a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Force-Direct Graph")]),r("svg",{staticClass:"container-border",attrs:{width:"960",height:"600"}})])},a=[],o=(r("7f7f"),r("5698")),u={data:function(){return{}},mounted:function(){var t={top:60,bottom:60,left:60,right:60},e=o["w"]("svg"),r=e.attr("width"),n=e.attr("height"),a=e.append("g").attr("transform","translate("+t.top+","+t.left+")"),u=[{name:"湖南邵阳"},{name:"山东泰安"},{name:"广东阳江"},{name:"山西太原"},{name:"亮"},{name:"丽"},{name:"雪"},{name:"小明"},{name:"组长"}],c=[{source:0,target:4,relation:"籍贯",value:1.3},{source:4,target:5,relation:"舍友",value:1},{source:4,target:6,relation:"舍友",value:1},{source:4,target:7,relation:"舍友",value:1},{source:1,target:6,relation:"籍贯",value:2},{source:2,target:5,relation:"籍贯",value:.9},{source:3,target:7,relation:"籍贯",value:1},{source:5,target:6,relation:"同学",value:1.6},{source:6,target:7,relation:"朋友",value:.7},{source:6,target:8,relation:"职责",value:2}],i=o["u"]().domain(o["r"](u.length)).range(o["v"]),l=o["h"]().force("link",o["f"]()).force("charge",o["g"]()).force("center",o["e"]());l.nodes(u).on("tick",d),l.force("link").links(c).distance((function(t){return 100*t.value})),l.force("center").x(r/2).y(n/2);var f=a.append("g").selectAll("line").data(c).enter().append("line").attr("stroke",(function(t,e){return i(e)})).attr("stroke-width",1),s=a.append("g").selectAll("text").data(c).enter().append("text").text((function(t){return t.relation})),g=a.selectAll(".circleText").data(u).enter().append("g").attr("transform",(function(t){var e=t.x,r=t.y;return"translate("+e+","+r+")"})).call(o["c"]().on("start",p).on("drag",v).on("end",x));function d(){f.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y})),s.attr("x",(function(t){return(t.source.x+t.target.x)/2})).attr("y",(function(t){return(t.source.y+t.target.y)/2})),g.attr("transform",(function(t){return"translate("+t.x+","+t.y+")"}))}function p(t){o["d"].active||l.alphaTarget(.8).restart(),t.fx=t.x,t.fy=t.y}function v(t){t.fx=o["d"].x,t.fy=o["d"].y}function x(t){o["d"].active||l.alphaTarget(0),t.fx=null,t.fy=null}g.append("circle").attr("r",10).attr("fill",(function(t,e){return i(e)})),g.append("text").attr("x",-10).attr("y",-20).attr("dy",10).text((function(t){return t.name}))}},c=u,i=r("2877"),l=Object(i["a"])(c,n,a,!1,null,"43e06196",null);e["default"]=l.exports},"7f7f":function(t,e,r){var n=r("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,u="name";u in a||r("9e1e")&&n(a,u,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-644b5f90.e2f7597f.js.map