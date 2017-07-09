/**
 * Created by Weil on 2017/7/7.
 */
const fs = require('fs');

module.exports = {
  readJson: (jsonPath) => {
    let jsonStr = fs.readFileSync(jsonPath, 'utf-8');
    return JSON.parse(jsonStr);
  }
};
