(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-002b54d4"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var r=n("3a38"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),i=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),i=n("63b6"),o=n("9138"),a=n("35e8"),c=n("481b"),u=n("8f60"),s=n("45f2"),f=n("53e2"),l=n("5168")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",h="keys",v="values",b=function(){return this};t.exports=function(t,e,n,g,y,x,m){u(n,e,g);var S,L,w,k=function(t){if(!p&&t in M)return M[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",A=y==v,T=!1,M=t.prototype,j=M[l]||M[d]||y&&M[y],_=j||k(y),N=y?A?k("entries"):_:void 0,P="Array"==e&&M.entries||j;if(P&&(w=f(P.call(new t)),w!==Object.prototype&&w.next&&(s(w,O,!0),r||"function"==typeof w[l]||a(w,l,b))),A&&j&&j.name!==v&&(T=!0,_=function(){return j.call(this)}),r&&!m||!p&&!T&&M[l]||a(M,l,_),c[e]=_,c[O]=b,y)if(S={values:A?_:k(v),keys:x?_:k(h),entries:N},m)for(L in S)L in M||o(M,L,S[L]);else i(i.P+i.F*(p||T),e,S);return S}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var r=n("335c"),i=n("25eb");t.exports=function(t){return r(i(t))}},3702:function(t,e,n){var r=n("481b"),i=n("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},"386b":function(t,e,n){var r=n("5ca1"),i=n("79e5"),o=n("be13"),a=/"/g,c=function(t,e,n,r){var i=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"40c3":function(t,e,n){var r=n("6b4c"),i=n("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},"45f2":function(t,e,n){var r=n("d9f6").f,i=n("07e3"),o=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4ee1":function(t,e,n){var r=n("5168")("iterator"),i=!1;try{var o=[7][r]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:n=!0}},o[r]=function(){return c},t(o)}catch(a){}return n}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),i=n("62a0"),o=n("e53d").Symbol,a="function"==typeof o,c=t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))};c.store=r},5313:function(t){t.exports=JSON.parse('{"nodes":[{"id":"Myriel","group":1},{"id":"Napoleon","group":2},{"id":"Feuilly","group":3}],"links":[{"source":"Myriel","target":"Napoleon","value":1},{"source":"Napoleon","target":"Feuilly","value":2},{"source":"Feuilly","target":"Myriel","value":3}]}')},"53e2":function(t,e,n){var r=n("07e3"),i=n("241e"),o=n("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"549b":function(t,e,n){"use strict";var r=n("d864"),i=n("63b6"),o=n("241e"),a=n("b0dc"),c=n("3702"),u=n("b447"),s=n("20fd"),f=n("7cd6");i(i.S+i.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,p=o(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,b=void 0!==v,g=0,y=f(p);if(b&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(e=u(p.length),n=new d(e);e>g;g++)s(n,g,b?v(p[g],g):p[g]);else for(l=y.call(p),n=new d;!(i=l.next()).done;g++)s(n,g,b?a(l,v,[i.value,g],!0):i.value);return n.length=g,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5559:function(t,e,n){var r=n("dbdb")("keys"),i=n("62a0");t.exports=function(t){return r[t]||(r[t]=i(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var r=n("36c3"),i=n("b447"),o=n("0fc9");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=i(u.length),f=o(a,s);if(t&&n!=n){while(s>f)if(c=u[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("d864"),a=n("35e8"),c=n("07e3"),u="prototype",s=function(t,e,n){var f,l,p,d=t&s.F,h=t&s.G,v=t&s.S,b=t&s.P,g=t&s.B,y=t&s.W,x=h?i:i[e]||(i[e]={}),m=x[u],S=h?r:v?r[e]:(r[e]||{})[u];for(f in h&&(n=e),n)l=!d&&S&&void 0!==S[f],l&&c(x,f)||(p=l?S[f]:n[f],x[f]=h&&"function"!=typeof S[f]?n[f]:g&&l?o(p,r):y&&S[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(p):b&&"function"==typeof p?o(Function.call,p):p,b&&((x.virtual||(x.virtual={}))[f]=p,t&s.R&&m&&!m[f]&&a(m,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),i=n("35e8"),o=n("481b"),a=n("5168")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var s=c[u],f=r[s],l=f&&f.prototype;l&&!l[a]&&i(l,a,s),o[s]=o.Array}},"70ca":function(t,e,n){},"71c1":function(t,e,n){var r=n("3a38"),i=n("25eb");t.exports=function(t){return function(e,n){var o,a,c=String(i(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},"75fc":function(t,e,n){"use strict";var r=n("a745"),i=n.n(r);function o(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var a=n("774e"),c=n.n(a),u=n("c8bb"),s=n.n(u);function f(t){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return o(t)||f(t)||l()}n.d(e,"a",(function(){return p}))},"774e":function(t,e,n){t.exports=n("d2d5")},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7aa5":function(t,e,n){"use strict";var r=n("70ca"),i=n.n(r);i.a},"7cd6":function(t,e,n){var r=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"7e90":function(t,e,n){var r=n("d9f6"),i=n("e4ae"),o=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){i(t);var n,a=o(e),c=a.length,u=0;while(c>u)r.f(t,n=a[u++],e[n]);return t}},8436:function(t,e){t.exports=function(){}},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8f60":function(t,e,n){"use strict";var r=n("a159"),i=n("aebd"),o=n("45f2"),a={};n("35e8")(a,n("5168")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,e,n){t.exports=n("35e8")},"95d5":function(t,e,n){var r=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},a159:function(t,e,n){var r=n("e4ae"),i=n("7e90"),o=n("1691"),a=n("5559")("IE_PROTO"),c=function(){},u="prototype",s=function(){var t,e=n("1ec9")("iframe"),r=o.length,i="<",a=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),s=t.F;while(r--)delete s[u][o[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=r(t),n=new c,c[u]=null,n[a]=t):n=s(),void 0===e?n:i(n,e)}},a745:function(t,e,n){t.exports=n("f410")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),p=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(d),v=0;v<h.length;v++){var b,g=h[v],y=d[g],x=a[g],m=x&&x.prototype;if(m&&(m[f]||c(m,f,p),m[l]||c(m,l,g),u[g]=p,y))for(b in r)m[b]||o(m,b,r[b],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(a){var o=t["return"];throw void 0!==o&&r(o.call(t)),a}}},b447:function(t,e,n){var r=n("3a38"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},b54a:function(t,e,n){"use strict";n("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},b8e3:function(t,e){t.exports=!0},c367:function(t,e,n){"use strict";var r=n("8436"),i=n("50ed"),o=n("481b"),a=n("36c3");t.exports=n("30f1")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),i=n("1691");t.exports=Object.keys||function(t){return r(t,i)}},c8bb:function(t,e,n){t.exports=n("54a1")},ce4c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"force-base-iii"},[n("h2",[t._v("Force-based label placement III")]),n("svg",{staticClass:"container-border",attrs:{id:"viz"}})])},i=[],o=(n("b54a"),n("75fc")),a=(n("ac6a"),n("5698")),c=n("5313"),u={name:"ForceBasedLabelPlacement",data:function(){return{color:null,graph:null,label:null,labelLayout:null,graphLayout:null,width:1250,height:800,adjlist:[],svg:null,container:null,link:null,node:null,labelNode:null}},mounted:function(){var t=this,e=this;this.color=a["u"](a["v"]),this.graph=c,this.label={nodes:[],links:[]},this.graph.nodes.forEach((function(t,n){e.label.nodes.push({node:t}),e.label.nodes.push({node:t}),e.label.links.push({source:2*n,target:2*n+1})})),this.graphLayout=a["h"](this.graph.nodes).force("charge",a["g"]().strength(-500)).force("x",a["i"](this.width/2)).force("y",a["j"](this.height/2)).force("link",a["f"](this.graph.links).id((function(t){return t.id})).distance(100)).on("tick",e.ticked),this.graph.links.forEach((function(t){e.adjlist[t.source.index+"-"+t.target.index]=!0,e.adjlist[t.target.index+"-"+t.source.index]=!0})),this.svg=a["w"]("#viz").attr("width",this.width).attr("height",this.height),this.container=this.svg.append("g"),this.svg.call(a["A"]().scaleExtent([.8,4]).on("zoom",(function(){e.container.attr("transform",a["d"].transform)}))),this.link=this.container.append("g").attr("class","links").selectAll("line"),e.node=this.container.append("g").attr("class","nodes").selectAll("g"),this.labelNode=this.container.append("g").attr("class","labelNodes").selectAll("text"),this.restart(),setTimeout((function(){var e=[{id:"Four",group:4},{id:"Five",group:5}],n=[{source:"Four",target:"Five",value:3},{source:"Five",target:"Feuilly",value:4}];t.graph.nodes=[].concat(Object(o["a"])(t.graph.nodes),e),t.graph.links=[].concat(Object(o["a"])(t.graph.links),n),t.restart()}),1e3)},methods:{restart:function(){var t=this;this.node=this.node.data(this.graph.nodes,(function(t){return t.id})),this.node.exit().remove(),this.node=this.node.enter().append("circle").attr("fill",(function(e){return t.color(e.id)})).attr("r",5).merge(this.node),this.link=this.link.data(this.graph.links,(function(t){return t.source.id+"-"+t.target.id})),this.link.exit().remove(),this.link=this.link.enter().append("line").merge(this.link),this.labelNode=this.labelNode.data(this.graph.nodes,(function(t){return t.id})),this.labelNode.exit().remove(),this.labelNode=this.labelNode.enter().append("text").merge(this.labelNode).text((function(t){return t.id})).style("fill","#555").style("font-size",12).style("pointer-events","none"),this.graphLayout.nodes(this.graph.nodes),this.graphLayout.force("link").links(this.graph.links)},ticked:function(){var t=this;t.node.call(t.updateNode),t.link.call(t.updateLink),t.labelNode.each((function(e,n){if(n%2===0);else{var r=this.getBBox(),i=e.x-e.x,o=e.y-e.y,a=Math.sqrt(i*i+o*o),c=r.width*(i-a)/(2*a);c=Math.max(-r.width,Math.min(0,c));var u=16;this.setAttribute("transform","translate("+t.fixna(c)+","+u+")")}})),t.labelNode.call(t.updateNode)},updateLink:function(){var t=this;t.link.attr("x1",(function(e){return t.fixna(e.source.x)})).attr("y1",(function(e){return t.fixna(e.source.y)})).attr("x2",(function(e){return t.fixna(e.target.x)})).attr("y2",(function(e){return t.fixna(e.target.y)}))},updateNode:function(t){var e=this;t.attr("transform",(function(t){return"translate("+e.fixna(t.x)+","+e.fixna(t.y)+")"}))},fixna:function(t){return isFinite(t)?t:0}}},s=u,f=(n("7aa5"),n("2877")),l=Object(f["a"])(s,r,i,!1,null,null,null);e["default"]=l.exports},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),o=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),i=n("e53d"),o="__core-js_shared__",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),i=n("36c3"),o=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=i(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);while(e.length>u)r(c,n=e[u++])&&(~o(s,n)||s.push(n));return s}},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-002b54d4.1892ab70.js.map