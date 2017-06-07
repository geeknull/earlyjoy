/**
 * Created by Weil on 2017/6/3.
 */
module.exports = async (ctx, next) => {
  let whiteList = ['/login', '/login.html'];

  if (!whiteList.includes(ctx.path)) {
    let earlyToken = ctx.cookies.get('earlytoken');
    console.log(earlyToken, 'earlyToken');
    if ( !earlyToken ) {
      ctx.redirect('http://localhost:8333/login.html');
    }
  }

  await next();
};
