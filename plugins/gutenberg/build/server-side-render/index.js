window.wp=window.wp||{},window.wp.serverSideRender=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=411)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},15:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(47);function o(e,t){if(null==e)return{};var r,o,c=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}},19:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},2:function(e,t){e.exports=window.lodash},21:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},25:function(e,t){e.exports=window.wp.url},26:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},27:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))},28:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(42),o=r(19);function c(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!=typeof t?Object(o.a)(e):t}},3:function(e,t){e.exports=window.wp.components},35:function(e,t){e.exports=window.wp.deprecated},4:function(e,t){e.exports=window.wp.data},411:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r(6),c=r(15),u=r(0),i=r(4),s=r(35),a=r.n(s),l=r(26),f=r(27),p=r(28),b=r(29),d=r(21),O=r(2),y=r(1),j=r(44),h=r.n(j),w=r(25),v=r(3);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){Object(p.a)(c,e);var t,r,o=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=Object(d.a)(t);if(r){var o=Object(d.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(b.a)(this,e)});function c(e){var t;return Object(l.a)(this,c),(t=o.call(this,e)).state={response:null},t}return Object(f.a)(c,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.fetch(this.props),this.fetch=Object(O.debounce)(this.fetch,500)}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"componentDidUpdate",value:function(e){Object(O.isEqual)(e,this.props)||this.fetch(this.props)}},{key:"fetch",value:function(e){var t=this;if(this.isStillMounted){null!==this.state.response&&this.setState({response:null});var r=e.block,n=e.attributes,o=void 0===n?null:n,c=e.httpMethod,u=void 0===c?"GET":c,i=e.urlQueryArgs,s="POST"===u,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(w.addQueryArgs)("/wp/v2/block-renderer/".concat(e),g(g({context:"edit"},null!==t?{attributes:t}:{}),r))}(r,s?null:o,void 0===i?{}:i),l=s?{attributes:o}:null,f=this.currentFetchRequest=h()({path:a,data:l,method:s?"POST":"GET"}).then((function(e){t.isStillMounted&&f===t.currentFetchRequest&&e&&t.setState({response:e.rendered})})).catch((function(e){t.isStillMounted&&f===t.currentFetchRequest&&t.setState({response:{error:!0,errorMsg:e.message}})}));return f}}},{key:"render",value:function(){var e=this.state.response,t=this.props,r=t.className,o=t.EmptyResponsePlaceholder,c=t.ErrorResponsePlaceholder,i=t.LoadingResponsePlaceholder;return""===e?Object(u.createElement)(o,Object(n.a)({response:e},this.props)):e?e.error?Object(u.createElement)(c,Object(n.a)({response:e},this.props)):Object(u.createElement)(u.RawHTML,{key:"html",className:r},e):Object(u.createElement)(i,Object(n.a)({response:e},this.props))}}]),c}(u.Component);P.defaultProps={EmptyResponsePlaceholder:function(e){var t=e.className;return Object(u.createElement)(v.Placeholder,{className:t},Object(y.__)("Block rendered as empty."))},ErrorResponsePlaceholder:function(e){var t=e.response,r=e.className,n=Object(y.sprintf)(// translators: %s: error message describing the problem
Object(y.__)("Error loading block: %s"),t.errorMsg);return Object(u.createElement)(v.Placeholder,{className:r},n)},LoadingResponsePlaceholder:function(e){var t=e.className;return Object(u.createElement)(v.Placeholder,{className:t},Object(u.createElement)(v.Spinner,null))}};var S=P;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var R={},_=Object(i.withSelect)((function(e){var t=e("core/editor");if(t){var r=t.getCurrentPostId();if(r)return{currentPostId:r}}return R}))((function(e){var t=e.urlQueryArgs,r=void 0===t?R:t,i=e.currentPostId,s=Object(c.a)(e,["urlQueryArgs","currentPostId"]),a=Object(u.useMemo)((function(){return i?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({post_id:i},r):r}),[i,r]);return Object(u.createElement)(S,Object(n.a)({urlQueryArgs:a},s))}));window&&window.wp&&window.wp.components&&(window.wp.components.ServerSideRender=Object(u.forwardRef)((function(e,t){return a()("wp.components.ServerSideRender",{alternative:"wp.serverSideRender"}),Object(u.createElement)(_,Object(n.a)({},e,{ref:t}))}))),t.default=_},42:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return n}))},44:function(e,t){e.exports=window.wp.apiFetch},47:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},6:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},8:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}}).default;