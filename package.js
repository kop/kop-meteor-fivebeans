Package.describe({
    summary: "Wrapper package for ceejbot/fivebeans",
    version: '1.0.3',
    git: 'https://github.com/kop/meteor-fivebeans.git',
    name: 'ikoptiev:fivebeans'
});

Npm.depends({'fivebeans': '1.0.3'});

Package.onUse(function (api) {
    api.addFiles('fivebeans.js', 'server');
    api.export('Fivebeans', 'server');
});
