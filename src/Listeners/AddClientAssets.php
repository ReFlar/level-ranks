<?php

namespace Reflar\LevelRanks\Listeners;

use DirectoryIterator;
use Flarum\Event\ConfigureLocales;
use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
    }

    /**
     * @param ConfigureWebApp $app
     */
    public function addAssets(ConfigureWebApp $app)
    {
        if ($app->isForum()) {
            $app->addAssets([
                __DIR__ . '/../../less/main.less',
                __DIR__ . '/../../js/forum/dist/extension.js'
            ]);

            $app->addBootstrapper('reflar/leven-ranks/main');
        }
    }

}
