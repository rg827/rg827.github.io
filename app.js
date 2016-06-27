// alert("hi planet")

$('.sign-in').on('dblclick', function() {
	alert("I was clicked!")
})

$('#user-sign-in').on('click', function() {
	$('#user-sign-in').removeClass('sign-in')
	// $(this).addClass('dashboard')
})