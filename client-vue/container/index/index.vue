<template>
  <div class="index-page">
    <div class="user-info-wrap">
      <img class="avatar-img" :src="myInfo.avatar" :alt="myInfo.userName">
      <p class="user-name">{{myInfo.userName}}</p>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapState} from 'vuex';

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapState({
        myInfo: state => {
          return state.main.myInfo
        }
      })
    },

    methods: {
      ...mapActions(['getMyInfo']),
    },

    created() {
      this.getMyInfo();
    },

    updated () {

    }
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
</style>
