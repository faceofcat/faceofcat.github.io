const fs = require('fs');

const menu = {
    'Home': '/',
    'Minecraft Forge Mods': '/minecraft.html',
    'JSON-Data-View': '/json-data.html'
};

module.exports = function (dest) {
    const currentUrl = getCurrentUrl(dest);
    console.log(`Rendering ${currentUrl}`);
    try {
        const viewModel = {
            name: 'Face of Cat\'s',
            tagline: 'mostly just stuff done while playing with myself...',
            selectedMenuItem: selectedMenuItem(currentUrl),
            currentTitle: currentTitle(currentUrl),
            menu: menu
        };
        return viewModel;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};

function selectedMenuItem(currentUrl) {
    const menuItem = Object.keys(menu).find(item => menu[item] === currentUrl);
    if (!menuItem) {
        throw Error(`No menu item found for ${currentUrl} in menu ${JSON.stringify(menu)}.`);
    }
    return menuItem;
}

function currentTitle(currentUrl) {
    return Object.keys(menu).find(menuItem => menu[menuItem] === currentUrl);
}

function getCurrentUrl(dest) {
    if (dest === 'index.html') {
        return '/';
    }
    else {
        return `/${dest}`;
    }
}