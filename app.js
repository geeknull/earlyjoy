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
const authMiddleware = require('./middleware/auth.js');

let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境

app.use(authMiddleware);
app.use(bodyParser());
app.use(convert(cors()));
const router = require('./router')(app);
app.use(serve({rootDir: path.join(__dirname, './static'), rootPath: '/static'}));

// 线上发布的
if (!isDev) {
  app.use(serve({rootDir: path.join(__dirname, './dist'), rootPath: '/'})); // 在router之后要注意
}

app.listen(port, () => {
  console.log(`earlyjoy已经启动，监听${port}端口`);
});
