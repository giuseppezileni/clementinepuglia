$(document).ready(function() {

	// -----------------------------
	// Sending Mail
	// -----------------------------

	$('#send_mail').click(function () {
	    var message = 'eMail inviata da ' + $('#email').val() + '\n' +
	                  $('#message').val();  

	    var link = 'mailto:unimpegnoincomune@yahoo.it' 
	             + "?cc=info@prodigiopergioia.it"
	             + "&subject=Informazioni" 
	             + "&body=" + message;
	    ;
	    
	    console.log('invio mail: ' + link);

	    window.location.href = link;
	});

});