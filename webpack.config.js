let path = require('path');

let conf = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'es2017', 'latest', 'react']
                }
                //exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'

                ]
            }
        ]
    },
    devtool: 'eval-sourcemap'

};

module.exports = conf;
