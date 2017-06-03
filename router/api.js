const fs = require('fs');
const path = require('path');

module.exports = (router) => {
  router.get('/api/user', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/user.json'), 'utf-8');
  });
  router.get('/api/ranklist', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/ranklist.json'), 'utf-8');
  });
  router.get('/api/detail/:id', (ctx, next) => {
    let requestDetailId = ctx.params.id;
    let detailList = fs.readFileSync(path.resolve(__dirname, '../mock/api/detail.json'), 'utf-8');
    detailList = JSON.parse(detailList);
    let resDetail = detailList.find(item => item.userId === requestDetailId);
    ctx.body = resDetail;
  });
  router.get('/api/otherUser/:id', (ctx, next) => {
    let requestDetailId = ctx.params.id;
    let otherUser = fs.readFileSync(path.resolve(__dirname, '../mock/api/otherUser.json'), 'utf-8');
    ctx.body = otherUser;
  });
  router.get('/api/myinfo', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/myInfo.json'), 'utf-8');
  });

  router.post('/api/todaylist', async (ctx, next) => {
    let allList = fs.readFileSync(path.resolve(__dirname, '../mock/api/todaylist.json'), 'utf-8');
    allList = JSON.parse(allList);

    let { offset, limit } = ctx.request.body;
    await new Promise(resolve => setTimeout(resolve, 1500));

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };

    // ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/todaylist.json'), 'utf-8');
  });

  router.post('/api/mylist', async (ctx, next) => {
    let allList = fs.readFileSync(path.resolve(__dirname, '../mock/api/myList.json'), 'utf-8');
    allList = JSON.parse(allList);

    let { offset, limit } = ctx.request.body;

    await new Promise(resolve => setTimeout(resolve, 1500));

    ctx.body = {
      list: allList.slice(offset, offset+limit),
      hasMore: offset+limit <= allList.length
    };
    // ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/myList.json'), 'utf-8');
  });
};
