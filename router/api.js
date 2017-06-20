const fs = require('fs');
const path = require('path');

module.exports = (router) => {
  router.all('/api/create', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/create.json'), 'utf-8');
  });
};
