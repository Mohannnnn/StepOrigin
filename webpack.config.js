/**
 * Created by 14-7447 on 2016/9/21.
 */
module.exports = {

    entry: {
        bundle :'./public/index.js'

    },

    /*前台测试用的入口要加'webpack/hot/dev-server'*/
    /*如果是要打包的话必须删除入口的热模块，'webpack/hot/dev-server'*/
    output: {
        path: __dirname + '/public/',
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['jsx-loader?harmony']
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            }

        ]
    }
};
