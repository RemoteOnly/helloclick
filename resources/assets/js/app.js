require('./bootstrap');
window.Vue = require('vue');
Vue.component('waterfall', require('./components/Waterfall.vue'));

const app = new Vue({
    el: '#page',
    data: {
        items: [],
        top_five: []
    },
    mounted: function () {
        let first_ele = {left_bottom: $('#waterfall').children('div').first().height(), left: 0};
        this.top_five.push(first_ele);
        this.loadImages(0, 30);
    },
    methods: {
        loadImages: function (offset, limit) {
            let _this = this;
            let url = 'http://helloclick.app/load_images?offset=' + offset + '&limit=' + limit;
            axios.get(url).then(function (response) {
                _this.processPosition(response.data);
            }).catch(function (err) {
                console.log(err);
            });
        },
        processPosition: function (items) {
            let basement_left = $('#waterfall').children('div').last().position().left;
            let basement_count = $('#waterfall').children('div').length;
            let waterfall_width = $('#waterfall').width();

            for (let i = 0; i < items.length; i++) {
                // 计算出可以直接确定top=0的元素
                let item = items[i];
                // 计算图片整个容器高度
                let height = item.width === 0 ? 0 : parseInt(item.height * 236 / item.width);
                height += 103;

                if (i < 5 - basement_count) {
                    // top
                    item.top = 0;
                    if (basement_left + 252 > waterfall_width) {
                        basement_left = 0;
                    } else {
                        basement_left += 252;
                    }
                    // left
                    item.left = basement_left;

                } else {
                    let min_item = this.lowest;
                    item.top = min_item.left_bottom + 16;
                    item.left = min_item.left;
                }

                item.position = 'absolute';
                item.left_bottom = item.top + height;

                this.items.push(item);

                // 保存最下边的5个
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
        }
    },
    computed: {
        lowest: function () {
            let min_item = this.top_five[0];
            for (let i = 0; i < this.top_five.length; i++) {
                if (min_item.left_bottom > this.top_five[i].left_bottom) {
                    min_item = this.top_five[i];
                }
            }

            return min_item;
        },
        left: function () {
            return 0;
        }
    }
});
