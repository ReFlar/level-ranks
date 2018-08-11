import Component from 'flarum/Component';

export default class LevelBar extends Component {
    view() {
        const user = this.props.post.user();

        let expComments = (user.commentsCount() - user.discussionsCount()) * 21,
            expDiscussions = user.discussionsCount() * 33;

        let expTotal = expComments + expDiscussions,
            expLevel = Math.floor(expTotal / 135),
            expPercent = (100 / 135) * ((expTotal) - (expLevel * 135));

        return (
            <div class="PostUser-level">
                <div class="PostUser-levelNumber">Level {expLevel}</div>
                <div class="PostUser-bar PostUser-bar--empty"></div>
                <div class="PostUser-bar" data-original-title="RamonGuilherme edited 25 May" title="dd" style={"width: " + expPercent + '%;'}></div>
            </div>
        );
    }
}
