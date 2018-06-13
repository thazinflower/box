$(document).ready(function(){
	$('button').click(function(){
		$('#box,#box1').animate({'width':'300'},1000);
		$('#box,#box1').animate({'height':'300'},1000);
		$('#box,#box1').animate({'width':'100'},1000);
		$('#box,#box1').animate({'height':'100'},1000);
	});
});