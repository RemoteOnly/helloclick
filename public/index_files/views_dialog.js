(function (rt) {
    var templates = rt.templates, attrs = function () {
        return rt.attrs.apply(rt, arguments)
    }, _ = function () {
        return rt._.apply(rt, arguments)
    }, img = function () {
        return rt.img.apply(rt, arguments)
    }, imgURL = function () {
        return rt.imgURL.apply(rt, arguments)
    }, museImgUrl = function () {
        return rt.museImgUrl.apply(rt, arguments)
    }, gifURL = function () {
        return rt.gifURL.apply(rt, arguments)
    }, imgSuffixIsRetinaDisplay = function () {
        return rt.imgSuffixIsRetinaDisplay.apply(rt, arguments)
    }, imgSize = function () {
        return rt.imgSize.apply(rt, arguments)
    }, avatar = function () {
        return rt.avatar.apply(rt, arguments)
    }, isVerified = function () {
        return rt.isVerified.apply(rt, arguments)
    }, url = function () {
        return rt.url.apply(rt, arguments)
    }, parseURL = function () {
        return rt.parseURL.apply(rt, arguments)
    }, mkurl = function () {
        return rt.mkurl.apply(rt, arguments)
    }, GACampaignURL = function () {
        return rt.GACampaignURL.apply(rt, arguments)
    }, format_text = function () {
        return rt.format_text.apply(rt, arguments)
    }, escape = function () {
        return rt.escape.apply(rt, arguments)
    }, __t = rt.templates, emerge = function () {
        return rt.renderSync.apply(rt, arguments)
    };
    __t["dialog/dialog_add"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "Add",
                title: "添加",
                body: emerge("dialog/dialog_add_body"),
                className: "PaddingLess"
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_add_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({id: "OpenLinks"})), buf.push("><a"), buf.push(attrs({
                id: "OpenScrapePin",
                "class": "cell"
            })), buf.push("><div"), buf.push(attrs({
                id: "scrape",
                "class": "icon"
            })), buf.push("></div><span>采集网页图片</span></a><a"), buf.push(attrs({
                id: "OpenUploadPin",
                "class": "cell"
            })), buf.push("><div"), buf.push(attrs({
                id: "upload",
                "class": "icon"
            })), buf.push("></div><span>上传本地图片</span></a><a"), buf.push(attrs({
                id: "OpenCreateBoard",
                "class": "cell"
            })), buf.push("><div"), buf.push(attrs({
                id: "board",
                "class": "icon"
            })), buf.push("></div><span>新建画板</span></a><p"), buf.push(attrs({"class": "pin-tools"})), buf.push("><span>使用花瓣网的采集工具，你可以更高效地收集网络上的图片、视频或者网页截图</span><br"), buf.push(attrs({})), buf.push("/>花瓣上90%的采集都来自采集工具，<a"), buf.push(attrs({href: "/about/goodies/"})), buf.push('>去安装采集工具</a></p></div><script>(function(){function a(a){app.req.user?a():(app.hideDialog(),app.showSheet("login",{modal:!0,login_prompt:"请先登录，登录后才能继续刚才的操作"}))}document.id("OpenScrapePin").addEvent("click",function(){return a(function(){app.showDialog("scrape_pin")}),!1}),document.id("OpenUploadPin").addEvent("click",function(){return app.showUploadDialog(),!1}),document.id("OpenCreateBoard").addEvent("click",function(){return a(function(){app.showDialog("create_board")}),!1})})()</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_already_promoted"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_base", {
                id: "already_promoted",
                title: "推荐自己",
                body: emerge("dialog/dialog_already_promoted_body"),
                destroyOnClose: !0
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_already_promoted_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<p>你已经在推荐用户里了，不用再推荐自己了，你的采集被人喜欢的越多，你就越有可能出现在最前面。</p><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push('><strong> 确定</strong><span></span></a><script>$$("#already_promoted a.btn").addEvent("click",function(a){a.stop(),app.hideDialog()})</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_appeal"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "Appeal",
                title: "解冻申诉",
                body: emerge("dialog/dialog_appeal_body"),
                destroyOnClose: !0
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_appeal_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<form"), buf.push(attrs({
                action: "",
                "class": "Form StaticForm nm"
            })), buf.push("><ul><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "username",
                type: "text",
                name: "username",
                value: "",
                "class": "clear-input"
            })), buf.push("/><label>用户名</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "url",
                type: "text",
                name: "url",
                value: "",
                "class": "clear-input"
            })), buf.push("/><label>个性网址</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "email",
                type: "text",
                name: "email",
                value: "",
                "class": "clear-input"
            })), buf.push("/><label>Email</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "sina",
                type: "text",
                name: "sina",
                value: "",
                "class": "clear-input"
            })), buf.push("/><label>新浪微博昵称</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "douban",
                type: "text",
                name: "douban",
                value: "",
                "class": "clear-input"
            })), buf.push("/><label>豆瓣昵称</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li></ul><div"), buf.push(attrs({"class": "Submit"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push('><strong> 提交</strong><span></span></a></div></form><script>(function(){var a=$("Appeal");if(a.retrieve("initialized"))return;var b=$("username"),c=$("url"),d=$("email"),e=$("sina"),f=$("douban");new Button(a.getElement(".Submit a"),{click:function(){var a=b.get("value").trim(),g=c.get("value").trim(),h=d.get("value").trim(),i=e.get("value").trim(),j=f.get("value").trim();if(a==""&&g==""&&h==""&&i==""&&j==""){app.showTip(b,"至少输入其中一项",{width:150}),app.showTip(c,"至少输入其中一项",{width:150}),app.showTip(d,"至少输入其中一项",{width:150}),app.showTip(e,"至少输入其中一项",{width:150}),app.showTip(f,"至少输入其中一项",{width:150});return}return this.disable(),(new Request.JSON({url:"/appeal/",data:{username:a,url:g,email:h,sina:i,douban:j},onSuccess:function(a){a.err?app.error(a.msg):app.hideDialog()},onFailure:function(){app.error(app.COMMON_ERRMSG)},onComplete:function(){this.enable()}.bind(this)})).post(),!1}}),a.getElements("input").addEvent("blur",function(a){app.hideTip(a.target)}),a.store("initialized",!0)})()</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_base"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "" + id + "",
                style: "display:none;",
                "class": "modal-container " + (typeof destroyOnClose == "undefined" ? "" : " destroy")
            })), buf.push("><div"), buf.push(attrs({"class": "overlay"})), buf.push("></div><div"), buf.push(attrs({
                style: "z-index: 99999",
                "class": "dialog-box " + (typeof className == "undefined" ? "" : " " + className)
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">" + escape((interp = title) == null ? "" : interp) + "<div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div></div><div"), buf.push(attrs({"class": "box-inner"})), buf.push(">");
            var __val__ = body;
            buf.push(null == __val__ ? "" : __val__), buf.push('</div></div></div><script>$$(".modal-container .dialog-box .close-btn").addEvent("click",function(){return this.getParent(".modal-container").hasClass("destroy")&&this.fireEvent("destroy"),app.hideDialog(),!1})</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_board_cover"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, board = page.board;
            buf.push("<div"), buf.push(attrs({
                id: "board_cover",
                style: "display:none;",
                "class": "ModalContainer"
            })), buf.push("><div"), buf.push(attrs({"class": "modal wide"})), buf.push("><div"), buf.push(attrs({"class": "header"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "app.hideDialog(); return false",
                "class": "close"
            })), buf.push("><strong>Close</strong><span></span></a><h2>设置封面</h2></div><div"), buf.push(attrs({"class": "cover-option"})), buf.push("><div"), buf.push(attrs({"class": "sub-arrow"})), buf.push("></div><span"), buf.push(attrs({"class": "first"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "cover-option",
                id: "cover-option-default",
                value: "default",
                checked: !0
            })), buf.push("/><label"), buf.push(attrs({"for": "cover-option-default"})), buf.push(">使用默认封面（最新采集）</label></span><span><input"), buf.push(attrs({
                type: "radio",
                name: "cover-option",
                id: "cover-option-custom",
                value: "custom",
                checked: "checked"
            })), buf.push("/><label"), buf.push(attrs({"for": "cover-option-custom"})), buf.push(">使用自定义封面</label></span></div><div"), buf.push(attrs({"class": "cover no-select"})), buf.push("><ul"), buf.push(attrs({
                style: "left: 226px",
                "class": "cover-imgs"
            })), buf.push("></ul><div"), buf.push(attrs({"class": "left arrow none"})), buf.push("><div"), buf.push(attrs({"class": "arrow-img"})), buf.push("></div></div><div"), buf.push(attrs({"class": "right arrow"})), buf.push("><div"), buf.push(attrs({"class": "arrow-img"})), buf.push("></div></div></div><div"), buf.push(attrs({"class": "prompt"})), buf.push("><i"), buf.push(attrs({"class": "icon"})), buf.push("></i>还没找到合适的封面吗？<a"), buf.push(attrs({
                href: "/boards/board_id/?setcover=1",
                "class": "x"
            })), buf.push(">点击进入画板选择</a></div><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "change-btn btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 保存设置</span></a><a"), buf.push(attrs({
                onclick: "app.hideDialog(); return false",
                href: "#",
                "class": "btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a></div><div"), buf.push(attrs({"class": "overlay"})), buf.push('></div></div><script>(function(){var a=document.getElement(".cover-imgs"),b=new Fx.Tween(a,{property:"left",duration:300}),c=document.getElement(".left.arrow"),d=document.getElement(".right.arrow"),e=!1;document.getElement("#board_cover .left").addEvent("click",function(){if(this.hasClass("none")||e)return;d.hasClass("none")&&d.removeClass("none");var f=parseInt(a.getStyle("left"));e=!0,b.start(f,f+226).chain(function(){e=!1,app.dialog.moveIndex--,app.dialog.moveIndex<=0&&c.addClass("none")})}),document.getElement("#board_cover .right").addEvent("click",function(){if(this.hasClass("none")||e)return;c.hasClass("none")&&c.removeClass("none");var g=parseInt(a.getStyle("left"));e=!0,b.start(g,g-226).chain(function(){e=!1,app.dialog.moveIndex++;var a=$$(".cover-imgs img").length;if(app.dialog.moveIndex>=a-1)d.addClass("none");else if(app.dialog.moveIndex==a-3){var b=$$(".cover-imgs img")[a-1].get("data-id");f(b)}app.dialog.moveIndex==10&&i()})});var f=function(a){(new Request.JSON({url:"/boards/"+app.dialog.board_id+"/?limit=3&max="+a+"&wfl=1",onSuccess:function(a){a.err?alert(a.msg||app.COMMON_ERRMSG):g(a.board.pins)},onFailure:function(){alert(app.COMMON_ERRMSG)}})).get()},g=function(a){var b="";a.map(function(a){var c="//"+app.settings.imgHosts[a.file.bucket]+"/"+a.file.key+"_sq235";b+="<li><img src=\'"+c+"\' data-id= \'"+a.pin_id+"\' data-baiduimageplus-ignore />"+"</li>"});var c=document.getElement(".cover-imgs").get("html");document.getElement(".cover-imgs").set("html",c+b)};$$(".change-btn").addEvent("click",function(){var a=app.dialog.board_id,b=document.id("cover-option-default"),c=b.get("checked"),d=$$(".cover-imgs img")[app.dialog.moveIndex].get("data-id");if(c)var e={_method:"DELETE"},f=$$(".cover-imgs img")[0].get("src");else var e={pin_id:d},f=$$(".cover-imgs img")[app.dialog.moveIndex].get("src");return(new Request.JSON({url:"/boards/"+a+"/board-cover",data:e,onSuccess:function(b){b.err?app.error(b.err):(app.msg(b.msg),app.dialog.boards[a].cover=c?!1:!0),h(f)}})).post(),this.getParent(".ModalContainer").hasClass("destroy")&&this.fireEvent("destroy"),app.hideDialog(),!1});var h=function(a){var b=document.getElement(".cover-change");b.getElement(".large").set("src",a),b.removeClass("cover-change")},i=function(){var a=document.getElement("#board_cover .prompt");a.show().fade("in"),document.getElement("#board_cover .prompt a").set("href","/boards/"+app.dialog.board_id+"/?setcover=1")}})()</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_board_cover_pinitem"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, board = page.board;
            buf.push("<div"), buf.push(attrs({
                id: "board_cover_pinitem",
                style: "display:none;",
                "class": "ModalContainer"
            })), buf.push("><div"), buf.push(attrs({
                style: "width: 478px; margin-left: -239px;",
                "class": "modal"
            })), buf.push("><div"), buf.push(attrs({"class": "header"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "app.hideDialog(); return false",
                "class": "close"
            })), buf.push("><strong>Close</strong><span></span></a><h2>封面预览 / " + escape((interp = board.title) == null ? "" : interp) + "</h2></div><div"), buf.push(attrs({"class": "body"})), buf.push("><div"), buf.push(attrs({"class": "cover"})), buf.push("><img"), buf.push(attrs({
                src: "",
                "data-baiduimageplus-ignore": 1
            })), buf.push("/></div><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "change-btn btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 确定</span></a><a"), buf.push(attrs({
                onclick: "app.hideDialog(); return false",
                href: "#",
                "class": "btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a></div></div><div"), buf.push(attrs({"class": "overlay"})), buf.push('></div></div><script>(function(){$$(".change-btn").addEvent("click",function(){var a=app.dialog.board_id,b=app.dialog.pin_id;(new Request.JSON({url:"/boards/"+a+"/board-cover",data:{pin_id:b},onSuccess:function(a){a.err?app.error(a.err):app.msg(a.msg),app.hideDialog()}})).post()})})()</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_find_submit_tip"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "find_submit_tip",
                title: "提交成功",
                body: emerge("dialog/dialog_find_submit_tip_body"),
                className: ""
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_find_submit_tip_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<p>提交成功，我们将在5个工作日内完成审核。请留意系统消息。</p><a"), buf.push(attrs({
                onclick: "$('find_submit_tip').hide();return false;",
                href: "#",
                "class": "btn btn18 rbtn"
            })), buf.push('><strong> 我知道了</strong><span></span></a><script>$$("#already_promoted a.btn").addEvent("click",function(a){a.stop(),app.hideDialog()})</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_frame"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "" + id + "",
                style: "display:none;",
                "class": "ModalContainer " + (typeof destroyOnClose == "undefined" ? "" : "destroy")
            })), buf.push("><div"), buf.push(attrs({"class": "modal wide " + (typeof className == "undefined" ? "" : " " + className)})), buf.push("><div"), buf.push(attrs({"class": "header"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                "class": "close"
            })), buf.push("><strong>Close</strong><span></span></a><h2>" + escape((interp = title) == null ? "" : interp) + "</h2></div>");
            var __val__ = body;
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({"class": "overlay"})), buf.push('></div></div><script>$$(".ModalContainer .modal.wide .header a.close").addEvent("click",function(){return this.getParent(".ModalContainer").hasClass("destroy")&&this.fireEvent("destroy"),app.hideDialog(),!1})</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_mv"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "mv_holder",
                style: "display:none;",
                "class": "ModalContainer"
            })), buf.push("><div"), buf.push(attrs({"class": "modal wide"})), buf.push("><div"), buf.push(attrs({"class": "header"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "app.hideDialog(); return false",
                "class": "close"
            })), buf.push("><strong>Close</strong><span></span></a><h2>了解花瓣</h2></div>"), navigator.userAgent.toLowerCase().match("ipad") ? (buf.push("<video"), buf.push(attrs({
                id: "youku-html5-player-video",
                width: "450px",
                height: "300px",
                "x-webkit-airplay": "allow",
                controls: "",
                autoplay: "",
                preload: "",
                src: "http://www.youku.com/player/getM3U8/vid/80315531/type/flv/v.m3u8"
            })), buf.push("></video>")) : (buf.push("<embed"), buf.push(attrs({
                src: "http://player.youku.com/player.php/sid/XMzIxMjU2OTY4/v.swf",
                allowFullScreen: "true",
                quality: "high",
                width: "480",
                height: "400",
                align: "middle",
                type: "application/x-shockwave-flash",
                flashvars: "winType=index",
                style: "visibility:visible;"
            })), buf.push("></embed>")), buf.push("</div><div"), buf.push(attrs({"class": "overlay"})), buf.push("></div></div>")
        }
        return buf.join("")
    }, __t["dialog/dialog_myboard"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "myboard",
                title: "提交画板",
                body: emerge("dialog/dialog_myboard_body"),
                className: "PaddingLess"
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_myboard_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<form"), buf.push(attrs({
                action: "",
                "class": "Form StaticForm nm"
            })), buf.push("><ul><li"), buf.push(attrs({"class": "nbt"})), buf.push("><label>选择画板</label>");
            var __val__ = emerge("base/board_list");
            buf.push(null == __val__ ? "" : __val__), buf.push("<span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li"), buf.push(attrs({"class": "nbt"})), buf.push("><textarea"), buf.push(attrs({
                id: "board_des",
                name: "board_des",
                value: "",
                placeholder: "精确的画板介绍，提升入选几率",
                "class": "clear-input"
            })), buf.push("></textarea><label>画板介绍</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "email",
                type: "text",
                name: "email",
                value: "",
                placeholder: "邮箱/手机号/QQ",
                "class": "clear-input"
            })), buf.push("/><label>联系方式</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li></ul><div"), buf.push(attrs({"class": "Submit"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><strong> 提交</strong><span></span></a></div></form><style>#myboard .board-list {margin-left: 150px;}\n#myboard .board-list .current .name { overflow: visible;}\n.board-list .drop-list .filter {display: none;}\n.board-list .drop-list {width: 375px;}</style>")
        }
        return buf.join("")
    }, __t["dialog/dialog_report"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_base", {
                id: "Report",
                title: "举报",
                body: emerge("dialog/dialog_report_body"),
                className: "PaddingLess"
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_report_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({id: "ReportForm"})), buf.push("><span"), buf.push(attrs({"class": "ReportTitle"})), buf.push(">举报原因：</span><div"), buf.push(attrs({"class": "ReportRadio"})), buf.push("><label"), buf.push(attrs({"class": "InputBlock"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "reason",
                value: 0,
                checked: !0
            })), buf.push("/>&nbsp;&nbsp;垃圾广告</label><label"), buf.push(attrs({"class": "InputBlock"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "reason",
                value: 1
            })), buf.push("/>&nbsp;&nbsp;淫秽色情</label><label"), buf.push(attrs({"class": "InputBlock"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "reason",
                value: 2
            })), buf.push("/>&nbsp;&nbsp;虚假中奖</label><label"), buf.push(attrs({"class": "InputBlock"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "reason",
                value: 3
            })), buf.push("/>&nbsp;&nbsp;敏感信息</label><label"), buf.push(attrs({"class": "InputBlock"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "reason",
                value: 4
            })), buf.push("/>&nbsp;&nbsp;人身攻击</label><label"), buf.push(attrs({"class": "InputBlock"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "reason",
                value: 5
            })), buf.push("/>&nbsp;&nbsp;骚扰他人</label></div><div"), buf.push(attrs({style: "margin: 20px 0;"})), buf.push(">图片存在侵权/知识产权问题？请按照<a"), buf.push(attrs({
                href: "/about/disclaimer/",
                "class": "red-link"
            })), buf.push(">该页面的相关说明</a>进行举报/维权</div><div"), buf.push(attrs({"class": "Submit"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push('><strong> 提交</strong><span></span></a></div></div><script>$$("#ReportForm .Submit .btn").addEvent("click",function(){var a;for(var b=0;b<$$(".ReportRadio input").length;b++)if($$(".ReportRadio input")[b].checked){a=$$(".ReportRadio input")[b].value;break}return data={type:report_type,reason:a,id:report_id},(new Request.JSON({url:"/feedback/new-report/",data:data,onSuccess:function(a){a.err=="already reported"?app.error("你已经举报过了，我们会及时处理哦，谢谢"):app.msg("谢谢你对花瓣的贡献，花瓣的工作人员会及时处理你的举报的")}})).post(),this.getParent(".modal-container").hasClass("destroy")&&this.fireEvent("destroy"),app.hideDialog(),!1})</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_selection_info"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "SelectionInfo",
                title: "什么是花瓣精选",
                body: emerge("dialog/dialog_selection_info_body")
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_selection_info_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "body"})), buf.push('><p>花瓣每天都有很多认真的用户在收集整理出大量的优质内容，为了让大家能更方便快速地在不同领域中发现优质内容，并学习优秀用户的好习惯，于是我们推出了 —— <em>花瓣精选</em>。</p><h3><em>精选</em>中呈现的内容和用户是通过两种机制推荐给大家。</h3><ol><li>由系统算法结合采集时间、关注数、采集数、被喜欢数、被转采数和更新频率筛选出综合排名靠前的画板。</li><li>看起来并不怎么热门，但我们觉得有价值有趣的优质内容和优秀用户。</li></ol><h3>我们认为<em>精选</em>存在的意义：</h3><ol><li>若你刚接触花瓣，还不知道怎么去使用花瓣，我们推荐优秀用户使用花瓣作为你的学习样本。</li><li>若你每天上花瓣，希望不要错过优质内容与优秀用户，或者你仍然希望在自己的关注点之外，发现一些其他有趣有价值的领域。</li></ol><h3>我们希望<em>精选</em>能帮助到你。</h3><ol><li>若你提供了优质内容，你想要结交更多志同道合的人，欢迎你站在这个大舞台推荐自己。<br />我们感谢你的付出与敬佩你的自信。</li><li>你的每一个关注、每一个采集、每一个喜欢、每一个转采，都影响着你，或者他人在花瓣中的成长。<br />英雄惜英雄，你也可以推荐内容或用户帮助我们一起优化内容的浮现。</li></ol><p>我们还不完美，以及还有很多我们没有发现的不完美。请通过 <a href="/pins/53553/">用户反馈</a> 告诉我们，非常感谢。</p></div>')
        }
        return buf.join("")
    }, __t["dialog/dialog_self_promote"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "self_promote",
                title: "推荐自己",
                body: emerge("dialog/dialog_self_promote_body"),
                destroyOnClose: !0
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_self_promote_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                style: "display: none;",
                "class": "msg"
            })), buf.push("></div><h3>给自己写一段70字以下的推荐理由吧！</h3><form"), buf.push(attrs({"class": "self-promote"})), buf.push("><textarea"), buf.push(attrs({
                name: "description",
                placeholder: "你的身份+一句最能代表你的话+向大家介绍你的花瓣",
                "class": "clear-input"
            })), buf.push("></textarea><input"), buf.push(attrs({
                type: "submit",
                value: "提交",
                "class": "btn rbtn btn18"
            })), buf.push('/></form><script>function showMsg(a){var b=document.getElement("#self_promote .msg");b.set("text",a),b.show()}$$(".self-promote input[type=submit]").addEvent("click",function(a){a.stop();var b=this;if(b.hasClass("disabled"))return;b.addClass("disabled"),app.requireLogin(function(){var a=app.page.filter.split(":"),c=a[1]==="popular"?"popular":a[2],d=document.getElement(".self-promote textarea[name=description]").get("value").trim();(new Request.JSON({url:"/users/"+app.req.user.user_id+"/promote",data:{category:c,description:d},onSuccess:function(a){a.err?showMsg(a.msg||app.COMMON_ERRMSG):(app.hideDialog(),app.msg("推荐成功"))},onError:function(a,b){showMsg(b)},onComplete:function(){b.removeClass("disabled")}})).post()})})</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_submit_channel_board"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "submit_channel_board_dialog",
                style: "display:none;",
                "class": "ModalContainer"
            })), buf.push("><div"), buf.push(attrs({"class": "modal thin"})), buf.push("><div"), buf.push(attrs({"class": "header lg"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "$('submit_channel_board_dialog').hide();return false;",
                "class": "close"
            })), buf.push("><strong>Close</strong><span></span></a><h2>提交画板</h2></div><h3>提交你的画板到<em"), buf.push(attrs({style: "color: #FF0000;"})), buf.push(">" + escape((interp = page.channel.name) == null ? "" : interp) + "</em>，和大家分享你的品味</h3>");
            var __val__ = emerge("base/board_picker");
            buf.push(null == __val__ ? "" : __val__), buf.push("<div"), buf.push(attrs({"class": "help_text"})), buf.push(">采集数超过10个的画板才能提交哦</div><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "commit btn btn18 rbtn"
            })), buf.push("><strong> 提交</strong><span></span></a><div"), buf.push(attrs({
                style: "display: none;",
                "class": "msgr left-arrow"
            })), buf.push("><span"), buf.push(attrs({"class": "txt"})), buf.push("></span><span"), buf.push(attrs({"class": "arrow"})), buf.push(">◣</span><span"), buf.push(attrs({"class": "arrow-mask"})), buf.push("></span></div></div><div"), buf.push(attrs({"class": "overlay"})), buf.push('></div></div><script>(function(){var a=$("submit_channel_board_dialog");if(!a)return;var b=$$("#submit_channel_board_dialog a.commit");if(!b)return;$$("#submit_channel_board_dialog a.commit").addEvent("click",function(){var a=(new BoardPicker($("submit_channel_board_dialog").getElement(".BoardPicker"))).getSelected(),b=$$("#submit_channel_board_dialog .msgr")[0],c=new BoardPicker($("submit_channel_board_dialog").getElement(".BoardPicker"));return c.addEvent("select",function(){b.hide()}),$$("#submit_channel_board_dialog a.close").addEvent("click",function(){b.hide()}),(new Request.JSON({url:"/fm/"+app.page.channel.channel_id+"/boards/",data:{board_id:a},onSuccess:function(a){if(a.err)b.getElement("span.txt").set("text",a.msg),b.show("inline-block");else{document.id("submit_channel_board_dialog").hide();var c=$("channel_callout");c&&c.show();var d=new Fx.Scroll(window,{duration:"short"});d.toTop()}}})).post(),!1})})()</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_topic_editor_apply"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, __val__ = emerge("dialog/dialog_frame", {
                id: "topic_editor_apply",
                title: "申请成为小编",
                body: emerge("dialog/dialog_topic_editor_apply_body"),
                destroyOnClose: !0
            });
            buf.push(null == __val__ ? "" : __val__)
        }
        return buf.join("")
    }, __t["dialog/dialog_topic_editor_apply_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<h3>说说你想成为小编的理由吧：</h3><form><p><textarea"), buf.push(attrs({
                name: "description",
                "class": "clear-input"
            })), buf.push("></textarea></p><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "apply btn btn20 rbtn"
            })), buf.push('><strong> 提交</strong><span></span></a></form><script>(function(){var a=document.id("topic_editor_apply"),b=a.getElement("textarea"),c=a.getElement(".apply");c.addEvent("click",function(){if(b.value.trim()=="")return;(new Request.JSON({url:"/topics/"+app.page.topic.topic_id+"/apply/",data:{reason:b.value},onSuccess:function(a){if(a.err)return app.error(a.msg||app.COMMON_ERRMSG);app.hideDialog(),app.msg("你的申请已提交")},onComplete:function(){c.removeClass("disabled")}})).post()})})()</script>')
        }
        return buf.join("")
    }, __t["dialog/dialog_upload_error_body"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<form><div"), buf.push(attrs({
                style: "size:16px;color:#444;padding-top:10px;",
                "class": "content"
            })), buf.push("><img"), buf.push(attrs({
                src: "/img/error2.png",
                style: "float:left;margin: 26px 12px 0 30px;",
                "data-baiduimageplus-ignore": 1
            })), buf.push("/><div"), buf.push(attrs({
                style: "line-height:78px;font-size: 16px; color: #444;",
                "class": "text"
            })), buf.push("></div><div"), buf.push(attrs({style: "text-align: right; border-top: 1px solid #ededed; padding: 15px 30px 15px 0; margin-bottom: -21px;background: #fafafa; width: 550px; padding-right: 30px;"})), buf.push("><a"), buf.push(attrs({
                style: "",
                onclick: "$$('.modal-container').hide();",
                href: "#",
                "class": "btn btn18 rbtn btn wbtn"
            })), buf.push("><strong> 确定</strong><span></span></a></div></div></form>")
        }
        return buf.join("")
    }, __t["dialog/sheet_chrome_addon"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "sheet",
                "class": "destroy"
            })), buf.push("><div"), buf.push(attrs({"class": "sheet"})), buf.push("><div"), buf.push(attrs({"class": "body chrome-addon-error"})), buf.push(">在线安装碰上问题了，试试本地下载安装吧<a"), buf.push(attrs({
                href: "//hbfile.b0.upaiyun.com/extensions/huaban-chrome-extension.crx",
                "class": "download btn btn18 rbtn"
            })), buf.push("><strong> 本地下载 Chrome 扩展</strong><span></span></a></div><a"), buf.push(attrs({
                href: "#",
                title: "关闭",
                onclick: "app.hideSheet();return false;",
                "class": "close"
            })), buf.push('></a></div></div><script>document.getElement("#sheet .chrome-addon-error .download").addEvent("click",function(){return app.showDialogBox("chrome_addon"),window.open(this.href),!1})</script>')
        }
        return buf.join("")
    }, __t["dialog/sheet_comment_captcha"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "sheet",
                "class": "destroy comment-captcha"
            })), buf.push("><div"), buf.push(attrs({
                id: "sheet_comment_captcha",
                "class": "sheet"
            })), buf.push("><div"), buf.push(attrs({"class": "body"})), buf.push("><h3>请输入下方验证码以提交评论</h3><div"), buf.push(attrs({
                id: "sheet-captcha",
                "class": "captcha"
            })), buf.push("></div></div><div"), buf.push(attrs({"class": "buttons"})), buf.push("><button"), buf.push(attrs({
                type: "submit",
                "class": "btn rbtn"
            })), buf.push(">提交</button><button"), buf.push(attrs({
                type: "reset",
                "class": "btn wbtn"
            })), buf.push('>取消</button></div></div></div><script>(function(){var a=null;app.initCaptcha("sheet-captcha","comment",function(b){a=b}),$$("#sheet_comment_captcha button[type=reset]").addEvent("click",function(){app.hideSheet()}),$$("#sheet_comment_captcha button[type=submit]").addEvent("click",function(b){b.stop();if(!a)return app.alert("请先完成验证码");var c="/pins/"+app.$form.pinId+"/comments/";(new Request.JSON({url:c,data:{text:app.$form.text,validate:a},onSuccess:function(a){a.err?app.showTip(captchaInput,"验证码不正确"):(app.$form=undefined,app.hideSheet(function(){if(app.$captcha_callback){var b=app.$captcha_callback;delete app.$captcha_callback,b(a)}else window.location=app.page.$url}))},onFailure:function(a){alert(app.COMMON_ERRMSG)}})).post()})})()</script>')
        }
        return buf.join("")
    }, __t["dialog/sheet_login"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({
                id: "sheet",
                "class": "destroy"
            })), buf.push("><div"), buf.push(attrs({
                id: "sheet_login",
                "class": "sheet"
            })), buf.push("><div"), buf.push(attrs({"class": "head"})), buf.push(">");
            var prompt = typeof login_prompt == "undefined" ? "登录花瓣" : login_prompt;
            buf.push("<h2>" + escape((interp = prompt) == null ? "" : interp) + "</h2></div><div"), buf.push(attrs({"class": "body"})), buf.push("><div"), buf.push(attrs({"class": "login-connect"})), buf.push("><h5>使用合作网站帐号登录</h5><div"), buf.push(attrs({"class": "connections clearfix"})), buf.push("><a"), buf.push(attrs({
                href: "/oauth/weibo/instant_login/",
                onclick: "return false;",
                "class": "weibo login-button"
            })), buf.push(">新浪微博</a><a"), buf.push(attrs({
                href: "/oauth/douban/instant_login/",
                onclick: "return false;",
                "class": "douban login-button"
            })), buf.push(">豆瓣</a><a"), buf.push(attrs({
                href: "/oauth/renren/instant_login/",
                onclick: "return false;",
                "class": "renren login-button"
            })), buf.push(">人人网</a><a"), buf.push(attrs({
                href: "/oauth/qzone/instant_login/",
                onclick: "return false;",
                "class": "qzone login-button"
            })), buf.push(">QQ</a></div><p"), buf.push(attrs({"class": "less"})), buf.push(">未注册过花瓣也可以直接登录哦</p></div><div"), buf.push(attrs({"class": "login-form"})), buf.push("><h5>使用注册邮箱登录</h5><form"), buf.push(attrs({
                id: "auth_form",
                action: "/auth/",
                method: "post",
                action: url("/auth/", !0),
                "class": "Form FancyForm AuthForm"
            })), buf.push("><ul><li><div"), buf.push(attrs({"class": "input email"})), buf.push("><input"), buf.push(attrs({
                id: "login_email",
                name: "email",
                type: "text",
                value: ""
            })), buf.push("/><label>花瓣注册邮箱</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></div></li><li><div"), buf.push(attrs({"class": "input password"})), buf.push("><input"), buf.push(attrs({
                id: "login_password",
                name: "password",
                type: "password"
            })), buf.push("/><label>密码</label><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></div></li></ul><div"), buf.push(attrs({"class": "non_inputs"})), buf.push("><a"), buf.push(attrs({
                id: "login_btn",
                href: "#",
                onclick: "return false;",
                "class": "btn btn18 rbtn"
            })), buf.push("><strong> 登录</strong><span></span></a><a"), buf.push(attrs({
                id: "reset_password",
                href: "#",
                onclick: "return false;",
                "class": "less fr"
            })), buf.push(">忘记了密码？</a><a"), buf.push(attrs({
                id: "back_to_login",
                href: "#",
                style: "display: none;",
                onclick: "return false;",
                "class": "less fr"
            })), buf.push(">哦，又想起来了!</a></div></form><div"), buf.push(attrs({
                id: "reset_msg",
                style: "display: none;",
                "class": "common-message success"
            })), buf.push("></div></div><div"), buf.push(attrs({"class": "clear"})), buf.push("></div></div><a"), buf.push(attrs({
                href: "#",
                title: "关闭",
                onclick: "app.hideSheet();return false;",
                "class": "close"
            })), buf.push('></a></div></div><script>(function(a){function f(a,b){app.showTip(a,b,{width:170})}function g(a){app.hideTip(a)}function h(a){if(a.err)return a.err==404?window.location.reload():(d.enable(),app.alert(a.msg));window.oauth_callback(a.user)}function k(){var g=b.get("value"),h=c.get("value");return g.trim()==""?f(b,"请输入您的邮箱地址"):~g.indexOf("@")?e=="login"&&h.trim()==""?f(c,"请输入密码"):(d.disable(),e=="reset"?((new Request.JSON({url:"/password/reset/email/",data:{email:g},onSuccess:function(b){a("auth_form").hide(),a("reset_msg").set("html","<p>重置密码的链接已被发送到你的邮箱"+(b.data.link?\'，请 <a target="_blank" class="red-link" href="http://\'+b.data.link+\'">点击查收邮件</a>以重置密码。\':"")+"</p>").show()},onFailure:function(a){d.enable(),app.error(JSON.parse(a.response||"{}").error||app.COMMON_ERRMSG)}})).post(),!1):(Browser.ie&&Browser.version<9?i.post({email:g,password:h}):(j.onFailure=function(){i.post({email:g,password:h}),d.removeClass("disabled")},j.post({email:g,password:h})),!1)):f(b,"邮箱格式不正确")}var b,c,d,e="login";window.oauth_callback=function(a){"string"==typeof a&&(a=JSON.parse(a)),app.req.user=a,app.hideSheet(function(){if(app.$login_callback){var a=app.$login_callback;a.reload?location.reload():a.redraw&&app.redraw(),delete app.$login_callback,a()}else window.location=app.page.$url})},$$("a.login-button").addEvent("click",function(a){a.stop();var b=window.open(this.get("href"),"binding_win","status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=500,left=50,top=40");window.focus&&b.focus()});var i=new Request.JSON({url:"/auth/",onSuccess:h,onFailure:function(a){d.removeClass("disabled")}}),j=new Request.JSON({withCredentials:!0,url:"https://"+app.host+"/auth/",onSuccess:h});(function(){b=a("login_email"),c=a("login_password"),new FancyInput(b),new FancyInput(c),c.addEvent("keyup",function(a){return a.code===13&&k(),!1}),d=new Button("login_btn",{click:k,disabledTitle:"登录..."}),a("sheet").store("onShow",function(){try{a("login_email").focus()}catch(b){}}),$$("input").addEvent("blur",function(a){g(a.target)});var f=a("reset_password"),h=a("back_to_login"),i=c.getParent("div.input");f.addEvent("click",function(){i.store("normal_height",i.getStyle("height")),i.setStyle("overflow","hidden").tween("height",0),i.getFirst().fade("out"),f.hide(),h.show(),e="reset",d.setTitle("重置")}),h.addEvent("click",function(){i.tween("height",0,i.retrieve("normal_height")),i.getFirst().fade("in"),f.show(),h.hide(),e="login",d.setTitle("登录")})})()})(document.id)</script>')
        }
        return buf.join("")
    }
})(app);