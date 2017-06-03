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

app.use(bodyParser());
// app.use(async (ctx, next) => {
//   console.log(ctx.request.body, ctx.path, 'ppp');
//   await next();
// });
app.use(convert(cors()));
const router = require('./router')(app);
app.use(serve({rootDir: path.join(__dirname, './static'), rootPath: '/static'}));

app.listen(port, () => {
  console.log(`earlyjoy已经启动，监听${port}端口`);
});
