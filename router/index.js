const Router = require('koa-router');
const router = new Router();
const api = require('./api.js');
const page = require('./page.js');
const login = require('./login.js');

page(router);
api(router);
login(router);

module.exports = (app) => {
  app.use(router.routes())
};
