function characterCount(word, character) {
   var count = 0;
    for (var i = 0; i < word.length; i++) {
       if (word[i] === character) {
           count++;
       }
  }
  return count;
}
function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  if(!regex.test(email)) {
	    return false;
	  }else{
		  var count = characterCount(email,'.');
		  if(count > 2){
			  return false;
		  }
	    return true;
	  }
	}
function NewsLetterSignUp(){
var emailId = $("#txtNewsEmail").val();
if(emailId == ""){
	$("#spnError").html("please enter email Id.").show().fadeOut(5000);
	return false;
}
if(IsEmail(emailId)){
	$.post( "/newslettersubmit/"+emailId, function(data) {
		$("#spnError").html("Subscribed Succesfully.").show().fadeOut(5000);
	});
}
else{
	$("#spnError").html("please enter valid email Id.").show().fadeOut(5000);
	return false;
}	
}