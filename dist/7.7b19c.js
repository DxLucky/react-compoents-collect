webpackJsonp([7],{420:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),c=o(a),f=n(427),s=o(f),p=n(158),d=o(p),h=n(72),b=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentAlert=n.componentAlert.bind(n),n.showAlert=n.showAlert.bind(n),n.showAlertVar=n.showAlertVar.bind(n),n.skipChildRoute=n.skipChildRoute.bind(n),n}return u(t,e),i(t,[{key:"componentAlert",value:function(e){d.default.showMsg({msg:e,timeout:20,fade:!0})}},{key:"showAlert",value:function(){this.componentAlert("\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9")}},{key:"showAlertVar",value:function(){var e={tip:"\u8fd9\u662f\u9519\u8bef\u63d0\u793a"};this.componentAlert(e.tip)}},{key:"skipChildRoute",value:function(){this.props.history.push("/alert/childRouter")}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,{title:"\u6d88\u606f\u63d0\u793a\u6846",introduce:"\u517c\u5bb9IE8"}),c.default.createElement("button",{className:"btnCommon",onClick:this.showAlert},"\u70b9\u6211\u5f39\u51fa"),c.default.createElement("button",{className:"btnCommon",onClick:this.showAlertVar},"\u70b9\u6211\u5f39\u51fa"),c.default.createElement("button",{className:"btnCommon",onClick:this.skipChildRoute},"\u70b9\u6211\u8df3\u8f6c\u5b50\u7ea7\u8def\u7531"),c.default.createElement("p",{style:{marginTop:"15px"}},c.default.createElement(h.NavLink,{to:"/alert/childRouter",activeStyle:{color:"#f73352"}},"\u70b9\u6211\u8df3\u8f6c\u5b50\u7ea7\u8def\u7531")))}}]),t}(c.default.Component);t.default=b},427:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(6),a=function(e){return e&&e.__esModule?e:{default:e}}(i);n(428);var c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.introduce;return t||n?a.default.createElement("div",{className:"present"},a.default.createElement("h4",null,t||null),a.default.createElement("ul",null,"string"==typeof n||void 0===n?a.default.createElement("li",null,n||"\u6ca1\u5565\u7279\u522b\u7684\uff0c\u54c8\u54c8"):n.map(function(e,t){return a.default.createElement("li",{key:t},e)})),a.default.createElement("h4",null,"\u4f8b\u5b50")):null}}]),t}(a.default.Component);t.default=c},428:function(e,t){}});