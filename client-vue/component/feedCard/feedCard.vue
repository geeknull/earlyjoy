<template>
  <router-link to="" tag="div" class="weui-cells feed-card-wrap">
    <img class="feed-card-img" :src="img"/>
    <div class="feed-card-info">
      <span class="feed-card-text">{{text}}</span>
      <span class="feed-card-time">{{time}}</span>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      img: {
        type: String,
        default: '',
        required: true
      },
      text: {
        type: String,
        default: '',
        required: true
      },
      time: {
        type: String,
        default: '',
        required: true
      },
    }
  }
</script>

<style lang="less">
  .feed-card-wrap {
    display: flex;
    padding: 10px;
    margin-top: 10px;
    .feed-card-img {
      width: 50px;
      height: 50px;
      flex: none;
      margin-right: 10px;
    }
    .feed-card-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      .feed-card-time {
        text-align: right;
      }
    }
  }
</style>
