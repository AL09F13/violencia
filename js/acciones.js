// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnprincipal').on('tap',function(){
	navigator.vibrate(1000);
	});
	
	$('#btntipos').on('tap',function(){
	navigator.notification.beep(2);
});
	
	$('#btnfactores').on('tap',function(){
	navigator.vibrate(1000);
	});
	
	$('#btntest').on('tap',function(){
	navigator.notification.beep(2);
});
	
	$('#btngaleria').on('tap',function(){
	navigator.vibrate(1000);
	});
	
	
}); 
});

