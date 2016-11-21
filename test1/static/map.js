// seajs简单配置
seajs.config({
    base: "./",
    alias: {
        "jquery": "libs/jquery-2.1.4.min.js",
        "sea": "libs/sea.js",
        "elementCreate": "static/elementCreate.js",
        "overlay": "static/overlay.js"
    }
});

// 加载入口模块
// seajs.use('')