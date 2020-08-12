const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { start } = require('repl');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                },
                
            },
            {
                test:/\.css$/, 
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', 
                options: {modules: true}},
            ]
            }, 
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {loader: 'file-loader'}
                ]
            }
          
           
            
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}