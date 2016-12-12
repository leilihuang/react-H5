# react-H5
利用react全家桶以及蚂蚁金服antd-mobile开发H5页面

#目录介绍
* H5/main.jsx  是入口JS
* config文件夹是配置文件目录
* mock 里面存放mock数据，可以配置拦截ajax请求参照demo
* util文件夹下存放公用的组件以及样式，还有Util.jsx公用类
* component文件夹下面存放业务组件

#安装步骤
* npm install -g webpack
* npm install

#技术选型
* ES6
* React
* React-dom
* React-Redux
* Redux
* React-Router
* antd-mobile
* sass
* reqwest ajax模块
* mockjs (完美模拟ajax请求)

#辅助开发插件
* redux-thunk
* redux-logger
* redux-devtools(默认是关闭的注释掉了，如果要用请自行放开,一个是main.jsx，一个是config文件夹下面的store.dev.jsx)

#高清自适应样式配置
* 添加util.scss文件
* 高宽使用px2Rem( 这里面写正常的PX就好了 ) 进行px转rem , 例如 width:px2Rem(100px);
* 字体实用 @include px2px( 这里写大小就好了不带PX )  , 例如：@include px2px(18);

#打包命令
* 先运行npm run dll 剥离第三方库
* npm start  开发运行环境
* npm run build   生产打包环境

#version说明
* 1.0.1优化路由配置，多个redux进行汇总控制，添加异步redux实现界面展示，添加ES7语法编译插件

#如果对你有所帮助，欢迎点赞

