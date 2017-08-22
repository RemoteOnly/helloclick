(function () {
    // 搜索框搜索
    $('.search').click(function () {
        let keyword = $('#keyword').val();
        let url = $(this).data('url') + keyword;
        window.location.href = url;
    });

    // 切换角色
    $('.toggle-type').click(function () {
        let url = $(this).data('url');
        let _this = this;
        $.ajax({
            url: url,
            method: 'put',
            dataType: 'json',
            success: function (data) {
                if (data.status === 1) {
                    $(_this).text(data.type);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function (xhr) {
                swal('', '请求出错，请刷新重试', 'error');
            }
        })
    });

    // 禁用用户
    $('.user-forbid').click(function () {
        let url = $(this).data('url');
        let _this = this;
        $.ajax({
            url: url,
            method: 'put',
            dataType: 'json',
            success: function (data) {
                if (data.status === 1) {
                    $(_this).text(data.user_status);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function (xhr) {
                swal('', '请求出错，请刷新重试', 'error');
            }
        })
    });

    function commonDestroy(url, obj) {
        let _this = obj;
        $.ajax({
            url: url,
            method: 'delete',
            dataType: 'json',
            success: function (data) {
                if (data.status === 1) {
                    $(_this).closest('tr').remove();
                    swal('', data.message, 'success');
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function (xhr) {
                swal('', '请求失败，请刷新重试', 'error');
            }
        });
    }

    // 删除用户
    $('.user-destroy').click(function () {
        let result = confirm('确认删除?');
        if (!result) {
            return false;
        }

        let url = $(this).data('url');
        commonDestroy(url, this);
    });

    // 图片删除
    $('.image-destroy').click(function () {
        let result = confirm('确认删除？');
        if (!result) {
            return false;
        }

        let url = $(this).data('url');
        commonDestroy(url, this);
    });

    // 评论删除
    $('.comment-destroy').click(function () {
        let result = confirm('确认删除？');
        if (!result) {
            return false;
        }

        let url = $(this).data('url');
        commonDestroy(url, this);
    });

    // 删除标签
    $('.tag-destroy').click(function () {
        let result = confirm('确认删除？');
        if (!result) {
            return false;
        }

        let url = $(this).data('url');
        commonDestroy(url, this);
    });

    // 编辑标签


})();