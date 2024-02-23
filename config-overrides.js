const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    webpack: function override(config, env) {
        config.resolve = {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            alias: {
              "@src": path.resolve(__dirname, "./src/"),
              "@styles": path.resolve(__dirname, "./src/styles"),
            },
        };
        
        config.module = {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /\.module\.scss$/,
                    use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
                },
                {
                    test: /\.module\.scss$/,
                    use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                    ],
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    use: ["babel-loader"],
                    exclude: /node_modules/,
                },
            ],
        };

        config.plugins = [
            new HtmlPlugin({
                template: path.resolve(__dirname, './public/index.html'),
            }),
        ];
        return config;
    }
}