module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,r){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,"a",function(){return o})},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/PostUser"]},function(t,e){t.exports=flarum.core.compat.Component},,function(t,e,r){"use strict";r.r(e);var o=r(0),n=r.n(o),u=r(2),i=r(3),c=r.n(i),s=r(1),a=r(4),p=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var r=e.prototype;return r.config=function(){this.$().tooltip({container:"body"})},r.view=function(){var t=this.props.post.user(),e=n.a.forum.attribute("reflar-level-ranks.pointsText"),r=21*(t.commentCount()-t.discussionCount())+33*t.discussionCount(),o=Math.floor(r/135),u=100/135*(r-135*o);return m("div",{class:"PostUser-level",title:r+" EXP"},m("div",{class:"PostUser-levelNumber"},e," ",o),m("div",{class:"PostUser-bar PostUser-bar--empty"}),m("div",{class:"PostUser-bar",style:"width: "+u+"%;"}))},e}(r.n(a).a);n.a.initializers.add("reflar-level-ranks",function(t){Object(u.extend)(c.a.prototype,"view",function(t){t.children.push(p.component(this.props))})})}]);
//# sourceMappingURL=forum.js.map