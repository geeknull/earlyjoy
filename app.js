/**
 * Created by Weil on 2017/5/10.
 */
const Koa = require('koa');
const app = new Koa();
const port = 8333;
const path = require('path');
const convert = require('koa-convert');

const cors = require('koa-cors');
const serve = require('koa-static-server');
const bodyParser = require('koa-bodyparser');

let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境

app.use(bodyParser()); // 解析HTTP请求体
app.use(convert(cors())); // 允许跨域
// app.use(require('./middleware/auth.js')); // 开启统一鉴权

isDev && app.use(require('./middleware/sleep.js')); // 开发环境 延迟模拟

require('./router')(app); // 初始化路由信息

app.use(serve({rootDir: path.join(__dirname, './static'), rootPath: '/static/'})); // 本地静态服务器，主要给图片使用

!isDev && app.use(serve({rootDir: path.join(__dirname, './dist'), rootPath: '/'})); // 线上的静态路由


app.listen(port, () => {
  console.log(`earlyjoy已经启动，监听${port}端口`);
});
