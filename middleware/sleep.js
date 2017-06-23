/**
 * Created by Weil on 2017/6/24.
 */
module.exports = async (ctx, next) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  await next();
};
