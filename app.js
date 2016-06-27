// alert("hi planet")

$('.sign-in').on('dblclick', function() {
	alert("I was clicked!")
})

$('#user-sign-in').on('click', function() {
	$(this).removeClass('sign-in')
	$(this).addClass('dashboard')
})