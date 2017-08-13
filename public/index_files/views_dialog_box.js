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
    __t["dialog_box/alert"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp, msgs = locals.text.split("$$"), text = msgs[0], extraHeader = null, extraContent = null;
            msgs.length >= 3 && (extraHeader = msgs[1], extraContent = msgs[2]), buf.push("<div"), buf.push(attrs({"class": "dialog-overlay alert"})), buf.push("></div><div"), buf.push(attrs({
                id: "dialog_alert",
                "data-name": "alert",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">" + escape((interp = locals.title || "提示") == null ? "" : interp) + "</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({"class": "info-text"})), buf.push("><i"), buf.push(attrs({"class": "icon-" + (locals.type || "caution") + ""})), buf.push("></i>");
            var __val__ = text;
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({"class": "info-extra"})), buf.push(">");
            if (extraHeader) {
                buf.push("<div"), buf.push(attrs({"class": "header"})), buf.push(">");
                var __val__ = extraHeader;
                buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</div>")
            }
            if (extraContent) {
                buf.push("<div"), buf.push(attrs({"class": "content"})), buf.push(">");
                var __val__ = extraContent;
                buf.push(escape(null == __val__ ? "" : __val__)), buf.push("</div>")
            }
            buf.push("</div></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push(">"), extraHeader && (buf.push("<div"), buf.push(attrs({"class": "contact-us"})), buf.push(">如有问题？请<a"), buf.push(attrs({
                target: "_blank",
                href: "/about/contact/",
                "class": "brown-link"
            })), buf.push(">联系我们</a></div>")), buf.push("<div"), buf.push(attrs({"class": "buttons"})), buf.push(">"), locals.cancelButton && (buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "cancel btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a>")), buf.push("<a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> " + escape((interp = locals.action || "确定") == null ? "" : interp) + "</span></a></div></div>"), locals.closeButton && (buf.push("<div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div>")), buf.push('</div><script>(function(){var a=document.id("dialog_alert"),b=a.getElements(".box-bottom .btn, .close-btn");b.addEvent("click",function(b){var c=!!this.hasClass("action");a.fireEvent("confirm",window.captchaObj&&captchaObj.getValidate()||c),app.hideDialogBox("alert"),b.stop()})})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/chrome_addon"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "chrome_addon_download_tip",
                style: "width: 720px; margin-left: -360px;",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">安装花瓣扩展小窍门</div><div"), buf.push(attrs({"class": "box-inner clearfix"})), buf.push("><div"), buf.push(attrs({"class": "step step1"})), buf.push("><div"), buf.push(attrs({"class": "title"})), buf.push(">下载完成，打开下载文件夹</div><img"), buf.push(attrs({
                src: "/img/chrome_notice_step_1.png",
                "data-baiduimageplus-ignore": 1
            })), buf.push("/></div><div"), buf.push(attrs({"class": "step step2"})), buf.push("><div"), buf.push(attrs({"class": "title"})), buf.push(">打开浏览器扩展程序页面</div><img"), buf.push(attrs({
                src: "/img/chrome_notice_step_2.png",
                "data-baiduimageplus-ignore": 1
            })), buf.push("/></div><div"), buf.push(attrs({"class": "step step3"})), buf.push("><div"), buf.push(attrs({
                style: "width: 157px",
                "class": "title"
            })), buf.push(">把文件拖动到管理页面</div><img"), buf.push(attrs({
                src: "/img/chrome_notice_step_3.png",
                "data-baiduimageplus-ignore": 1
            })), buf.push("/></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div></div>")
        }
        return buf.join("")
    }, __t["dialog_box/create_board"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "CreateBoard",
                style: "z-index: 99999",
                "class": "dialog-box " + (typeof className == "undefined" ? "" : " " + className)
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">新建画板</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><form"), buf.push(attrs({
                action: "",
                "class": "Form StaticForm nm"
            })), buf.push("><div"), buf.push(attrs({
                id: "switcher",
                style: "display: none;",
                "class": "switcher"
            })), buf.push("><label"), buf.push(attrs({"class": "label"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "creation",
                value: "true"
            })), buf.push("/>原创画板</label><label"), buf.push(attrs({"class": "label"})), buf.push("><input"), buf.push(attrs({
                type: "radio",
                name: "creation",
                value: "false",
                checked: !0
            })), buf.push("/>普通画板</label></div><ul><li"), buf.push(attrs({"class": "nbt"})), buf.push("><input"), buf.push(attrs({
                id: "id_board_title",
                type: "text",
                name: "title",
                value: "",
                placeholder: "画板标题，不能超过 32 个字符",
                "class": "clear-input"
            })), buf.push("/><span"), buf.push(attrs({"class": "fff"})), buf.push("></span></li><li><input"), buf.push(attrs({
                id: "id_category",
                type: "hidden",
                name: "category",
                value: ""
            })), buf.push("/>");
            var __val__ = emerge("base/category_picker");
            buf.push(null == __val__ ? "" : __val__), buf.push("</li></ul><div"), buf.push(attrs({
                id: "info",
                style: "display: none;",
                "class": "common-message info"
            })), buf.push(">原创画板只能上传原创作品，不能收集转采的采集</div></form></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push("><div"), buf.push(attrs({"class": "buttons"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "reject btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action Submit btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 创建画板</span></a></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div></div><script>(function(){var a=$("CreateBoard");if(a.retrieve("initialized"))return;var b=document.id("CreateBoard"),c=$("id_board_title"),d=a.getElement(".CategoryPicker"),e=new CategoryPicker(d),f=$("switcher"),g=$("info");b.getElement(".box-bottom .buttons .reject").addEvent("click",function(){app.hideDialogBox("create_board")}),b.getElements("input[type=radio]").addEvent("change",function(a){var b=a.target,c=b.get("value").trim();"true"===c?g.show():g.hide()}),new Button(a.getElement(".Submit"),{click:function(){var a=c.get("value").trim();if(a=="")return app.showTip(c,"请输入名称",{width:150});if(a.length>32)return app.showTip(c,"画板名称不能超过 32 个字符",{width:150});var d=e.getSelected();if(!d)return app.showTip(e.element,"请选择分类",{width:150});this.disable();var f=b.getElement("input[type=radio]:checked").get("value").trim();return(new Request.JSON({url:"/boards/",data:{title:a,category:d,creation:f},onSuccess:function(a){a.err?app.error(a.msg):app.page.$userTask&&app.page.$userTask.isShowing?(app.hideDialog(),app.page.$userTask.resetOverlay(),app.page.$userTask.showModule("step1-5")):window.location="/boards/"+a.board.board_id+"/"},onFailure:function(){app.error(app.COMMON_ERRMSG)},onComplete:function(){this.enable()}.bind(this)})).post(),!1}}),e.addEvent("select",function(){app.hideTip(e.element)}),a.getElements("input").addEvent("blur",function(a){app.hideTip(a.target)}),(new Request.JSON({url:"/muse/me/status/",onSuccess:function(a){if(a.hasOwnProperty("err"))return app.alert(a.msg);if(!a.isMuseUser)return;f.show(),g.show(),f.getElement("input").set("checked","checked")},onError:function(a){console.error(a)}})).get(),a.store("initialized",!0)})(),function(){var a=document.id("CreateBoard");a&&a.getElement(".Form").addEvent("submit",function(){return a.getElement(".Submit").click(),!1})}()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/create_pin"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "create_pin",
                "data-name": "upload",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">" + escape((interp = locals.title || "新采集") == null ? "" : interp) + "</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push(">");
            var __val__ = emerge("base/pin_create", locals);
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div><script>(function(){var a=document.id("create_pin"),b=a.getElement(".preview .description"),c=a.getElement(".boardlist"),d=a.getElement(".action"),e=a.getElement(".cancel"),f=a.getElements(".shares .share"),g=a.getElement(".taginput");d.addEvent("click",function(){var a=c.get("data-id");if(!a)return app.alert("请选择或者创建一个画板");var d=[];g.value.length&&(d=g.value.split(","));var e={board_id:a,text:b.value,tags:d,check:!0,file_id:"' + escape((interp = file_id) == null ? "" : interp) + '",via:1},h=0;f.each(function(a){if(!a.hasClass("active"))return;var b=a.get("data-key"),c=a.get("data-flag");e[b]=!0,h|=c;try{ga("send","event","SocialShare",b+":{api}","PinDialog:"+app.page.pin.source)}catch(d){}}),app.req.user.status.share=e.share_button=h,app.importTagsAndRefresh(d,function(){var a=(new Request.JSON({url:"/pins/",data:e,onSuccess:function(b){if(b.err){app.alert(b.msg||app.COMMON_ERRMSG),app.feedback(Object.merge(e,b));return}if(b.warning==100){app.confirm(\'你已经在画板<a target="_blank" href="/boards/\'+b.pin.board.board_id+\'/"><em>\'+b.pin.board.title+"</em></a>中采集过这张图片，是否继续？",function(b){if(!b)return;delete a.options.data.check,a.post()});return}_czc.push(["_trackEvent","tag","added",e.tags.length]),app.hideDialogBox("create_pin"),app.$pin=b.pin,app.showDialogBox("pin_success",!0)},onFailure:function(a){app.feedback(Object.merge(e,{err:a.status}))}})).post()})}),e.addEvent("click",function(){app.hideDialogBox("create_pin"),app.showDialogBox("upload",!0)})})()</script></div>')
        }
        return buf.join("")
    }, __t["dialog_box/dm"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({id: "dm_box"})), buf.push("><div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({"class": "dialog-box list-view"})), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">私信<div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div></div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({"class": "conversation-list"})), buf.push("></div><div"), buf.push(attrs({"class": "bottom"})), buf.push("></div><div"), buf.push(attrs({"class": "empty hidden"})), buf.push("><h2>现在你可以发送私信啦！</h2><div"), buf.push(attrs({"class": "sub"})), buf.push(">要发送私信，请到该用户主页，点击私信按钮</div><img"), buf.push(attrs({
                src: "/img/send_msg_intr.jpg",
                "data-baiduimageplus-ignore": 1
            })), buf.push("/></div></div></div><div"), buf.push(attrs({
                style: "display:none",
                "class": "dialog-box dialog-view"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push("><a"), buf.push(attrs({"class": "brown-link back"})), buf.push(">私信</a><span"), buf.push(attrs({"class": "dialog-only-text"})), buf.push(">私信给</span><span"), buf.push(attrs({"class": "symbol"})), buf.push(">»</span><span"), buf.push(attrs({"class": "with-user-name"})), buf.push(">呵呵</span><div"), buf.push(attrs({"class": "action"})), buf.push("><div"), buf.push(attrs({"class": "open"})), buf.push("></div><ul><li"), buf.push(attrs({"class": "block"})), buf.push(">屏蔽此人</li></ul></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div></div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({"class": "messages"})), buf.push("></div><div"), buf.push(attrs({"class": "loading"})), buf.push("></div><div"), buf.push(attrs({"class": "send-box clearfix"})), buf.push("><textarea"), buf.push(attrs({"class": "clear-input"})), buf.push("></textarea><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "send disabled btn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push('> 发送私信</span></a></div></div></div></div><script>(function(){var a=new Class({options:{interval:3e4,listLimit:20},initialize:function(a){this.nowOnDialog=null;var b=this,a=this.mainEl=$(a);this.listView=a.getElement(".dialog-box.list-view"),this.listEl=this.listView.getElement(".conversation-list"),this.dialogView=a.getElement(".dialog-box.dialog-view"),this.dialogEl=this.dialogView.getElement(".messages"),this.indicator=document.getElements("#nav_user .dm-nav .num"),this.listLoadingEl=new Element("div.loding-more"),[this.dialogEl,this.listEl].each(function(a){stopWindowScroll(a);var b=a.getParent(".box-inner");a.addEvent("scroll",function(a){this.getScroll().y!=0?b.addClass("scrolled"):b.removeClass("scrolled")})}),a.addEvent("click:relay(.dialog-overlay, .close-btn)",function(a){b.hide(),a.stop()}),a.addEvent("click:relay(.action .open)",function(a){b.mainEl.getElements(".action").removeClass("active"),this.getParent(".action").addClass("active")}),a.addEvent("click:relay(.conversation-list .conversation)",function(a){if(a.target.getParent(".action")||a.target.getParent(".avt"))return;b.showDialog({username:this.get("data-with-user-name"),user_id:this.get("data-with-user-id")}),this.hasClass("unread")&&(this.removeClass("unread"),b.decreaseIndicator())}),a.addEvent("click",function(a){if(a.target.match(".action .open"))return;b.mainEl.getElements(".action").removeClass("active")}),this.dialogView.getElement(".box-title .back").addEvent("click",function(){if(b.nowOnDialog&&b.nowOnDialog.modified){var a=b.nowOnDialog.user_id;return b.reposition(a)}b.showList()}),a.addEvent("click:relay(.action .block)",function(){var a=this.getParent(".conversation"),c=null;if(a)c=a.get("data-with-user-id");else{if(!b.nowOnDialog)return;c=b.nowOnDialog.user_id}app.confirm("确定屏蔽此人？屏蔽后对方无法再向你发送私信。你可以在帐号设置页面中解除对他的屏蔽。",function(d){if(!d)return;(new Request.JSON({url:"/dm/block/",data:{user_id:c},onSuccess:function(d){if(d.err)return app.error(app.COMMON_ERRMSG);a?a.fade("out").get("tween").chain(function(){a.dispose()}):b.nowOnDialog&&(b.removeConversation(c),b.showList())},onFailure:function(){app.error(app.COMMON_ERRMSG)}})).post()})}),a.addEvent("click:relay(.report)",function(){return window.report_type="dm",window.report_id=this.getParent(".message").get("data-dm-id"),app.showDialog("report"),!1});var c=a.getElement(".send-box"),d=this.textarea=c.getElement("textarea"),e=this.sendButton=c.getElement(".send");d.addEvents({keyup:function(){this.value.clean()?e.removeClass("disabled"):e.addClass("disabled")},keydown:function(a){if(a.key=="enter"&&(a.control||a.meta))return e.fireEvent("click"),!1}}),e.addEvent("click",function(){if(!d.value.clean())return;var a=d.value;d.value="",b.insertConversation({text:a,created_at:new Date/1e3}),b.dialogEl.scrollTo(0,b.dialogEl.scrollHeight),d.focus();var c=b.nowOnDialog.user_id;(new Request.JSON({url:"/dm/send/",data:{to_user_id:c,text:a},onSuccess:function(a){if(a.err)return app.error(a.msg||app.COMMON_ERRMSG);b.updateConversation(c,a)},onFailure:function(){app.error(app.COMMON_ERRMSG)}})).post(),b.nowOnDialog.modified=!0}),this.listEl.addEvent("scroll",function(a){this.getSize().y+this.getScroll().y>=this.scrollHeight&&b.loadList()}),Asset.image("/img/msg_loading.gif"),this.updateIndicator(app.req.unread_dm||0)},openFreshList:function(){this.showList(),this.refreshList(),this.fetch()},show:function(){this.isShowing=!0,this.mainEl.show()},hide:function(){this.isShowing=!1,this.mainEl.hide()},showList:function(){this.show(),this.listView.show(),this.dialogView.hide()},showDialog:function(a,b){this.show(),this.listView.hide(),this.nowOnDialog=a,this.dialogView.getElement(".with-user-name").innerHTML=a.username,this.dialogView.show(),this.refreshDialog();if(a.user_id=="system"){this.dialogView.addClass("system-dm");try{_czc.push(["_trackEvent","message","expose","",1])}catch(c){}}else this.dialogView.removeClass("system-dm"),this.textarea.focus();b?this.mainEl.addClass("dialog-only"):this.mainEl.removeClass("dialog-only")},showEmptyList:function(){this.listEl.getNext(".empty").clone().inject(this.listEl).removeClass("hidden")},refreshList:function(){var a=this;this.listEl.empty(),this.showLoading(this.listEl,300),(new Request.JSON({url:"/dm/",data:{limit:a.options.listLimit},noCache:!0,onSuccess:function(b){a.hideLoading(a.listEl),b.conversations&&b.conversations.length?(b.conversations.each(function(b){var c=app.renderSync("base/dm_list_item",b),d=Elements.from(c).inject(a.listEl)}),b.conversations.length<a.options.listLimit&&a.listNoMore()):a.showEmptyList()}})).get()},loadList:function(a){if(this.listloading||this.listReachTheBottom)return;var b=this,a=this.listEl.getLast(".conversation").get("data-updated-at");this.showListLoadingMore(),this.listloading=!0,(new Request.JSON({url:"/dm/",data:{max:a,limit:b.options.listLimit},noCache:!0,onSuccess:function(a){b.hideListLoadingMore(),b.listloading=!1,a.conversations&&a.conversations.length&&a.conversations.each(function(a){var c=app.renderSync("base/dm_list_item",a),d=Elements.from(c).inject(b.listEl)}),(!a.conversations||a.conversations.length<b.options.listLimit)&&b.listNoMore()}})).get()},showListLoadingMore:function(){this.listLoadingEl.inject(this.listEl)},hideListLoadingMore:function(){this.listLoadingEl.dispose()},listNoMore:function(){this.listReachTheBottom=!0},refreshDialog:function(){var a=this.dialogEl,b=this.textarea,c=this.sendButton,d=this,e="/dm/messages/"+this.nowOnDialog.user_id+"/";a.empty(),this.showLoading(a,300),b.value="",c.addClass("disabled"),this.nowOnDialog.user_id=="system"&&(this.dialogEl.getNext().show(),e="/system_dm/"),(new Request.JSON({url:e,noCache:!0,onSuccess:function(c){d.hideLoading(a);var e=d.insertConversations(c.messages||[]);c.blocked=="with_user blocked user"?((new Element("div.error-alert",{html:"<i></i>你已被对方屏蔽，不能发送私信"})).inject(a),b.set("disabled","disabled")):c.blocked=="user blocked with_user"?((new Element("div.error-alert",{html:\'<i></i>你已屏蔽此用户，可以在<a href="/settings/#set_blocked_conversations">帐号设置</a>中解除对他的屏蔽\'})).inject(a),b.set("disabled","disabled")):c.blocked=="user is banned"?((new Element("div.error-alert",{html:"<i></i>你的帐号已被禁止"})).inject(a),b.set("disabled","disabled")):c.blocked=="with_user is banned"?((new Element("div.error-alert",{html:"<i></i>此用户已被禁止"})).inject(a),b.set("disabled","disabled")):b.erase("disabled");var f=new Fx.Scroll(d.dialogEl,{duration:500,offset:{x:-20,y:-10},onComplete:function(){a.getNext().hide()}});e?window.setTimeout(function(){f.toElement(e)},1e3):a.scrollTo(0,a.scrollHeight)}})).get()},showLoading:function(a,b){b||(b=0),this.loadingTimer=setTimeout(function(){a.addClass("dm-loading")},b)},hideLoading:function(a){this.loadingTimer&&clearTimeout(this.loadingTimer),a.removeClass("dm-loading")},fetch:function(){if(this.fetching)return;this.fetching=!0,(new Request.JSON({url:"/dm/unread/",noCache:!0,onSuccess:function(a){if(a.err)return;this.updateIndicator(a)}.bind(this),onComplete:function(){this.fetching=!1}.bind(this)})).get()},updateIndicator:function(a){this.indicator.set("text",a),a<=0?this.indicator.addClass("hidden"):this.indicator.removeClass("hidden")},decreaseIndicator:function(a){this.updateIndicator(--app.req.unread_dm)},updateConversation:function(a,b){var c=this.listEl.getElement(\'[data-with-user-id="\'+a+\'"]\');c.getElement(".content").set("text",b.text),c.getElement(".time").set({"data-ts":b.created_at,text:(new Date(b.created_at.toInt()*1e3)).timeAgo()})},removeConversation:function(a){return this.listEl.getElement(\'[data-with-user-id="\'+a+\'"]\').dispose()},reposition:function(a){var b=this.removeConversation(a);b.inject(this.listEl,"top"),this.showList()},_isShowTS:function(a,b){return b?a-b>=1800:!0},insertConversation:function(a){var b=this.dialogEl.getLast(".message"),c=app.renderSync("base/dm_dialog_item",{from_user:app.req.user,type:"sent",text:a.text,created_at:a.created_at,showTS:this._isShowTS(a.created_at,b&&b.get("data-ts"))});Elements.from(c).inject(this.dialogEl)},insertConversations:function(a){var b;for(var c=0;c<a.length;c++){if(!a[c])continue;var d=app.renderSync("base/dm_dialog_item",Object.merge(a[c],{showTS:this._isShowTS(a[c].created_at,a[c-1]&&a[c-1].created_at)}));b=Elements.from(d)[0].inject(this.dialogEl)}return b}});app.req.user&&(app.page.dmController=new a("dm_box"))})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/import_old_tags"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "import-tags-dialog",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">导入旧版标签</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({"class": "description"})), buf.push(">我们在您的已有采集中发现了您可能需要的标签，您可以选择合适的标签导入。<br"), buf.push(attrs({})), buf.push("/>本操作为一次性操作，一旦完成则无法再次选择导入。</div></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push("><div"), buf.push(attrs({"class": "actions"})), buf.push("><a"), buf.push(attrs({"class": "act brown-link sel-all"})), buf.push(">全选</a><a"), buf.push(attrs({"class": "act brown-link unsel-all"})), buf.push(">取消选择</a></div><div"), buf.push(attrs({"class": "buttons"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "cancel btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 不导入</span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 导入</span></a></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div></div><script>(function(){function g(){b.getElements(".item").addClass("selected")}function h(){b.getElements(".item").removeClass("selected")}function i(){app.hideDialogBox("import_old_tags")}function j(){app.confirm("真的要取消导入？",function(a){a&&app.keepTags([],i)})}function k(a){var c=app.renderSync("base/tag_imports",{tags:a});Elements.from(c).inject(b)}function l(){var c=b.getElements(".item").length,d=b.getElements(".item.selected"),e=d.map(function(a){return a.get("data-tag")});if(!e.length)return app.alert("请至少选择 1 个标签");app.keepTags(e,function(){var b=d.length,c=\'<a href="/\'+app.req.user.urlname+\'/tags/">标签</a>\',f=b+" 个标签导入成功，您可以在个人主页的 "+c+" 选项卡查看。";app.alert(f),i();var g=new Date/1e3;Cookie.write("_imp_tag_t",parseInt(g)),a.fireEvent("confirm",{tags:e})})}var a=document.id("import-tags-dialog"),b=a.getElement(".box-inner"),c=a.getElement(".act.sel-all"),d=a.getElement(".act.unsel-all"),e=a.getElement(".action"),f=a.getElement(".cancel");(function(){var b=app.req.user;(new Request.JSON({url:"/"+b.urlname+"/tags/",onSuccess:function(a){if(a.err)return app.error(a.msg);k(a.tags)},onFailure:function(a){app.error(a.responseText||app.COMMON_ERRMSG)}})).get()})(),c.addEvent("click",g),d.addEvent("click",h),f.addEvent("click",j),e.addEvent("click",l),b.addEvent("click:relay(.item)",function(){this.toggleClass("selected")})})(),function(){_czc.push(["_trackEvent","tag","import",1]);var a=function(){_czc.push(["_trackEvent","tag","import-abort",1])},b=document.id("import-tags-dialog");b.getElement(".close-btn").addEvent("click",a),b.getPrevious(".dialog-overlay").addEvent("click",a)}()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/limiter"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "dialog_limiter",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">提示</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({"class": "info-text"})), buf.push("><i"), buf.push(attrs({"class": "icon caution"})), buf.push("></i>" + escape((interp = text) == null ? "" : interp) + "</div><div"), buf.push(attrs({
                id: "limiter-captcha",
                "class": "captcha"
            })), buf.push("></div></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push("><div"), buf.push(attrs({"class": "buttons"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push('> 确定</span></a></div></div></div><script>(function(){function e(){if(!c||!c.sig)return app.alert("请先完成验证",function(){app.hideDialogBox("limiter")});(new Request({url:"/captcha/rater",data:{key:d,type:"limit",validate:c},onSuccess:function(){app.alert("验证成功，请继续完成后续操作"),app.hideDialogBox("limiter")},onFailure:function(a){app.error(a.response)}})).post()}var a=document.id("dialog_limiter"),b=a.getElement(".action"),c=null,d="' + escape((interp = key) == null ? "" : interp) + '";app.initCaptcha("limiter-captcha","other",function(a){c=a}),b.addEvent("click",e)})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/move_pins"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                "data-name": "move_pins",
                style: "width: 440px; margin-left: -220px;",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">移动至...</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push(">");
            var __val__ = emerge("base/board_list", {creationOnly: is_creation});
            buf.push(null == __val__ ? "" : __val__), buf.push("<a"), buf.push(attrs({
                style: "margin-top: 20px",
                href: "#",
                onclick: "return false;",
                "class": "go btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 批量移动</span></a></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div></div>")
        }
        return buf.join("")
    }, __t["dialog_box/muse_upload"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "image_upload",
                "data-name": "upload",
                "class": "muse dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">上传采集</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({
                style: "display: none;",
                "class": "board select"
            })), buf.push(">");
            var __val__ = emerge("base/board_list", {creationAll: !0, currentBoard: locals.current_board || "default"});
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({"class": "upload list"})), buf.push("><div"), buf.push(attrs({
                style: "display: none;",
                "class": "shadow"
            })), buf.push("></div><div"), buf.push(attrs({id: "muse-upload-list"})), buf.push("></div></div><div"), buf.push(attrs({"class": "upload-area"})), buf.push("><div"), buf.push(attrs({"class": "normal"})), buf.push("><label"), buf.push(attrs({"class": "title"})), buf.push(">拖拽图片到本区域上传</label><label"), buf.push(attrs({"class": "click-info"})), buf.push(">或者<a"), buf.push(attrs({
                href: "javascript:void(0);",
                "class": "brown-link"
            })), buf.push(">点击这里</a>上传</label><small"), buf.push(attrs({"class": "tips"})), buf.push(">每次最多上传 10 张，单张文件体积不超过 10 MB</small></div><div"), buf.push(attrs({
                style: "display: none;",
                "class": "uploaded"
            })), buf.push("><label"), buf.push(attrs({"class": "title"})), buf.push(">拖动文件到本窗口以上传，或者<a"), buf.push(attrs({
                href: "javascript:void(0);",
                "class": "brown-link"
            })), buf.push(">点击上传</a></label><div"), buf.push(attrs({
                id: "upload-text",
                "class": "upload text"
            })), buf.push("></div></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "draging"
            })), buf.push("><div"), buf.push(attrs({"class": "note"})), buf.push(">释放鼠标以上传</div></div><div"), buf.push(attrs({"class": "dropzone"})), buf.push("></div></div><div"), buf.push(attrs({"class": "uploading"})), buf.push("></div></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push("><div"), buf.push(attrs({"class": "buttons"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "reject btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action accept btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 上传</span></a></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div><div"), buf.push(attrs({
                id: "pin-preview-template",
                style: "display: none",
                "class": "dz-file-preview"
            })), buf.push("><div"), buf.push(attrs({"class": "pin-preview"})), buf.push("><div"), buf.push(attrs({"class": "dz-details preview"})), buf.push("><img"), buf.push(attrs({
                "data-dz-thumbnail": !0,
                "data-baiduimageplus-ignore": 1
            })), buf.push("/></div><div"), buf.push(attrs({"class": "content"})), buf.push("><textarea"), buf.push(attrs({
                placeholder: "填写作品的相关描述",
                "class": "description input"
            })), buf.push("></textarea></div><div"), buf.push(attrs({"class": "handler drag"})), buf.push("></div><div"), buf.push(attrs({
                "data-dz-remove": !0,
                "class": "handler remove"
            })), buf.push("></div><div"), buf.push(attrs({"class": "dz-progress"})), buf.push("><div"), buf.push(attrs({
                "data-dz-uploadprogress": !0,
                "class": "dz-progress-mark"
            })), buf.push(">上传中</div></div><div"), buf.push(attrs({"class": "dz-error-message"})), buf.push("><span"), buf.push(attrs({"data-dz-errormessage": !0})), buf.push('></span></div></div></div></div><script>(function(){function s(){r&&clearTimeout(r),r=setTimeout(function(){var a=window.getSize().y;l.set("styles",{"max-height":a/3})},300)}var a=document.id("image_upload"),b=a.getElement(".upload-area"),c=b.getElement(".normal"),d=b.getElement(".uploaded"),e=b.getElement(".draging"),f=a.getElement(".reject"),g=a.getElement("!~"),h=a.getElement(".dropzone"),i=a.getElement(".board.select"),j=a.getElement(".uploading"),k=document.id("muse-upload-list"),l=k.getParent(),m=a.getElement(".box-inner"),n=!1,o=app.req.user,p=10,q=new Request.JSON({onSuccess:function(a){if(a.hasOwnProperty("err"))return app.error(a.msg);var b=a.pin;a.warning&&100===a.warning?app.confirm(\'你已经在画板<a target="_blank" href="/boards/\'+b.board.board_id+\'/"><em>\'+b.board.title+"</em></a>中采集过这张图片，是否继续？",function(a){if(!a)return;delete q.options.data.check,q.post()}):(app.hideDialogBox("muse_upload"),app.showDialogBox("pin_success",{muse:!0}))},onError:function(a){app.error(a)},onComplete:function(){j.hide()}}),r;f.addEvent("click",function(){app.hideDialogBox("muse_upload")}),l.addEvent("scroll",function(){var a=l.getScroll().y,b=l.getElement(".shadow");2<a?(b.show(),b.set("styles",{top:a})):b.hide()}),window.addEvent("resize",s),s(),a.getElement(".accept").addEvent("click",function(){var b=$$(".upload.list .pin-preview"),c=a.getElement(".board-list").get("data-board-id");if(!b.length)return app.alert("请先上传采集");if(!c||!c.length)return app.alert("请选择画板");var d=b.map(function(a){var b=a.get("data-file-id"),c=a.getElement(".description").get("value").trim();return{file_id:b,text:c}}),e={};url="/muse/pins/",e.pins=d,e.board_id=c,j.show(),app.$board_id=Number(c),q.options.data=e,q.options.url=url,q.post()});var t=function(){function f(a){var e=a.getAcceptedFiles(),f=$("upload-text");e.length?(b.addClass("preview"),i.show(),f.show(),c.hide(),d.show()):(b.removeClass("preview"),i.hide(),f.hide(),c.show(),d.hide());var g=Math.min(p,e.length),h="已选择 "+g+" 张，还可以选择 "+(p-g)+" 张";$("upload-text").set("text",h)}function g(a,b){var c=a.previewTemplate;b.cancelUpload(a),c.remove()}function j(){var a=b.getElement(".dropzone");if(!a)return;a.addClass("fullscreen"),a.inject(m)}function l(){var a=m.getElement(".dropzone");a.removeClass("fullscreen"),a.inject(b)}Dropzone.prototype.enqueueFile=function(a){if(a.status===Dropzone.ADDED&&a.accepted===!0){a.status=Dropzone.QUEUED;if(this.options.autoProcessQueue)return setTimeout(function(a){return function(){return a.processQueue()}}(this),0)}else a.accepted=!1};var a=new Dropzone(h,{url:"/upload/",maxFilesize:10,maxFiles:p,previewsContainer:k,previewTemplate:document.id("pin-preview-template").get("html"),acceptedFiles:"image/*"});a.on("dragenter",function(){c.hide(),d.hide(),e.show();var f=a.getAcceptedFiles();f.length&&j(),b.addClass("active")}),a.on("dragover",function(){c.hide(),d.hide(),e.show(),b.addClass("active")}),a.on("dragleave",function(){var f=a.getAcceptedFiles();f.length?(l(),d.show()):c.show(),e.hide(),b.removeClass("active")}),a.on("drop",function(){d.show(),e.hide(),b.removeClass("active");var c=a.getAcceptedFiles();c.length&&l()}),a.on("addedfile",function(b){var c=a.getAcceptedFiles();p<=c.length&&(app.alert("最多只能选择 "+p+" 张"),g(b,a))}),a.on("removedfile",function(b){f(a)}),a.on("canceled",function(){c.show()}),a.on("error",function(a,d){c.show(),e.hide(),b.removeClass("active"),app.error(d)}),a.on("success",function(b,c){var d=b.previewTemplate;d.getElement(".dz-progress").hide(),f(a);var e=c.id;d.set("data-file-id",e)}),m.addEventListener&&m.addEventListener("dragenter",function(){var b=a.getAcceptedFiles();b.length&&j()})};Asset.javascript("/js/lib/dropzone.js",{onLoad:t})})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/old_upload"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "image_upload",
                "data-name": "upload",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">上传采集</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><div"), buf.push(attrs({"class": "upload-area"})), buf.push("><div"), buf.push(attrs({"class": "normal"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "upload-btn btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 上传采集</span></a><div"), buf.push(attrs({
                style: "margin-top: 25px",
                "class": "note"
            })), buf.push(">也可以拖拽图片到该区域，完成上传</div><div"), buf.push(attrs({
                style: "margin: 10px 0 25px",
                "class": "sub"
            })), buf.push(">支持单张 10m 以内图片上传</div><div"), buf.push(attrs({
                style: "margin-top: 20px; font-size: 12px",
                "class": "sub"
            })), buf.push(">[提示]请严格遵守保密法律法规，严禁在互联网上存储、处理、传输、发布涉密信息</div></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "draging"
            })), buf.push("><div"), buf.push(attrs({"class": "note"})), buf.push(">释放鼠标以上传</div></div><div"), buf.push(attrs({
                style: "display: none",
                "class": "uploading"
            })), buf.push("><div"), buf.push(attrs({"class": "animate"})), buf.push(">上传中...</div></div><div"), buf.push(attrs({"class": "dropzone"})), buf.push("></div></div><div"), buf.push(attrs({"class": "links"})), buf.push("><div"), buf.push(attrs({"class": "part"})), buf.push("><a"), buf.push(attrs({
                target: "_blank",
                href: "/about/goodies",
                "class": "brown-link"
            })), buf.push(">安装采集工具</a><div"), buf.push(attrs({"class": "description"})), buf.push(">一键采集互联网上的任意图片</div></div><div"), buf.push(attrs({"class": "part"})), buf.push("><a"), buf.push(attrs({
                href: "/all/",
                "class": "brown-link"
            })), buf.push(">在站内逛逛</a><div"), buf.push(attrs({"class": "description"})), buf.push(">点击采集按钮，一键转采喜欢的图片</div></div></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div></div><script>(function(){var a=document.id("image_upload"),b=a.getElement(".upload-btn"),c=a.getElement(".upload-area"),d=c.getElement(".normal"),e=d.getElement(".note"),f=c.getElement(".uploading"),g=c.getElement(".draging"),h=a.getElement(".close-btn"),i=a.getElement("!~"),j=a.getElement(".dropzone"),k=!1,l=function(a){var b=app.imgURL(a,"fw192");app.hideDialogBox("old_upload");var c={media:b,w:a.width,h:a.height,file_id:a.id,description:"",url:"",title:"上传采集",req:app.req,name:a.name,cancel:!0};app.req.user&&app.page.board&&app.req.user.user_id===app.page.board.user_id&&(c.current_board=app.page.board),app.showDialogBox("create_pin",c)},m=function(a){a.stop();if(f.getStyle("display")=="none")return app.hideDialogBox("old_upload");app.confirm("正在上传采集，要停止上传吗？",function(a){if(!a)return;k=!0,app.hideDialogBox("old_upload")})};i.addEvent("click",m),h.addEvent("click",m);if(Browser.ie&&Browser.version<10){e.hide();var n={start:function(){d.hide(),f.show(),k=!1},failed:function(a){d.show(),f.hide(),app.error("上传出错: "+(a.msg||app.COMMON_ERRMSG))},complete:function(a){if(k)return;l(a)}};(new Uploadr(b)).addEvents(n),j.hide()}else{var o=function(){var a=new Dropzone(j,{url:"/upload/",maxFilesize:10,maxFiles:1,acceptedFiles:"image/*"});a.on("dragenter",function(){d.hide(),g.show(),c.addClass("active")}),a.on("dragover",function(){d.hide(),g.show(),c.addClass("active")}),a.on("dragleave",function(){d.show(),g.hide(),c.removeClass("active")}),a.on("dragend",function(){d.show(),g.hide(),c.removeClass("active")}),a.on("sending",function(){d.hide(),f.show(),g.hide(),c.removeClass("active"),k=!1}),a.on("canceled",function(){d.show(),f.hide()}),a.on("error",function(b,e){d.show(),g.hide(),c.removeClass("active"),f.hide(),j.getElements(".dz-preview").destroy(),a.files.pop(),app.error(e)}),a.on("success",function(b,c){if(k)return;if(c.err)d.show(),f.hide(),j.getElements(".dz-preview").destroy(),a.files.pop(),app.error("上传出错: "+(c.msg||app.COMMON_ERRMSG));else{var e=["jpg","png","jpeg","gif","JPG","PNG","JPEG","GIF"],g=b.name.split(".");c.name=(g.length>1&&e.indexOf(g[g.length-1])!==-1?g.pop():g)&&g.join("."),l(c)}})};Asset.javascript("/js/lib/dropzone.js",{onLoad:o})}})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/pin_success"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "pin_success",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">采集成功</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push(">");
            var isMuse = locals.muse;
            if (isMuse) {
                var __val__ = emerge("base/muse_pin_success");
                buf.push(null == __val__ ? "" : __val__)
            } else {
                var __val__ = emerge("base/pin_success");
                buf.push(null == __val__ ? "" : __val__)
            }
            buf.push("</div><div"), buf.push(attrs({"class": "close-btn"})), buf.push("><i></i></div></div>")
        }
        return buf.join("")
    }, __t["dialog_box/repin"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "repin_dialog",
                "data-name": "repin",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">转采</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push(">");
            var __val__ = emerge("base/pin_create");
            buf.push(null == __val__ ? "" : __val__), buf.push("</div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div><script>(function(){var a=document.id("repin_dialog"),b=a.getElement(".preview .description"),c=a.getElement(".action"),d=a.getElements(".shares .share"),e="' + escape((interp = locals.pin_id) == null ? "" : interp) + '",f=a.getElement(".common-message.info"),g=a.getElement(".preview img"),h=a.getElement(".boardlist"),i=a.getElement(".taginput");a.addEvent("click:relay(.box-warning .cancel)",function(){app.hideDialogBox("repin")}),(new Request.JSON({url:"/pins/"+e+"/repin/?check=true",onSuccess:function(a){if(a.err){app.hideDialogBox("repin"),app.error(a.msg||app.COMMON_ERRMSG);return}a.warning&&a.warning==100&&(f.show().innerHTML=\'这张图片已经在你的<a href="/boards/{board_id}/">{board_title}</a>画板里。\'.replace("{board_id}",a.exist_pin.board.board_id).replace("{board_title}",a.exist_pin.board.title)),g.src=app.imgURL(a.pin.file,"fw236"),b.value=a.pin.raw_text,c.removeClass("disabled")}})).get(),c.addClass("disabled"),c.addEvent("click",function(){if(this.hasClass("disabled"))return;var a=h.get("data-id");if(!a)return app.alert("请选择或者创建一个画板");var f=[];i.value.length&&(f=i.value.split(","));var g={board_id:a,text:b.value,tags:f,via:e},j=0;d.each(function(a){if(!a.hasClass("active"))return;var b=a.get("data-key"),c=a.get("data-flag");g[b]=!0,j|=c;try{ga("send","event","SocialShare",b+":{api}","PinDialog:"+app.page.pin.source)}catch(d){}}),app.req.user.status.share=g.share_button=j,app.importTagsAndRefresh(f,function(){c.addClass("disabled"),(new Request.JSON({url:"/pins/",data:g,onSuccess:function(a){if(a.err){app.alert(a.msg||app.COMMON_ERRMSG),app.feedback(Object.merge(g,a));return}_czc.push(["_trackEvent","tag","added",g.tags.length]),app.hideDialogBox("repin"),app.$pin=a.pin,app.showDialogBox("pin_success",!0)},onFailure:function(a){app.feedback(Object.merge(g,{err:a.status}))},onComplete:function(){c.removeClass("disabled")}})).post()})})})()</script></div>')
        }
        return buf.join("")
    }, __t["dialog_box/select_board"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "select-board",
                "class": "dialog-box select-board"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">添加已有画板</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push(">");
            var __val__ = emerge("base/board_list", {boardCreatable: !1, creationAll: !0});
            buf.push(null == __val__ ? "" : __val__), buf.push("<p"), buf.push(attrs({"class": "tip"})), buf.push(">选择你已有原创作品的画板，请不要选择非原创的作品</p></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push("><div"), buf.push(attrs({"class": "buttons"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "cancel btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 添加</span></a></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div></div><script>(function(){var a=document.id("select-board"),b=a.getElement(".board-list"),c=a.getElements(".box-bottom .btn");c.addEvent("click",function(c){var d=!!this.hasClass("action");if(d){var e=b.get("data-board-id");if(!e.length)return app.alert("请选择已有原创作品的画板");var f=app.req.user.boards||[],g=f.filter(function(a){return a.board_id===Number(e)});a.fireEvent("confirm",g[0])}app.hideDialogBox("select_board"),c.stop()})})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/tag_dialog"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                id: "tag-dialog",
                "class": "dialog-box select-board"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">添加标签</div><div"), buf.push(attrs({"class": "box-inner"})), buf.push("><input"), buf.push(attrs({
                id: "tag-dialog-input",
                "class": "clear-input"
            })), buf.push("/></div><div"), buf.push(attrs({"class": "box-bottom"})), buf.push("><div"), buf.push(attrs({"class": "buttons"})), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "cancel btn btn18"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 取消</span></a><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "action btn btn18 rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 添加</span></a></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div></div><script>(function(){var a=document.id("tag-dialog"),b=a.getElements(".box-bottom .btn"),c=new TagInput(document.id("tag-dialog-input"));b.addEvent("click",function(){app.hideDialogBox("tag_dialog");var b=!!this.hasClass("action");if(b){var d=c.getValue();a.fireEvent("confirm",{tags:d}),c.clear(),_czc.push(["_trackEvent","batch-tagging","tagcount",d.length])}})})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/unbind"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push("<div"), buf.push(attrs({"class": "dialog-overlay"})), buf.push("></div><div"), buf.push(attrs({
                style: "width: 600px; margin-left: -360px;",
                "class": "dialog-box"
            })), buf.push("><div"), buf.push(attrs({"class": "box-title"})), buf.push(">解绑第三方帐号</div><div"), buf.push(attrs({"class": "box-inner clearfix"})), buf.push("><div"), buf.push(attrs({id: "select"})), buf.push("><div"), buf.push(attrs({"class": "notice"})), buf.push(">为了您的帐号安全，在解绑第三方帐号前，您需要先验证登录邮箱或绑定手机号。</div><div"), buf.push(attrs({
                style: "margin-top:20px;",
                "class": "buttons"
            })), buf.push("><a"), buf.push(attrs({
                href: "#",
                onclick: "return false;",
                "class": "email_verify btn rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 邮箱验证</span></a><a"), buf.push(attrs({
                style: "margin-left: 20px;",
                href: "#",
                onclick: "return false;",
                "class": "tel_verify btn rbtn"
            })), buf.push("><span"), buf.push(attrs({"class": "text"})), buf.push("> 手机号验证</span></a></div></div></div><div"), buf.push(attrs({"class": "close-btn"})), buf.push('><i></i></div></div><script>(function(){var a=document.getElements(".setting-unit"),b=document.id("select");b.getElement("a.email_verify").addEvent("click",function(b){Settings.closeUnit(document.id("_set_bindings")),Settings.openUnit(a,document.id("_set_email")),app.hideDialogBox("unbind"),b.stop()}),b.getElement("a.tel_verify").addEvent("click",function(b){Settings.closeUnit(document.id("_set_bindings")),Settings.openUnit(a,document.id("_tel_binding")),app.hideDialogBox("unbind"),b.stop()})})()</script>')
        }
        return buf.join("")
    }, __t["dialog_box/upload"] = function (locals) {
        var buf = [];
        with (locals || {}) {
            var interp;
            buf.push('<script>(function(){var a=!0;app.req.user&&app.page.board&&app.req.user.user_id===app.page.board.user_id&&(a={current_board:app.page.board}),(new Request.JSON({url:"/muse/me/status/",onSuccess:function(b){if(b.hasOwnProperty("err"))return app.showDialogBox("old_upload",!0);b.isMuseUser?app.showDialogBox("muse_upload",a):app.showDialogBox("old_upload",!0)},onError:function(){app.showDialogBox("old_upload",!0)}})).get()})()</script>')
        }
        return buf.join("")
    }
})(app);