var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : './client/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                options : {
                    presets : ['env', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' },
                { loader: 'css-loader' }]
            },
        ]
    },
    mode : 'development'
}