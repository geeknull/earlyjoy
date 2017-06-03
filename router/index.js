const Router = require('koa-router');
const router = new Router();
const api = require('./api.js');
api(router);

module.exports = (app) => {
  app.use(router.routes())
};
