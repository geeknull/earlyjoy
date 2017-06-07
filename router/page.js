const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
let isDev = process.env.NODE_ENV === 'develop';

module.exports = (router) => {
  router.get('/', async (ctx, next) => {
    if ( isDev ) {
      let res = await fetch('http://localhost:9333');
      ctx.body = await res.text();
    } else {
      ctx.body = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
    }
  });

  router.get('/login.html', async (ctx, next) => {
    if ( isDev ) {
      let res = await fetch('http://localhost:9333/login.html');
      ctx.body = await res.text();
    } else {
      ctx.body = fs.readFileSync(path.join(__dirname, '../dist/login.html'), 'utf-8');
    }
  });
};


// console.log(process.env.NODE_ENV);
