"use strict";

// test pour librairie modernizr :
/*if (Modernizr.flexbox) {
		console.log("Flex box autorisé sur ce navigateur.");
		$("span").css("color", "blue");
		}
else {
		console.log("flex box non autorisé avec ce navigateur, il faut l'updater !");
		$("span").css("color", "green");
		}*/


var breakPoint1 = 480; // CF scss file.
var widthViewPort = $(window).width();
if(widthViewPort <= breakPoint1) {
		$(".photo-perfil").addClass("img-circle");
	}
	else if(widthViewPort > breakPoint1) {
		$(".photo-perfil").removeClass("img-circle");
	}

$(window).resize(function() {
	var widthViewPort = $(window).width();
	if(widthViewPort <= breakPoint1) {
		$(".photo-perfil").addClass("img-circle");
		console.log("inferieur");
		console.log(widthViewPort);
	}
	else if(widthViewPort > breakPoint1) {
		$(".photo-perfil").removeClass("img-circle");
		console.log("supérieur");
		console.log(widthViewPort);
	}
});


