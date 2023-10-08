$(document).ready(function() {
    $(document).on("click", ".menu", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});