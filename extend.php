<?php

/**
 *  This file is part of reflar/enso-theme.
 *
 *  Copyright (c) ReFlar.
 *
 *  http://reflar.io
 *
 *  For the full copyright and license information, please view the license.md
 *  file that was distributed with this source code.
 */

namespace Reflar\LevelRanks;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
];