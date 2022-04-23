window.onscroll = function() {scrollnav()}

function scrollnav() {   
    let header = document.getElementById("trigger");

    if (window.pageYOffset > 0) {
        header.classList.add("headscroll");
    } else {
        header.classList.remove("headscroll");
    }
}

$(document).ready(function() {
    $("#btn").click(function() {
        let name = $("#name").val();
        let email = $("#email").val();
        let text = $("#text").val();
        let file = $("#file1")
        console.log(file);

        if (name.length == "") {
            $(".error1").text("Это поле обязательно");
            $(".error1").focus();
            return false;
        }
        else if (email.length == "") {
            $(".error2").text("Это поле обязательно");
            $(".error2").focus();
            return false;
        }
        else if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            $(".error2").text("Не коректная почта правленый формат [namemail@gmail.com]");
            $(".error2").focus();
            return false;
        }

        else if (text.length == "") {
           $(".error3").text("Это поле обязательно");
           $(".error3").focus();
           return false;
        }
        
        else {
           return true;
        }
    });
});
