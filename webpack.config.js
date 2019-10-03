module.exports = [
    {
        mode: process.env.NODE_ENV,
        entry: './src/index.js',
        optimization: {
            minimize: false
        },
        output: {
            path: __dirname,
            filename: 'index.js',
            library: 'litr',
            libraryTarget: 'commonjs2',
        },
    },
    {
        mode: process.env.NODE_ENV,
        entry: './src/index.js',
        output: {
            path: __dirname,
            filename: 'litr.js',
            library: 'litr',
            libraryTarget: 'umd',
        }
    }
]


