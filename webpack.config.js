// 'use strict';
var path = require('path');
// var webpack = require('webpack');

module.exports = {
    entry:'./script.js',
<<<<<<< HEAD
=======
    // entry:'./modells_search_engine.js',
>>>>>>> projects
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
