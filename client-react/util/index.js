/**
 * Created by Weil on 2017/5/23.
 */
let ajax = ({ method='', url='', async=true, data={}, headers={} }) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);

    for ( let key in headers ) {
      xhr.setRequestHeader(key, headers[key]);
    }
    if ( method.toUpperCase() === 'POST' ) {
      xhr.setRequestHeader('content-type', 'application/json');
    }

    let sendString = typeof data === 'string' ? data : JSON.stringify(data);
    xhr.send(sendString);

    return new Promise((resolve, reject) => {
      xhr.onload = function () {
        resolve(JSON.parse(xhr.responseText));
      };
      xhr.onerror = function () {
        reject(xhr.responseText);
      };
      // xhr.onreadystatechange = function () {
      //   if ( xhr.status === 200 && xhr.readyState === 4 ) {
      //     resolve(xhr.responseText);
      //   } else {
      //     reject(xhr.responseText);
      //   }
      // }
    });
  };

export { ajax }
export default {
  ajax
}
