// 'use strict';
var path = require('path');
// var webpack = require('webpack');

module.exports = {
    entry:'./giving_a_component_state.js',
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
