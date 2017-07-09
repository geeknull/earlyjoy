/**
 * Created by Weil on 2017/7/9.
 */
function createArray(length) {
  // new Array(24); // 在map方法有问题
  let arr = [];
  for ( let i = 0; i < length; i++ ) {
    arr.push(null);
  }
  return arr;
}

function log(obj) {
  let jsonStr = JSON.stringify(obj);
  console.log(jsonStr);
  return jsonStr;
}

function createRandomNum(min, max) {
  let range = max - min;
  let randNum = Math.random();
  let num = min + Math.round(range * randNum);
  return num;
}

function createRandomArray(length, min, max, type) {
  let arr = [];
  for ( let i = 0; i < length; i++ ) {
    arr.push(createRandomNum(min, max));
  }

  if (type === 'sort') {
    arr.sort((a, b) => {
      return b-a;
    });
  }

  return arr;
}

let myList = createArray(24);
myList = myList.map((item, index) => {
  return {
    "img": "http://localhost:8333/static/img/avatar/benqijiemu.jpg",
    "userName": "漂流瓶",
    "status": "ontime",
    "time": "2017.05.22",
    "text": `又是新的一天${index}`,
    "isLike": true,
    "like": 12,
    "uid": 333
  }
});

let rankList = createArray(24);
let continuedArr = createRandomArray(24, 1, 365, 'sort');
let userNameArr = createRandomArray(24, 1, 100);
rankList = rankList.map((item, index) => {
  return {
    "userName": `漂流瓶${userNameArr[index]}号`,
    "avatar": "http://localhost:8333/static/img/avatar/benqijiemu.jpg",
    "getupTime": "9:30",
    "rank": index+1,
    "continued": continuedArr[index],
    "uid": 333
  }
});
log(rankList);
