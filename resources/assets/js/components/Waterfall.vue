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
        <a :href="'/show/' + item.id" target="_blank" class="img x layer-view loaded">
            <div class="default-bg"></div>
            <img :src="item.url" width="236">
            <span style="display: none" class="stop"></span>
            <div class="cover">
            </div>
        </a>
        <p class="description">{{ item.name }}</p>
        <div class="convo attribution clearfix">
            <a :href="'/users/' + item.user.id" class="img x" target="_blank">
                <img :src="item.user.photo" class="avt">
            </a>
            <div class="text">
                <div class="inner">
                    <div class="line">
                        <a :href="'/users/' + item.user.id" class="author x" target="_blank">♛{{ item.user.name }}</a>
                    </div>
                    <div class="line">
                        <a :href="'/tags/' + tag.slug" class="tag" v-for="tag in item.tags" target="_blank">{{ tag.name
                            }}</a>
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
