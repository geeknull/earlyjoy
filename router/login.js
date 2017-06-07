/**
 * Created by Weil on 2017/6/3.
 */
module.exports = (router) => {
  router.post('/login', (ctx, next) => {
    ctx.cookies.set('earlytoken', 'imnolyaearlyjoytoken', {
      maxAge: 1000*60*60*2
    });
    ctx.body = {
      status: true
    };
  })
};
