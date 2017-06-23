/**
 * Created by Weil on 2017/6/3.
 */
module.exports = (router) => {
  router.all('/login', (ctx, next) => {
    console.log('xxxx');
    ctx.cookies.set('earlytoken', 'imnolyaearlyjoytoken', {
      maxAge: 1000*60*60*2
    });
    ctx.body = {
      status: true
    };
  })
};
