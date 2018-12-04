import SettingsModal from 'flarum/components/SettingsModal';

export default class LevelRanksSettingsModal extends SettingsModal {
    className() {
        return 'LevelRanksSettingsModal Modal--medium';
    }

    title() {
        return app.translator.trans('reflar-level-ranks.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <div className="Form-group">
                    <label>{app.translator.trans('reflar-level-ranks.admin.settings.levelText')}</label>
                    <input placeholder={app.translator.trans('reflar-level-ranks.admin.settings.defaultPlaceholder')} className="FormControl" bidi={this.setting('reflar-level-ranks.pointsText')} />
                </div>
            </div>
        ];
    }
}