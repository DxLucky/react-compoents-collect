const path=require("path");
const webpack=require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');//独立打包css模块;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩CSS模块;
entry={};
entry["main"]="./src/main.jsx";
entry[0]="webpack-dev-server/client?http://localhost:3000";
entry[1]="webpack/hot/only-dev-server";
module.exports={
    entry:entry,
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name].js",
        publicPath:"/static/"
    },
    module:{
        rules:[
            {
                test: /\.jsx|js$/,
                exclude: /(node_modules)/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{presets:["es2015","react"]}
                    }
                ]
            },
            {
                test: /\.css|scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader?importLoaders=1",
                        "sass-loader",
                        {
                            loader: "postcss-loader", //自动给css添加浏览器兼容前缀
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        require('autoprefixer')({browsers:["last 40 versions"]})]
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.png|jpg|gif|jpeg|ico$/,
                use:[{
                    loader : 'url-loader',//加载url-loader 同时安装 file-loader;
                    options:{
                        limit : 5000, //小于5000000b的图片文件转base64到css里,当然css文件体积更大;
                        name : 'img/[name].[hash:8].[ext]',//设置最终images路径;
                        query: 'random=' + new Date().getTime()
                    }
                },
                    { //压缩图片(另一个压缩图片：image-webpack-loader) 先压缩再判断是否小于上面的limit再决定是否转base64;
                        loader : 'img-loader?minimize&optimizationLevel=5&progressive=true'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//热加载
        //从js中抽离css,属性disable为true表示禁用此插件并不抽离css，为false表示不禁用此插件，抽离css并打包成单独的css文件
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: false,
            allChunks: true
        }),
        //压缩css（注:因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用）;
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,                //正则匹配后缀.css文件;
            cssProcessor: require('cssnano'),            //加载‘cssnano’css优化插件;
            cssProcessorOptions: { discardComments: {removeAll: true } }, //插件设置,删除所有注释;
            canPrint: true                             //设置是否可以向控制台打日志,默认为true;
        }),
    ],
    devtool:"sourceMap"
};

