$(document).ready(function () {
    //Functions For Adding and Removing Class In Span
    function add() {
        $(".copied").addClass("bounce-effect")
    }
    function remove() {
        $(".copied").removeClass("bounce-effect")
    }

    //Call The Functions And Copy The Text On Button Click
    $(".copy-btn").click(function () {
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    })
})
