/**
 * Created by Weil on 2017/6/3.
 */
module.exports = async (ctx, next) => {
  let accepts = ctx.accepts(); // 请求头的Accept数组
  let whiteList = ['/api/login', '/login.html']; // 不需要鉴权的白名单
  let earlyToken = ctx.cookies.get('earlytoken'); // 用户的token

  // 直接放行的情况：1、在白名单列表 2、有鉴权cookie
  if ( whiteList.includes(ctx.path) || earlyToken ) {
    await next();
  } else {
    // 鉴权失败的情况：1、网页要重定向 2、API请求要返回失败 3、静态资源暂时不处理
    if ( accepts.includes('text/html') ) {
      ctx.redirect('/login.html');
    } else if ( ctx.path.includes('/api/') ) {
      ctx.body = {
        code: 401,
        message: '用户还没有登陆'
      }
    } else {
      await next();
    }
  }
};
