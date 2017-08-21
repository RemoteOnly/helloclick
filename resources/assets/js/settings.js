(function () {
    $('.edit-label').click(function () {
        let container = $(this).closest('.setting-unit');
        let holder = $(this).siblings('.holder');

        if (container.hasClass('open')) {
            container.removeClass('open');
            holder.slideUp('slow');
        } else {
            // 先关闭当前open的holder
            $('.open .holder').slideUp('slow');
            // 移除所有unit上的open类，然后只给当前元素添加一个open类
            $('.setting-unit').removeClass('open');
            container.addClass('open');
            // 当前holder下拉
            holder.slideDown('slow');
        }
    });
})();