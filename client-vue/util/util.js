let ajax = ({method='', url='', async=true, data={}, query={}, headers={}}) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);

    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }

    if (method.toUpperCase() === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    let sendString = typeof data === 'string' ? data : JSON.stringify(data);
    xhr.send(sendString);

    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText))
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };
  });
};

export {ajax}
