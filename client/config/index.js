/**
 * Created by Weil on 2017/7/9.
 */
import devConfig from './develop.config.js';
import prodConfig from './production.config.js';

let Config = {};

if (process.env.NODE_ENV === 'production') {
  Config = prodConfig;
} else if (process.env.NODE_ENV === 'develop') {
  Config = devConfig;
} else {
  throw new Error('请设置正确的NODE_ENV,为production或者develop');
}

export default Config;


