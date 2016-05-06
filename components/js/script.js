$(document).ready(function(){
$(".dataLink").click(function(e){
e.preventDefault();
	 if ($(this).hasClass('open')) {
	 $('.dataLink').removeClass('open');
	 }else {
	 $(this).addClass('open');
	 };
		$(".dataArticle").slideToggle();
		});




$(".iconList h5 a").click(function(e){
e.preventDefault();
	 if ($(this).hasClass('w_open')) {
	 $('.iconList h5 a').removeClass('w_open');
	 }else {
	 $(this).addClass('w_open');
	 };
	
	 	$(this).parent('h5').siblings('.progContent').slideToggle();

		});

//Video

$("#video").fitVids();



var iframe = document.getElementById('theVideo');
var player = $f(iframe);
$("a.playButton").click(function() {
$("a.playButton").hide(1); 
$("a.pauseButton").show(1); 
player.api("play");
return false;
});
$("a.pauseButton").click(function() {
$(".pauseButton").hide(1); 
$(".playButton").show(1);
player.api("pause");
return false;
});



//end of video


//end of doc
});