require('babel-register')({
    presets: ['es2015', 'react'],
    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'babel-plugin-transform-object-rest-spread']
});
require("./server.jsx");