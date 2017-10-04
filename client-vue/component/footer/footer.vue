<template>
    <footer class="footer">
        <router-link class="footer-item" to='index'>
            <span class="iconfont icon-zhuye" title="主页"></span>
            <span class="footer-item-text">主页</span>
        </router-link>
        <router-link class="footer-item" to='today'>
            <span class="iconfont icon-liebiao" title="今日列表"></span>
            <span class="footer-item-text">今日列表</span>
        </router-link>
        <router-link class="footer-item" to='rank'>
            <span class="iconfont icon-paixingbang" title="排行榜"></span>
            <span class="footer-item-text">排行榜</span>
        </router-link>
        <router-link class="footer-item" to='mine'>
            <span class="iconfont icon-gerenzhongxin" title="个人中心"></span>
            <span class="footer-item-text">个人中心</span>
        </router-link>
    </footer>
</template>

<style lang="less">
    .footer {
        height: 50px;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        position: absolute;
        border-top: 1px solid #f0f0f0;
        bottom: 0;
        left: 0;

        .footer-item {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #666;
            .footer-item-text {
                font-size: 12px;
            }
        }
    }
</style>
