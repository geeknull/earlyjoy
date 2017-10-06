<template>
  <div class="index-page" ref="indexPage">
    <div class="user-info-wrap">
      <img class="avatar-img" :src="myInfo.avatar" :alt="myInfo.userName"/>
      <p class="user-name">{{myInfo.userName}}</p>
    </div>
    <div class="new-wrap weui-cells">
      <span class="add-icon">+</span>
      <span class="add-text">添加今日状态</span>
    </div>
    <div class="weui-cells__title">最近状态</div>
    <scroll-list
      :scrollElement="$refs.indexPage"
      :status="myList.status"
      :hasMore="myList.hasMore"
      :onLoad="this.getMyList"
    >
      <div>
        <feed-card v-for="(item, index) in myList.list" :key="index" :img="item.img" :text="item.text" :time="item.time"></feed-card>
      </div>
    </scroll-list>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapState} from 'vuex';
  import ScrollList from '../../component/scrollList/scrollList.vue';
  import FeedCard from '../../component/feedCard/feedCard.vue';

  export default {
    data() {
      return {}
    },

    components: {
      ScrollList, FeedCard
    },

    computed: {
      ...mapState({
        myInfo: state => state.main.myInfo,
        myList: state => state.main.myList,
      })
    },

    methods: {
      ...mapActions(['getMyInfo', 'getMyList']),
    },

    mounted () {

    },

    created() {
      this.getMyInfo();
      this.getMyList();
    },
  }
</script>

<style lang="less">
  .user-info-wrap {
    text-align: center;
    margin-top: 30px;
    .avatar-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 20px;
    }
  }

  .new-wrap {
    height: 70px;
    padding: 10px 10px 10px 20px;
    margin: 20px 0;
    .add-icon {
      font-size: 30px;
      font-weight: bold;
      margin-right: 10px;
    }
    .add-text {
      vertical-align: 2px;
    }
  }
</style>
