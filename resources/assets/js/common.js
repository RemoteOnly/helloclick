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

// endregion

