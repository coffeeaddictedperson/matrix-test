const open = require('open');

// Opens the image in the default image viewer
(async () => {
    // Opens the url in the default browser
    await open('./_build/index.html');
})();