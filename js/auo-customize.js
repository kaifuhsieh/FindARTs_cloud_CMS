$(function () {
    $('input[type="checkbox"]').focus(function () {
        $(this).blur();
    });
    // dropdown
    var dropdownStatus = false;
    $('.btn-dropdown').each(function (index, el) {
        $(this).click(function (e) {
            if (!dropdownStatus) {
                $(this).siblings('.dropdown-content').addClass('open');
                dropdownStatus = true;
            } else {
                $(this).siblings('.dropdown-content').removeClass('open');
                dropdownStatus = false;
            }
            $(this).blur();
            e.preventDefault();
        });
    });
    $(document).mouseup(function (e) {
        var target = e.target,
            container = $('.dropdown-content');
        if (
            !container.is(e.target) &&
            container.has(e.target).length === 0 &&
            (!$('.btn-dropdown').is(e.target) || !$('.btn-dropdown').is(e.target))
        ) {
            if (
                !(
                    ($('.btn-dropdown').is(e.target) || $('.btn-dropdown').is(e.target)) &&
                    $(target).siblings('.open').length > 0
                )
            ) {
                container.removeClass('open');
            }
        }
    });
});
