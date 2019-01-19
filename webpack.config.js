
module.exports = {
    watch: true,
    target: 'electron-renderer',
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
    ],
    resolve: {
    }

}