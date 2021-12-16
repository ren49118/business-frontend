$('document').ready(function() {
	// $('#all').addClass("border");
 	// alert('hello');
 	$('.dropdown-toggle').mouseover(function() {
 		$('.dropdown-menu').show(200);
 	});
 	$('.dropdown-toggle').mouseleave(function() {
 		$('.dropdown-menu').hide(200);
 	});
 	$('.touch').mouseover(function() {
 		$(this).find(".full_info").css("display","block");
 		// alert('ok');
 	});
 	$('.touch').mouseleave(function() {
 		$(this).find(".full_info").css("display","none");
 		// alert('ok');
 	});	
 	$('.btn').mouseover(function() {
 		$(this).addClass("shadow");
 	});
 	$('.btn').mouseleave(function() {
 		$(this).removeClass("shadow");
 	});
 	$('.b').mouseover(function() {
 		// setTimeout(function(){ alert("Hello"); }, 3000);
 		$(this).find('.card').css('bottom',"10%");
 		$(this).find('a').css("display","block");
 		// $(this).find('.card').css('background-color',"green");
 	});
 	$('.b').css("transition","transform .5s");
 	$('.b').mouseleave(function() {
 		$(this).find('.card').css("bottom","20px");
 		$(this).find('a').css("display","none");
 	});
 	$('.sim').mouseover(function() {
 		$(this).find(".card-title").css({"color":" #ef1d5d ",})
 		$(this).addClass("shadow");
 		$(this).css("bottom","15px");
 	});
 	$('.sim').mouseleave(function() {
 		$(this).find(".card-title").css({"color":" black"})
 		$(this).removeClass("shadow");
 		$(this).css("bottom","0px");
 	});
 	let speed=500;
 	$('#all').click(function() {
 		$('.cd').addClass('mt-4');
 		$('.green').removeClass('offset-md-6');
 		$('.green').css("margin-top","-255px");
 		$('.orange').show(speed);
 		$('.house').show(speed);
 		$('.cola').show(speed);
 		$('.cd').show(speed);
 		$('.vege').show(speed);
 		$('.green').show(speed);
 		// $('.green').addClass('pt');
 	});
 	$('#brand').click(function() {
 		$('.cd').addClass('mt-4');
 		$('.green').removeClass('offset-md-6');
 		$('.house').hide(speed);
 		$('.cola').hide(speed);
 		$('.green').hide(speed);

 		$('.orange').show(speed);
 		$('.cd').show(speed);
 		$('.vege').show(speed);
 	});
 	$('#motion').click(function() {
 		$('.green').css("margin-top","0");
 		$('.cd').addClass('mt-4');
 		$('.green').removeClass('offset-md-6');
 		$('.orange').hide(speed);
 		$('.cd').hide(speed);
 		$('.vege').hide(speed);

 		$('.green').show(speed);
 		$('.cola').show(speed);
 		$('.house').show(speed);
 		// $('.green').removeClass('pt');
 	});
 	$('#photo').click(function() {
 		$('.cd').removeClass('mt-4');
 		$('.green').removeClass('offset-md-6');
 		$('.orange').show(speed);
 		$('.house').show(speed);
 		$('.cd').show(speed);

 		$('.green').hide(speed);
 		$('.vege').hide(speed);
 		$('.cola').hide(speed);
 		// $('.green').css("margin-top","0");
 		// $('.green').removeClass('pt');
 	});
 	$('#ui').click(function() {
 		$('.green').css("margin-top","-255px");
 		$('.green').addClass('offset-md-6');
 		$('.cd').addClass('mt-4');
 		$('.orange').show(speed);
 		$('.house').show(speed);
 		$('.cola').show(speed);
 		$('.green').show(speed);
 		$('.cd').hide(speed);
 		$('.vege').hide(speed);
 	});
 	$('.gg').mouseover(function() {
 		 // alert('ok');
 		 $(this).find('.card').css('margin-top','-20px');
 	});
 		$('.gg').mouseleave(function() {
 		 // alert('ok');
 		 $(this).find('.card').css('margin-top','0px');
 	});
 	// $('#all,#ui,#motion,#brand,#photo').addClass('p-1');
 	$('#all,#ui,#motion,#brand,#photo').mouseover(function() {
 		$(this).addClass('border');
 		$(this).addClass('border-muted');
 	});
 	$('#all,#ui,#motion,#brand,#photo').mouseleave(function() {
 		$(this).removeClass('border');
 		$(this).removeClass('border-muted');
 	});
 	$('.bcard').mouseover(function () {
 		$(this).addClass("shadow");
 	});
 		$('.bcard').mouseleave(function () {
 		$(this).removeClass("shadow");
 	});
})