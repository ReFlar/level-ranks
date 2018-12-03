import app from 'flarum/app';
import LevelRanksSettingsModal from './components/LevelRanksSettingsModal';

app.initializers.add('reflar-level-ranks', () => {
    app.extensionSettings['reflar-level-ranks'] = () => app.modal.show(new LevelRanksSettingsModal());
});