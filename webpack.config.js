const path = require("path"),
    CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        // js
        index: "./src/js/entries/index.entry.js"
    },
    output: {
        filename: "./js/[name].bundle.js",
        path: path.resolve(__dirname, "./_dist")
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: './src/html/index.html', to: './index.html' }
        ]),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    }
};