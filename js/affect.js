$(document).ready(function(){
	$('button').click(function(){
		$('#box').animate({'width':'300'},1000);
		$('#box').animate({'height':'300'},1000);
		$('#box').animate({'width':'100'},1000);
		$('#box').animate({'height':'100'},1000);
	});
});