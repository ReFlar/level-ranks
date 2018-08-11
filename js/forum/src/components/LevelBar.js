import Component from 'flarum/Component';

export default class LevelBar extends Component {
    config() {
        this.$().tooltip({ container: 'body' });
    }

    view() {
        const user = this.props.post.user();

        let expComments = (user.commentsCount() - user.discussionsCount()) * 21,
            expDiscussions = user.discussionsCount() * 33;

        let expTotal = expComments + expDiscussions,
            expLevel = Math.floor(expTotal / 135),
            expPercent = (100 / 135) * ((expTotal) - (expLevel * 135));

        return (
            <div class="PostUser-level" title={expTotal + ' EXP'}>
                <div class="PostUser-levelNumber">Level {expLevel}</div>
                <div class="PostUser-bar PostUser-bar--empty"></div>
                <div class="PostUser-bar" style={"width: " + expPercent + '%;'}></div>
            </div>
        );
    }
}
