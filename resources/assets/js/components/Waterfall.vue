<template>
    <div class="pin wfc wft" :style="{position:item.position ,left: item.left + 'px', top: item.top + 'px'}"
         :left_bottom="item.left_bottom">
        <div class="actions">
            <div class="right">
                <a data-id="1272656784" title="喜欢" href="#" onclick="return false;"
                   class="like btn-with-icon btn btn14">
                    <i class="heart"></i>
                    <span class="text"> </span>
                </a>
            </div>
        </div>
        <a href="/pins/1272656784/" target="_self" class="img x layer-view loaded">
            <div class="default-bg"></div>
            <img :src="item.url" width="236" data-baiduimageplus-ignore="1">
            <span style="display: none" class="stop"></span>
            <div class="cover">
            </div>
        </a>
        <p class="description">{{ item.name }}</p>
        <div class="convo attribution clearfix">
            <a href="/lmkgjgj/" class="img x">
                <img src="//img.hb.aicdn.com/c737c4dcb83d2c9025e9d9cbf54774618cbbecf2e675-V37AE2_sq75sf"
                     data-baiduimageplus-ignore="1" class="avt">
            </a>
            <div class="text">
                <div class="inner">
                    <div class="line">
                        <a :href="item.user.photo" class="author x">♛{{ item.user.name }}</a>
                    </div>
                    <div class="line">
                        <a href="/boards/34522230/" class="tag" v-for="tag in item.tags">{{ tag.name }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 属性，对外开放接口
        props: {
            item: {}
        },
        mounted() {

        },
        methods: {},
        computed: {}
    }
</script>
