const path = require('path'); // just to include a built in node module called path, and then put it in the path variable. used to have access to absolute path.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// export configuration object, so that webpack can take the object and work with it.
module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'], // where webpack will start the bundling. we also add the polyfill that we installed.
    output: { // which will tell webpack where to save bundle file.
        path: path.resolve(__dirname, 'dist'), // needs to be absolute path. join __dirname: current absolute path, with, dist/js: path where the bundle to be in, using a method.
        filename: 'js/bundle.js'
    },
    //mode: 'development'   개발/생산 모드를 바꾸기 귀찮으므로 npm script로 만든다. this option can be removed to package.json
    devServer: {
        contentBase: './dist' // specify the folder from which webpack should serve our files.
    },
    plugins: [ // plugins allow us to do complex processing of our input file. in this case of our index.html file.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' // our starting html file. we can also create a new html from scratch automatically without providing any template, but not covering it here.
        })
    ],
    module: { // loaders in webpack allow us to import, or to load, all kinds of different files, and also to process them.(converting sass->css, ES6->ES5)
              // we need the babel loader, because babel is the one that will convert the ES6->ES5.
        rules: [ // rules, receives an array of all the loaders that we want to use.
            { // for each loader we need an object.
                test: /\.js$/, // regular expression. look for all the files and test if they end with JS.
                exclude: /node_modules/, // we dont want to apply it to this whole thing.
                use: { // all the JS files will use the babel loader.
                    loader: 'babel-loader'
                }
            }
        ]
    }
};




