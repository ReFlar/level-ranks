var gulp = require('flarum-gulp');

gulp({
    modules: {
        'reflar/leven-ranks': [
            '../lib/**/*.js',
            'src/**/*.js'
        ]
    }
});
