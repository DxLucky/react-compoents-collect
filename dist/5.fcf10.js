webpackJsonp([5],{420:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),c=r(i),f=n(424),s=r(f),p=n(158),d=r(p),b=n(72),h=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentAlert=n.componentAlert.bind(n),n.showAlert=n.showAlert.bind(n),n.showAlertVar=n.showAlertVar.bind(n),n}return u(t,e),a(t,[{key:"componentAlert",value:function(e){d.default.showMsg({msg:e,timeout:20,fade:!0})}},{key:"showAlert",value:function(){this.componentAlert("\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9\u8bf7\u67e5\u8be2\u4e4b\u540e\u9009\u62e9")}},{key:"showAlertVar",value:function(){var e={tip:"\u8fd9\u662f\u9519\u8bef\u63d0\u793a"};this.componentAlert(e.tip)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,{title:"\u6d88\u606f\u63d0\u793a\u6846",introduce:"\u517c\u5bb9IE8"}),c.default.createElement("button",{className:"btnCommon",onClick:this.showAlert},"\u70b9\u6211\u5f39\u51fa"),c.default.createElement("button",{className:"btnCommon",onClick:this.showAlertVar},"\u70b9\u6211\u5f39\u51fa"),c.default.createElement("p",null,c.default.createElement(b.NavLink,{to:"/alert/childRouter",activeStyle:{color:"#f73352"}},"\u70b9\u6211\u8df3\u8f6c\u5b50\u7ea7\u8def\u7531")))}}]),t}(c.default.Component);t.default=h},424:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),i=function(e){return e&&e.__esModule?e:{default:e}}(a);n(425);var c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.introduce;return t||n?i.default.createElement("div",{className:"present"},i.default.createElement("h4",null,t||null),i.default.createElement("ul",null,"string"==typeof n||void 0===n?i.default.createElement("li",null,n||"\u6ca1\u5565\u7279\u522b\u7684\uff0c\u54c8\u54c8"):n.map(function(e,t){return i.default.createElement("li",{key:t},e)})),i.default.createElement("h4",null,"\u4f8b\u5b50")):null}}]),t}(i.default.Component);t.default=c},425:function(e,t){}});