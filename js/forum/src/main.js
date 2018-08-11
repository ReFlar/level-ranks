import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';
import LevelBar from 'reflar/leven-ranks/components/LevelBar';

app.initializers.add('reflar-level-ranks', app => {
  extend(PostUser.prototype, 'view', function (view) {
    view.children.push(LevelBar.component(this.props))
  });
});
