module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/PostUser"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e,r){"use strict";r.r(e);var o=r(0),n=r.n(o),u=r(1),i=r(2),s=r.n(i);var c=r(3),a=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n=o.prototype;return n.config=function(){this.$().tooltip({container:"body"})},n.view=function(){var t=this.props.post.user(),e=21*(t.commentCount()-t.discussionCount())+33*t.discussionCount(),r=Math.floor(e/135),o=100/135*(e-135*r);return m("div",{class:"PostUser-level",title:e+" EXP"},m("div",{class:"PostUser-levelNumber"},"Level ",r),m("div",{class:"PostUser-bar PostUser-bar--empty"}),m("div",{class:"PostUser-bar",style:"width: "+o+"%;"}))},o}(r.n(c).a);n.a.initializers.add("reflar-level-ranks",function(t){Object(u.extend)(s.a.prototype,"view",function(t){t.children.push(a.component(this.props))})})}]);
//# sourceMappingURL=forum.js.map