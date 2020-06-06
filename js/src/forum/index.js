import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PostUser from 'flarum/components/PostUser';
import LevelBar from './components/LevelBar';

app.initializers.add('reflar-level-ranks', app => {
	extend(PostUser.prototype, 'view', function (view) {
    const user = this.props.post.user();

    if (!user) return;

		view.children.push(LevelBar.component({ user }))
	});
});
