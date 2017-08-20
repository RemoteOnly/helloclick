<template>
    <div class="pin wfc wft" :style="{position:item.position ,left: item.left + 'px', top: item.top + 'px'}"
         :left_bottom="item.left_bottom">
        <div class="actions">
            <div class="right">
                <a title="喜欢" href="javascript:void(0);"
                   :class="item.has_favored == 1 ? 'unlike btn-with-icon btn btn14' :'like btn-with-icon btn btn14'"
                   :id="'favor-' + item.id">
                    <i class="heart" @click="favor(item.id)"></i>
                    <span class="text">{{item.favor_count}}</span>
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
        <p class="stats less">
            <span title="浏览" class="repin">
                <i></i>{{ item.view_count }}
            </span>
            <span title="喜欢" class="like">
                <i></i>{{item.favor_count}}
            </span>
        </p>
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
                        <a v-for="tag in item.tags" :href="'/tags/' + tag.slug" class="tag" :target="target_type">
                            {{ tag.name}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 属性，对外开放接口
        props: ['item', 'url', 'target_type'],
        mounted() {
        },
        methods: {
            favor(image_id) {
                if ($('#nav_user').length < 1) {
                    // 未登录
                    $('.login.btn.wbtn').click();
                    return false;
                }
                let _this = this;

                axios.post('/favor', {
                    image_id: image_id
                }).then(function (response) {
                    // 喜欢或者不喜欢
                    if (response.data.status === 1) {

                        if (response.data.favor_status === 1) {
                            _this.item.favor_count++;
                            $('#favor-' + image_id).removeClass('like').addClass('unlike');
                        } else {
                            if (_this.item.favor_count < 1) {
                                _this.item.favor_count = 0
                            } else {
                                _this.item.favor_count--;
                            }
                            $('#favor-' + image_id).removeClass('unlike').addClass('like');
                        }

                    } else {
                        swal('', '请求出错，请刷新页面重试', 'warning');
                    }
                }).catch(function (err) {
                    if (err.response.status === 401) {
                        // 未登录
                        $('.login.btn.wbtn').click();
                        return false;
                    }

                    swal('', '请求出错，请刷新页面重试', 'error');
                });
            }
        },
        computed: {}
    }
</script>
