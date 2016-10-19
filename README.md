# react-H5
利用react全家桶以及蚂蚁金服antd-mobile开发H5页面

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

#高清自适应样式配置
* 添加util.scss文件
* 高宽使用px2Rem( 这里面写正常的PX就好了 ) 进行px转rem , 例如 width:px2Rem(100px);
* 字体实用 @include px2px( 这里写大小就好了不带PX )  , 例如：@include px2px(18);

#打包命令
* 先运行npm run dll 剥离第三方库
* npm start  开发运行环境
* npm run build   生产打包环境

