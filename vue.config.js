module.exports={
    devServer: {
        open: true,
        contentBase: 'src',
        port: 3049,
        hot: true,
        proxy:{
            "/weChat/applet/course/banner/list": {
                target: " http://59.111.104.104:8086",
                changeOrigin: true
            },
            "/weChat/applet/course/list/type": {
                target: " http://59.111.104.104:8086",
                changeOrigin: true
            },
        "/system/dict/data/list/open": {
            target: " http://59.111.104.104:8086",
            changeOrigin: true
        },
            "/pc/liveCourseInfo/list": {
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            },

            "/weChat/applet/article/list": {
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            },'/pc/course/detail/':{
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            }
            ,'/pc/comment/commentList/course/':{
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            }
            ,'/pcUser/login':{
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            }
            ,'/pcUser/logout':{
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            }
            ,'/weChat/applet/shoppingCart/join/shoppingCart':{
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            }
            ,'/weChat/applet/shoppingCart/my/list':{
                target: "http://59.111.104.104:8086",
                changeOrigin: true
            }


        }
    }
}
