<template>
    <div class="app-container">
        <early-header></early-header>
        <router-view class="page-wrap"></router-view>
        <early-footer></early-footer>
    </div>
</template>

<script>
    import EarlyHeader from '../../component/header/header.vue';
    import EarlyFooter from '../../component/footer/footer.vue';

    export default {
        components: {EarlyHeader, EarlyFooter}
    }
</script>

<style lang="less">
    @import "./frame.less";
</style>
