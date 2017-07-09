const fs = require('fs');
const path = require('path');
const Util = require('../util/util.js');

module.exports = (router) => {
  // 【用户】获取我的信息
  router.get('/api/myinfo', (ctx, next) => {
    ctx.body = Util.readJson(path.resolve(__dirname, '../mock/api/myInfo.json'));
  });

  // 【列表】获取我的起床时间列表
  router.post('/api/mylist', async (ctx, next) => {
    let allList = Util.readJson(path.resolve(__dirname, '../mock/api/myList.json'));
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset+limit),
      hasMore: offset+limit <= allList.length
    };
  });

  // 【存储】保存我的信息
  router.post('/api/setmyinfo', async (ctx, next) => {
    ctx.body = {
      code: 200,
      message: '消息保存成功'
    }
  });

  // 【存储】创建今日状态
  router.post('/api/markToday', async (ctx, next) => {
    ctx.body = {
      code: 200,
      message: '创建今日起床记录成功'
    }
  });

  // 【列表】获取今日起床列表
  router.post('/api/todaylist', async (ctx, next) => {
    let allList = Util.readJson(path.resolve(__dirname, '../mock/api/todaylist.json'));
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };
  });

  // 【列表】获取排行列表
  router.post('/api/ranklist', (ctx, next) => {
    let allList = Util.readJson(path.resolve(__dirname, '../mock/api/rankList.json'));
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };
  });

  // 【详情】获取起床记录详情信息
  router.get('/api/detail/:id', (ctx, next) => {
    let requestDetailId = ctx.params.id;
    ctx.body = Util.readJson(path.resolve(__dirname, '../mock/api/detail.json'));
  });

  // 【用户】获取他人的信息
  router.get('/api/otheruser/:id', (ctx, next) => {
    let requestUid = ctx.params.id;
    ctx.body = Util.readJson(path.resolve(__dirname, '../mock/api/otherUser.json'));
  });

  // 【列表】获取他人的列表
  router.post('/api/otherlist/:id', (ctx, next) => {
    let allList = Util.readJson(path.resolve(__dirname, '../mock/api/otherList.json'));
    let { offset, limit } = ctx.request.body;

    ctx.body = {
      list: allList.slice(offset, offset + limit),
      hasMore: offset+limit <= allList.length
    };
  });
};
