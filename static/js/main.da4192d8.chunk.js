(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,r){t.exports=r.p+"static/media/default.449324f6.jpg"},25:function(t,e,r){t.exports=r(45)},33:function(t,e,r){},34:function(t,e,r){},35:function(t,e,r){},41:function(t,e,r){},45:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(20),i=r.n(o),c=(r(33),r(21)),l=r(3),u=(r(34),r(35),"INCREASE_QUANTITY"),s="DECREASE_QUANTITY",d="GET_ALL_PRODUCT",f="GET_NUMBER_CART",h="ADD_CART",p="DELETE_CART";var m=r(10);var v=Object(m.b)(function(t){return console.log(t),{_products:t._todoProduct}},function(t){return{AddCart:function(e){return t({type:"ADD_CART",payload:e})}}})(function(t){return console.log("Card",t),a.a.createElement("div",{className:"card-bg"},a.a.createElement("img",{src:t.data.details.image,onError:function(t){t.target.onerror=null,t.target.src=r(19)}}),a.a.createElement("p",{className:"card-name"},t.data.name),a.a.createElement("p",null,"Size : ",t.data.details.size),a.a.createElement("p",{className:"price"}," $ ",t.data.details.price),a.a.createElement("p",{className:"tag"},t.data.details.tag),a.a.createElement("button",{onClick:function(){t.AddCart(t.data)}},"Add to Cart"))});r(41);var y=function(t){return a.a.createElement("div",{className:"cart-card"},a.a.createElement("img",{src:t.data.productdata.details.image,onError:function(t){t.target.onerror=null,t.target.src=r(19)}}),a.a.createElement("p",{className:"cart-name"},t.data.name),a.a.createElement("p",{className:"cart-price"},"$ ",t.data.productdata.details.price))};r(17),r(11);function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(x){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(x){return{type:"throw",arg:x}}}t.wrap=l;var s={};function d(){}function f(){}function h(){}var p={};c(p,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&r.call(v,a)&&(p=v);var y=h.prototype=d.prototype=Object.create(p);function E(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e(function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(d).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=h,c(y,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},E(b.prototype),c(b.prototype,o,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var E=Object(m.b)(function(t){return console.log(t),{_products:t._todoProduct}})(function(t){var e=Object(n.useState)(),r=Object(l.a)(e,2),o=r[0],i=r[1],u=Object(n.useState)(!0),s=Object(l.a)(u,2),d=s[0],f=s[1],h=Object(n.useState)("all"),p=Object(l.a)(h,2),m=p[0],E=(p[1],Object(n.useState)()),b=Object(l.a)(E,2),w=b[0],C=b[1],j=0,L=function(){var t=Object(c.a)(g().mark(function t(){return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments").then(function(t){return t.json()}).then(function(t){console.log(t),i(t),C(t),f(!1)});case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)(function(){L()},[]),console.log(m),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"cart"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-cart-fill",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))," ",a.a.createElement("p",{className:"cart-num"},t._products.numberCart)),a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"MStore"),a.a.createElement("div",{className:"filter"},a.a.createElement("label",{for:"order"},"Order By : "),a.a.createElement("select",{name:"order",id:"order",onChange:function(t){if("all"==t.target.value)C(o);else{var e=o.filter(function(e){return e.details.type==t.target.value});C(e),console.log(m)}}},a.a.createElement("option",{value:"all"},"All"),a.a.createElement("option",{value:"t-shirt"},"T-Shirt"),a.a.createElement("option",{value:"dress shirts"},"Dress Shirt")),a.a.createElement("label",{for:"filter"},"Size : "),a.a.createElement("select",{name:"filter",id:"filter",onChange:function(t){if("all"==t.target.value)C(o);else{var e=o.filter(function(e){return e.details.size==t.target.value});C(e),console.log("filter : ",w)}}},a.a.createElement("option",{value:"all"},"All"),a.a.createElement("option",{value:"xsmall"},"XS"),a.a.createElement("option",{value:"small"},"S"),a.a.createElement("option",{value:"medium"},"M"),a.a.createElement("option",{value:"large"},"large")))),a.a.createElement("div",{className:"products"},d?a.a.createElement("span",null,"loading"):a.a.createElement("div",{className:"cards"},w.map(function(t,e){return a.a.createElement(v,{data:t})})),a.a.createElement("div",null,a.a.createElement("p",null,"Cart Items"),t._products.Carts.map(function(t,e){return j+=t.productdata.details.price,a.a.createElement(y,{data:t})})),a.a.createElement("div",{className:"checkout"},a.a.createElement("h2",null,"Total : ",j),a.a.createElement("button",null,"Checkout")))))}),b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,47)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)})},w=r(13),C=r(24),j=r(8),L={numberCart:0,Carts:[],_products:[]};var O=Object(w.b)({_todoProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(j.a)({},t,{_products:e.payload});case f:return Object(j.a)({},t);case h:if(0==t.numberCart){var r={id:e.payload.id,quantity:1,name:e.payload.name,productdata:e.payload};t.Carts.push(r)}else{var n=!1;if(t.Carts.map(function(r,a){r.id==e.payload.id&&(t.Carts[a].quantity++,n=!0)}),!n){var a={id:e.payload.id,quantity:1,name:e.payload.name,productdata:e.payload};t.Carts.push(a)}}return Object(j.a)({},t,{numberCart:t.numberCart+1});case u:return t.numberCart++,t.Carts[e.payload].quantity++,Object(j.a)({},t);case s:return t.Carts[e.payload].quantity>1&&(t.numberCart--,t.Carts[e.payload].quantity--),Object(j.a)({},t);case p:var o=t.Carts[e.payload].quantity;return Object(j.a)({},t,{numberCart:t.numberCart-o,Carts:t.Carts.filter(function(r){return r.id!=t.Carts[e.payload].id})});default:return t}}}),_=Object(w.c)(O,Object(w.a)(C.a));i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m.a,{store:_},a.a.createElement(E,null)))),b()}},[[25,1,2]]]);
//# sourceMappingURL=main.da4192d8.chunk.js.map