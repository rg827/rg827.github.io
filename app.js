// alert("hi planet")

$('.sign-in').on('dblclick', function() {
	alert("I was clicked!")
})

$('#user-sign-in').on('click', function() {
	$('.sign-in').addClass('hidden')
	$('.dashboard').removeClass('hidden')
})