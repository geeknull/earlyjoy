<template>
  <div class="scroll-list">
    <slot></slot>
    <div v-if="status === 'loading'" class="weui-loadmore">
      <i class="weui-loading"/>
      <span class="weui-loadmore__tips">正在加载</span>
    </div>

    <div v-if="hasMore === false" class="weui-loadmore weui-loadmore_line weui-loadmore_dot">
      <span class="weui-loadmore__tips"/>
    </div>

    <div v-if="status === 'empty'" class="weui-loadmore weui-loadmore_line">
      <span class="weui-loadmore__tips">暂无数据</span>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      scrollElement: {
        'default': null,
        required: false,
      },
      onLoad: {
        'default': ()=>{},
        required: false,
      },
      status: {
        'default': 'loading',
        required: false,
      },
      hasMore: {
        'default': false,
        required: true
      }
    },

    data () {
      return {
        isBindEvent: false,
      }
    },

    computed: {

    },

    methods: {
      bindEvent (e) { // 这里要用箭头函数
        let ele = e.target;
        let {scrollHeight, clientHeight, scrollTop} = ele;
        let extra = 20;

        if (scrollTop + clientHeight + extra >= scrollHeight && this.hasMore === true && this.status !== 'loading') {
          this.onLoad();
        }
      }
    },

    watch: {
      scrollElement (val, oldVal) {
        if (oldVal === null && val !== null && this.isBindEvent === false) {
          let ele = val;
          ele.addEventListener('scroll', this.bindEventBind, false);
          this.isBindEvent = true;
        }
      }
    },

    created () {
      this.bindEventBind = this.bindEvent.bind(this);
    },

    mounted () {
      if (this.scrollElement !== null && this.isBindEvent === false) {
        this.scrollElement.addEventListener('scroll', this.bindEvent, false);
        this.isBindEvent = true;
      }
    },
  }
</script>

<style>

</style>
