$(document).ready(function(e) {
	var h=$("#landing-post-img").height();
	 $("#top").css("height",h);
	$("#chck-content a").click(function(e) {
		if($("#hid").val() == 0)
		{
        $(this).css("background-position","bottom");
		$("#hid").val("1");
		}
		else
		{
		 $(this).css("background-position","top");
		 $("#hid").val("0");	
		}
    });
	
});

function mail_kontrol()
{
var mail = document.getElementById("mail").value;
var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
if (regex.test(mail)==true)
{ 
	return true;}
else
{
	$(".mail").fadeIn();
	return false;
}
}

function SayiKontrol(e) {
	olay = document.all ? window.event : e;
	tus = document.all ? olay.keyCode : olay.which;
	
	
	if(tus == 8)
	{
	}
	else if(tus<48||tus>57) {
		if(document.all) { olay.returnValue = false; } else { olay.preventDefault(); }
	}
	
}

function HarfKontrol(e) {
	olay = document.all ? window.event : e;
	tus = document.all ? olay.keyCode : olay.which;
	if(tus>=48&&tus<=57) {
		if(document.all) { olay.returnValue = false; } else { olay.preventDefault(); }
	}
}



function validateName() {
    if ($(".ad-soyad").val() == "") {
        $(".icon-user").css("color","#d20000");
        return false
    } else {
        $(".icon-user").css("color","#06325b");
        return true
    }
}
function validateEmail() {
    var e = $(".e-posta").val();
    var t = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
    if (t.test(e)) {
        $(".icon-mail").css("color","#06325b");
        return true
    } else {
        $(".icon-mail").css("color","#d20000");
        return false
    }
}
function validatePhone() {
    if ($(".telefon").val() == "" || $(".telefon").val().length < 10) {
        $(".icon-phone-main").css("color","#d20000");
        return false
    } else {
       $(".icon-phone-main").css("color","#06325b");
        return true
    }
}

$(window).resize(function(){
	 var h=$("#landing-post-img").height();
	 $("#top").css("height",h);
});
