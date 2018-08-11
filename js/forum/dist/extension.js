"use strict";

System.register("reflar/leven-ranks/components/LevelBar", ["flarum/Component"], function (_export, _context) {
    "use strict";

    var Component, LevelBar;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent.default;
        }],
        execute: function () {
            LevelBar = function (_Component) {
                babelHelpers.inherits(LevelBar, _Component);

                function LevelBar() {
                    babelHelpers.classCallCheck(this, LevelBar);
                    return babelHelpers.possibleConstructorReturn(this, (LevelBar.__proto__ || Object.getPrototypeOf(LevelBar)).apply(this, arguments));
                }

                babelHelpers.createClass(LevelBar, [{
                    key: "view",
                    value: function view() {
                        var user = this.props.post.user();

                        var expComments = (user.commentsCount() - user.discussionsCount()) * 21,
                            expDiscussions = user.discussionsCount() * 33;

                        var expTotal = expComments + expDiscussions,
                            expLevel = Math.floor(expTotal / 135),
                            expPercent = 100 / 135 * (expTotal - expLevel * 135);

                        return m(
                            "div",
                            { "class": "PostUser-level" },
                            m(
                                "div",
                                { "class": "PostUser-levelNumber" },
                                "Level ",
                                expLevel
                            ),
                            m("div", { "class": "PostUser-bar PostUser-bar--empty" }),
                            m("div", { "class": "PostUser-bar", "data-original-title": "RamonGuilherme edited 25 May", title: "dd", style: "width: " + expPercent + '%;' })
                        );
                    }
                }]);
                return LevelBar;
            }(Component);

            _export("default", LevelBar);
        }
    };
});;
'use strict';

System.register('reflar/leven-ranks/main', ['flarum/app', 'flarum/extend', 'flarum/components/PostUser', 'reflar/leven-ranks/components/LevelBar'], function (_export, _context) {
  "use strict";

  var app, extend, PostUser, LevelBar;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsPostUser) {
      PostUser = _flarumComponentsPostUser.default;
    }, function (_reflarLevenRanksComponentsLevelBar) {
      LevelBar = _reflarLevenRanksComponentsLevelBar.default;
    }],
    execute: function () {

      app.initializers.add('reflar-level-ranks', function (app) {
        extend(PostUser.prototype, 'view', function (view) {
          view.children.push(LevelBar.component(this.props));
        });
      });
    }
  };
});