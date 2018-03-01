// 'use strict';
var path = require('path');
// var webpack = require('webpack');

module.exports = {
    entry:'./react_project/modells_search_engine/modells_search_engine.js',
    // entry:'./modells_search_engine.js',
    output:{
        path: path.resolve(__dirname,''),
        filename: 'transpiled.js'
    },
    module :{

        rules:[

                {
                test: /\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query: {
                    presets:['env','react']
                }

            }

        ]

    }
};
