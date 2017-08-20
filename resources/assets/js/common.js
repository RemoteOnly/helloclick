(function () {
    let Validator = require('validatorjs');
    Validator.useLang('zh');

//region 窗体操作
// 显示注册
    $('.login-nav .register').click(function () {
        $('#login-register').show();
        $('#btn-register').click();
    });

// 显示登录
    $('.login-nav .login').click(function () {
        $('#login-register').show();
        $('.email-signup-back').click();
    });

// 注册
    $('#btn-register').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.email-signup, .signup-form').show();
    });

// 注册的返回登录
    $('.email-signup-back,.login-link').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.email-signup').children('div').hide();
        $('.login').show();
    });

// 忘记密码
    $('.reset-password').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.reset').show();
    });

// 忘记密码的返回登录
    $('.reset .back').click(function () {
        $('#login_frame').children('div').not('.close').hide();
        $('.login').show();
    });

// 关闭登录窗体
    $('.close').click(function () {
        $('.black-overlay').hide();
    });

// 登录后鼠标悬停个人头像
    $('#nav_user').hover(function () {
        $('.menu').show();
    }, function () {
        $('.menu').hide();
    });

    $('.menu-nav').hover(function () {
        $('.header-main-menu').show();
    }, function () {
        $('.header-main-menu').delay(10000).hide(0);
    });

    $('.header-main-menu').hover(function () {
        $(this).stop(true, true);
    }, function () {
        $(this).hide();
    });

//endregion

//region Ajax注册/登录
//注册
    $('#to-register').click(function () {
        let form = $(this).closest('form');
        // jq元素对象
        let fields = {
            name: form.find('[name="name"]'),
            email: form.find('[name="email"]'),
            password: form.find('[name="password"]'),
            password_confirmation: form.find('[name="password_confirmation"]')
        };
        // 数据
        let data = {
            name: fields.name.val().trim(),
            email: fields.email.val().trim(),
            password: fields.password.val().trim(),
            password_confirmation: fields.password_confirmation.val().trim()
        };
        // 规则
        let rules = {
            name: 'required',
            email: 'required|email',
            password: 'required|min:6|max:10|confirmed'
        };

        let validator = new Validator(data, rules);
        validator.setAttributeNames({name: '用户名', email: '邮箱', password: '密码', password_confirmation: '确认密码'});

        if (validator.fails()) {
            error_msg = showFormErrors(fields, validator.errors.errors);
            if (error_msg) {
                swal('', error_msg, 'error');
                return false;
            }
        }
        // 发送注册请求
        let url = $(this).closest('form').data('url');
        let _this = this;
        $(this).addClass('disabled');
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (result) {
                if (result.status === 1) {
                    // 清空所有定时器
                    clearInterval(window.thread_id);

                    $('span.email').text(data.email);
                    $('.signup-form').hide();
                    $('.signup-success').show();
                    // 重发定时器
                    activeResend(30);
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (xhr.status === 422) {
                    let errors = JSON.parse(xhr.responseText);
                    let error_msg = showFormErrors(fields, errors);
                    swal('', error_msg, 'error');
                } else {
                    swal('', '请求出错，请刷新重试', 'error');
                }
            },
            complete: function () {
                $(_this).removeClass('disabled');
            }
        });
    });

// 重发验证邮件
    $('.resend').click(function () {
        let url = $(this).data('url');
        let email = $('span.email').text();
        let _this = this;
        $(this).addClass('disabled');
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: {
                email: email
            },
            success: function (result) {
                if (result.status === 1) {
                    activeResend(30);
                    swal('', result.message, 'success');
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function () {
                swal('', '请求出错，请稍候重试', 'error');
            }
        })
    });

// 登录
    $('#to-login').click(function () {
        let form = $(this).closest('form');
        // jq元素对象
        let fields = {
            email: form.find('[name="email"]'),
            password: form.find('[name="password"]'),
        };
        // 数据
        let data = {
            email: fields.email.val().trim(),
            password: fields.password.val().trim()
        };
        // 规则
        let rules = {
            email: 'required|email',
            password: 'required'
        };

        let validator = new Validator(data, rules);
        validator.setAttributeNames({email: '邮箱', password: '密码'});

        if (validator.fails()) {
            error_msg = showFormErrors(fields, validator.errors.errors);
            if (error_msg) {
                swal('', error_msg, 'error');
                return false;
            }
        }
        // 发送登录请求
        let url = form.data('url');
        let _this = this;
        $(this).addClass('disabled');
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (result) {
                if (result.status === 1) {
                    swal('', result.message, 'success');
                    window.location.reload();
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                swal('', '请求出错，请刷新重试', 'error');
            },
            complete: function () {
                $(_this).removeClass('disabled');
            }
        });
    });

// 发送重置密码链接
    $('#to-reset-password').click(function () {
        let url = $(this).data('url');
        let email = $('.reset-form').find('[name="email"]').val();
        let data = {email: email};
        let rules = {email: 'required|email'};
        let validator = new Validator(data, rules);
        validator.setAttributeNames({email: '邮箱'});

        if (validator.fails()) {
            error_msg = validator.errors.first('email');
            if (error_msg) {
                swal('', error_msg, 'error');
                return false;
            }
        }

        $(this).addClass('disabled');
        let _this = this;
        $.ajax({
            url: url,
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (result) {
                if (result.status === 1) {
                    $('.black-overlay').hide();
                    swal('', result.message, 'success');
                } else {
                    swal('', result.message, 'error');
                }
            },
            error: function () {
                swal('', '请求失败，请刷新重试', 'error');
            },
            complete: function () {
                $(this).removeClass('disabled');
            }
        })
    });
//endregion

//region show 页面喜欢
    $('.like-btn.btn-with-icon.btn').click(function () {
        // 检查是否登录
        if (!checkLogin()) {
            return false;
        }

        let _this = this;
        let image_id = $('#current-image').data('image-id');
        $.ajax({
            url: '/favor',
            method: 'post',
            dataType: 'json',
            data: {
                image_id: image_id
            },
            success: function (data) {
                // 喜欢或者不喜欢
                if (data.status === 1) {
                    let count = $(_this).find('.num').text();
                    if (data.favor_status === 1) {
                        count++;
                    } else {
                        if (count < 1) {
                            count = 0
                        } else {
                            count--;
                        }
                    }
                    $(_this).find('.num').text(count);

                } else {
                    swal('', '请求出错，请刷新页面重试', 'warning');
                }
            },
            error: function (xhr, errStatus, errText) {
                if (xhr.status === 401) {
                    // 未登录
                    $('.login.btn.wbtn').click();
                    return false;
                }

                swal('', '请求出错，请刷新页面重试', 'error');
            }
        });
    });

// 回复
    $('.reply-button').click(function () {
        let at_user_id = $(this).data('at-user-id');
        let at_user_name = $(this).data('at-user-name');
        let content = $('#comment-content').val();
        content += '@' + at_user_name + ' ';
        $('#comment-content').val(content);
        $('#comment-content').data('at-user-id', at_user_id);
    });

// 添加评论和回复
    $('#add-comment').click(function () {
        // 检查是否登录
        if (!checkLogin()) {
            return false;
        }

        let at_user_id = $('#comment-content').data('at-user-id');
        let content = $('#comment-content').val();
        if (content.trim().length < 1) {
            swal('', '请输入内容', 'warning');
            return false;
        }
        let image_id = $(this).data('image-id');
        data = {
            content: content,
            image_id: image_id
        };

        if ($.isNumeric(at_user_id)) {
            data.at_user_id = at_user_id;
        }

        $.ajax({
            url: '/comments',
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (data) {
                if (data.status === 1) {
                    // 刷新页面
                    swal('', data.message, 'success');
                    window.location.reload();
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function (xhr, errStatus, errText) {
                if (xhr.status === 401) {
                    // 未登录
                    $('.login.btn.wbtn').click();
                    return false;
                }
                swal('请求失败，请稍候重试');
            }
        })
    });

// 删除评论或回复
    $('.delete').click(function () {
        if (!checkLogin()) {
            return false;
        }

        let _this = this;
        swal({
            title: '确认删除?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(function (isConfirm) {
            if (isConfirm === true) {
                deleteComment(_this);
            } else if (isConfirm === false) {
            } else {
                // Esc, close button or outside click
                // isConfirm is undefined
            }
        });
    });

    function deleteComment(obj) {
        let _this = obj;
        let comment_id = $(_this).data('comment-id');
        $.ajax({
            url: '/comments/' + comment_id,
            method: 'delete',
            dataType: 'json',
            success: function (data) {
                if (data.status === 1) {
                    swal({
                        title: '成功',
                        text: '删除成功',
                        timer: 1000
                    }).then(
                        function () {
                        },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                //console.log('I was closed by the timer')
                            }
                        }
                    );

                    $(_this).closest('.comment').remove();

                    let count = $('#comment-count').text();
                    if (count < 1) {
                        count = 0
                    } else {
                        count--;
                    }
                    $('#comment-count').text(count);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function (xhr, errStatus, errText) {
                if (xhr.status === 401) {
                    $('.login.btn.wbtn').click();
                    return false;
                }

                swal('', '请求异常，请刷新页面重试', 'error');
            }
        })
    }

// 锚点
    $('a.comment-btn.btn-with-icon.btn').click(function () {
        let scroll_top = $('#pin_view_add_comment').offset().top;
        $('html,body').animate({scrollTop: scroll_top + 'px'}, 800);
    });
//endregion

// 滚动顶端
    $('#elevator').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800);
    });

//region Functions
// 数据出错提示
    function showFormErrors(fields, errors) {
        let {name, email, password} = errors;
        // 添加出错样式
        name && fields.name.toggleClass('input-error', !!name);
        email && fields.email.toggleClass('input-error', !!email);
        password && fields.password.toggleClass('input-error', !!password);

        // 拼接出错信息提示
        let error_msg = `${name ? name[0] + '\r\n' : ''}${email ? email[0] + '\r\n' : ''}${password ? password[0] : ''}`;

        return error_msg;
    }

// 取消关注
    $('.cancel-following').click(function () {
        let _this = this;
        swal({
            title: '确认删除?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(function (isConfirm) {
            if (isConfirm === true) {
                let user_id = $(_this).data('user-id');
                $.ajax({
                    url: '/followings/' + user_id,
                    method: 'delete',
                    dataType: 'json',
                    success: function (data) {
                        if (data.status === 1) {
                            swal('', data.message, 'success');
                            $(_this).closest('.person-item.followings').remove();
                        } else {
                            swal('', data.message, 'warning');
                        }
                    },
                    error: function (xhr) {
                        swal('', '请求失败，请刷新页面重试', 'error');
                    }
                })

            } else if (isConfirm === false) {
            } else {
                // Esc, close button or outside click
                // isConfirm is undefined
            }
        });
    });

// 定时器
    function activeResend(time) {
        // 定时器
        let text_time = $('.resend').find('span');
        window.thread_id = setInterval(function () {
            time--;
            console.log(time);
            text_time.text(time);
            if (time < 1) {
                text_time.text('');
                $('.resend').removeClass('disabled');
                clearInterval(window.thread_id);
            }
        }, 1000);
    }

    function checkLogin() {
        if ($('#nav_user').length < 1) {
            // 未登录
            $('.login.btn.wbtn').click();
            return false;
        } else {
            return true;
        }
    }

// endregion


})();