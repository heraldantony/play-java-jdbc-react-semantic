var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
    BASE_API = "/api/v1",
    NODE_ENV = "development",
    SENTRY_PUBLIC_DSN,
    GA_ID,
    ANALYZE_BUNDLE,
    SENTRY_DSN,
    PORT = 3000
} = process.env;
const devMode = process.env.NODE_ENV !== 'production'

const definePluginArgs = {
    'process.env.BASE_API': JSON.stringify(BASE_API),
    'process.env.BROWSER': JSON.stringify(true)
}


// Paths
const rootPath = path.join(__dirname, "./"); // = "/"
const distPath = path.join(rootPath, "./dist"); // = "/dist"
const srcPath = path.join(rootPath, "./src"); // = "/src"
const srcCommonPath = path.join(srcPath, "./common"); // = "/src/common"
const loaders = {
    style: { loader: "style-loader" },
    css: { loader: "css-loader", options: { sourceMap: true } },
    resolve: "resolve-url-loader",
    postcss: {
        loader: "postcss-loader",
        options: {
            sourceMap: true
        }
    },
    sass: { loader: "sass-loader", options: { sourceMap: true } }
};

module.exports = {
    resolve: {
        alias: {
            actions: `${srcCommonPath}/actions/`,
            api: `${srcCommonPath}/api/`,
            components: `${srcCommonPath}/components/`,
            containers: `${srcCommonPath}/containers/`,
            reducers: `${srcCommonPath}/reducers/`,
            routing: `${srcCommonPath}/routing/`,
            styles: `${srcCommonPath}/styles/`,
            types: `${srcCommonPath}/types`,
            selectors: `${srcCommonPath}/selectors`,
            static: `${rootPath}/static`,
            images: `${rootPath}/static/images`
        },
        extensions: [".js", ".json", ".jsx"],
        modules: [srcPath, path.join(rootPath, "node_modules")]
    },
    devtool: 'inline-source-map',
    entry: `${srcPath}/client/index.jsx`,
    output: {
        path: path.resolve(__dirname, "../public/dist"),
        publicPath: "/assets/dist/"
    },
    plugins: [
       new webpack.DefinePlugin(definePluginArgs),
       new HtmlWebpackPlugin({
        template: "public/index.template.html"
    }) ,
       new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        publicPath: "/assets/dist/"
    })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? loaders.style : MiniCssExtractPlugin.loader,
                    loaders.css,
                    loaders.postcss,
                    loaders.resolve
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? loaders.style : MiniCssExtractPlugin.loader,
                    loaders.css,
                    loaders.postcss,
                    loaders.resolve,
                    loaders.sass
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                exclude: /(node_modules)/,
                loader: "url-loader?limit=10000"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 4096
                        }
                    },
                    "img-loader"
                ]
            },

            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
            }
        ]
    }
};
