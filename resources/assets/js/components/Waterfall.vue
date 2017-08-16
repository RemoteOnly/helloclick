<template>
    <div class="pin wfc wft"
         :style="{position: position.absolute, left: position.left + 'px', top: position.top + 'px'}">
        <div class="hidden">
            <a href="/lmkgjgj/">♛Dimo</a>采集到<a href="/boards/34522230">【黑与白】</a>
        </div>
        <div class="actions">
            <div class="right">
                <a data-id="1272656784" title="喜欢" href="#" onclick="return false;"
                   class="like btn-with-icon btn btn14">
                    <i class="heart"></i>
                    <span class="text"> </span>
                </a>
            </div>
        </div>
        <a href="/pins/1272656784/" target="_self" rel="" class="img x layer-view loaded">
            <div class="default-bg"></div>
            <img src="//img.hb.aicdn.com/18acee7bb27e798c399f457b2548e7d436ecc0e552a9a-BIIObQ_fw236"
                 width="236" height="153" alt="♛Dimo采集到【黑与白】" data-baiduimageplus-ignore="1">
            <span style="display: none" class="stop"></span>
            <div class="cover">
            </div>
        </a>
        <p data-raw="雾中露营" class="description">雾中露营</p>
        <div class="convo attribution clearfix">
            <a href="/lmkgjgj/" title="♛Dimo" rel="nofollow"
               class="img x">
                <img src="//img.hb.aicdn.com/c737c4dcb83d2c9025e9d9cbf54774618cbbecf2e675-V37AE2_sq75sf"
                     data-baiduimageplus-ignore="1" class="avt">
            </a>
            <div class="text">
                <div class="inner">
                    <div class="line">
                        <a href="/lmkgjgj/" rel="" class="author x">♛Dimo</a>&nbsp;采集到
                    </div>
                    <div class="line">
                        <a href="/boards/34522230/" rel="" class="x">【黑与白】</a>
                    </div>
                    <a title="评论" class="replyButton">
                    </a>
                </div>
            </div>
        </div>
        <div style="display:none;" class="comments muted">
        </div>
        <div style="display: none;" class="write convo clearfix">
            <a href="//" title="" class="img x">
                <img src="//img.hb.aicdn.com/654953460733026a7ef6e101404055627ad51784a95c-B6OFs4_sq75sf"
                     data-baiduimageplus-ignore="1">
            </a>
            <form action="/pins/1272656784/comments/" method="POST">
                <textarea placeholder="添加评论或把采集@给好友" class="clear-input GridComment"> </textarea>
                <a href="#" onclick="return false;" class="grid_comment_button btn">
                    <span class="text"> 添加评论</span>
                </a>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        // 属性，对外开放接口
        props: {
            url: ''
        },
        data() {
            return {
                item: {}
            }
        },
        methods: {

            calculatePosition() {

            }
        },
        computed: {
            position() {
                return {absolute: 'absolute', left: 0, right: 0, height: 0}
            }
        }
    }
</script>
