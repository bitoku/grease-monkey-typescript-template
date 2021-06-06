const WebpackUserscript = require("webpack-userscript");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    plugins: [
        new WebpackUserscript({
            headers: {
                grant: ["GM_setClipboard"],
                match: "*://*/*",
                require: [`file://${path.resolve(__dirname, 'dist', 'main.user.js')}`],
            }
        })
    ]
}