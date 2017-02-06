//Check of specific todos by clicking or uncheck them
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

//click on trash/X to delete to do
//$.on() adds listeners to potential future event
//listeners can only be attached to elements that are present presently
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();//stop event bubbling to parent elements.
})

// add to do to the list
$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear the input
		$(this).val('');
		//create a new li and then add to ul
		$("ul").append('<li><span><i class="fa fa-trash"></i></span> '+todoText+'</li>');

	}
})

$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle();
});