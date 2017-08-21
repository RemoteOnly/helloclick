require('./bootstrap');
window.Vue = require('vue');
Vue.component('waterfall', require('./components/Waterfall.vue'));

const app = new Vue({
        el: '#page',
        data: {
            items: [],
            top_five: [],
            url: '',
            target_type: ''
        },
        mounted: function () {
            let first_ele = {left_bottom: $('#waterfall').children('div').first().height(), left: 0};
            this.url = $('#page').data('url');
            this.target_type = $('#page').data('target-type');
            this.top_five.push(first_ele);
            this.loadImages(0, 30);
        },
        methods: {
            loadImages: function (offset, limit) {
                let _this = this;
                let join_style = this.url.indexOf('?') === -1 ? '?' : '&';
                let url = this.url + join_style + 'offset=' + offset + '&limit=' + limit;
                // 提示
                $('#loading-btn').hide();
                $('#loading-info').show();
                axios.get(url).then(function (response) {
                    let last_count = $('#loading-btn').data('offset');
                    $('#loading-btn').data('offset', last_count + response.data.length);
                    _this.processPosition(response.data);

                    // 提示
                    $('#loading-btn').show();
                    $('#loading-info').hide();
                }).catch(function (err) {
                    swal('', '请求失败，请刷新页面重试', 'warning');
                    $('#loading-btn').hide();
                    $('#loading-info').show();
                });
            }
            ,
            loadMore: function () {
                let offset = $('#loading-btn').data('offset');
                this.loadImages(offset, 30);
            }
            ,
            processPosition: function (items) {
                let basement_left = $('#waterfall').children('div').last().position().left;
                let basement_count = $('#waterfall').children('div').length;
                let waterfall_width = $('#waterfall').width();

                for (let i = 0; i < items.length; i++) {
                    let item = items[i];
                    // 计算图片整个容器高度
                    let height = item.width === 0 ? 0 : parseInt(item.height * 236 / item.width);
                    height += 129;
                    // 计算出可以直接确定top=0的元素
                    if (i < 5 - basement_count) {
                        // top
                        item.top = 0;
                        if (basement_left + 252 > waterfall_width) {
                            basement_left = 0;
                        } else {
                            basement_left += 252;
                        }
                        // eft
                        item.left = basement_left;

                    } else {
                        // 从top_five中取到最高的一个元素，将新的item放在它的下边
                        let highest_item = this.highest;
                        item.top = highest_item.left_bottom + 16;
                        item.left = highest_item.left;
                    }

                    item.position = 'absolute';
                    item.left_bottom = item.top + height;

                    this.items.push(item);

                    // 更新最下边的5个div
                    if (this.top_five.length < 5) {
                        this.top_five.push(item);
                    } else {
                        for (let i = 0; i < this.top_five.length; i++) {
                            if (item.left === this.top_five[i].left && item.left_bottom > this.top_five[i].left_bottom) {
                                this.top_five.splice(i, 1, item);
                                break;
                            }
                        }
                    }
                }

                // 修改container的高度
                let lowest = this.top_five[0].left_bottom;
                for (let i = 0; i < this.top_five.length; i++) {
                    if (lowest < this.top_five[i].left_bottom) {
                        lowest = this.top_five[i].left_bottom;
                    }
                }
                $('#waterfall').height(lowest);
            }
        }
        ,
        computed: {
            highest: function () {
                // 在最下边的5个中查找最上边的一个
                let highest_item = this.top_five[0];
                for (let i = 0; i < this.top_five.length; i++) {
                    if (highest_item.left_bottom > this.top_five[i].left_bottom) {
                        highest_item = this.top_five[i];
                    }
                }

                return highest_item;
            }
            ,
            left: function () {
                return 0;
            }
        }
    })
;
