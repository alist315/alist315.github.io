$(window).on("load", function () {
    console.log("welcome");
    function close() {
        $("#modal").hide(1800);
    }
    $(".aaron").on("click", close);
});
