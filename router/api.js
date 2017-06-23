const fs = require('fs');
const path = require('path');

module.exports = (router) => {
  // 获取我的信息
  router.get('/api/myinfo', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../mock/api/myInfo.json'), 'utf-8');
  });

  // 获取我的起床时间列表
  router.post('/api/mylist', async (ctx, next) => {
    let allList = fs.readFileSync(path.resolve(__dirname, '../mock/api/myList.json'), 'utf-8');
    allList = JSON.parse(allList);
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset+limit),
      hasMore: offset+limit <= allList.length
    };
  });

  // 保存我的信息
  router.post('/api/setMyinfo', async (ctx, next) => {
    ctx.body = {
      code: 200,
      message: '消息保存成功'
    }
  });

  // 创建今日状态
  router.post('/api/markToday', async (ctx, next) => {
    ctx.body = {
      code: 200,
      message: '创建今日起床记录成功'
    }
  });

  // 获取今日起床列表
  router.post('/api/todaylist', async (ctx, next) => {
    let allList = fs.readFileSync(path.resolve(__dirname, '../mock/api/todaylist.json'), 'utf-8');
    allList = JSON.parse(allList);
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };
  });

  // 获取排行列表
  router.get('/api/ranklist', (ctx, next) => {
    let allList = fs.readFileSync(path.resolve(__dirname, '../mock/api/todaylist.json'), 'utf-8');
    allList = JSON.parse(allList);
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };
  });

  // 获取起床记录详情信息
  router.get('/api/detail/:id', (ctx, next) => {
    let requestDetailId = ctx.params.id;
    let detailList = fs.readFileSync(path.resolve(__dirname, '../mock/api/detail.json'), 'utf-8');
    detailList = JSON.parse(detailList);
    let resDetail = detailList.find(item => item.userId === requestDetailId);
    ctx.body = resDetail;
  });

  // 获取他人的信息
  router.get('/api/otheruser/:id', (ctx, next) => {
    let requestDetailId = ctx.params.id;
    let otherUser = fs.readFileSync(path.resolve(__dirname, '../mock/api/otherUser.json'), 'utf-8');
    ctx.body = otherUser;
  });

  // 获取他人的列表
  router.get('/api/otheruser/:id', (ctx, next) => {
    let allList = fs.readFileSync(path.resolve(__dirname, '../mock/api/otheruser.json'), 'utf-8');
    allList = JSON.parse(allList);
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };
  });
};
