<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charSet="utf-8"/>
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
      <title>Usairling | Contact Us</title>
      <meta name="keywords" content="Usairling, cheap flight booking website, best place to book flight, online flight booking"/>
      <link rel="canonical" href="https://www.usairling.com/contact"/>
      <link rel="alternate" href="https://www.usairling.com/contact"/>
      <meta name="description" content="Contact &amp; Visit USAirling for the cheap and reliable flights booking now! "/>
<meta name="format-detection" content="telephone=no"> 

<link rel="stylesheet" type="text/css" href="/resources/css/home.css">
<link rel="stylesheet" type="text/css" href="/resources/css/demo.css">
<link rel="shortcut icon" href="/resources/images/favicon.png" type="image/x-icon">

<link rel="stylesheet" href="/resources/css/contactusdf30.css?v=0128190226" type="text/css" />
    
<style type="text/css">
    #countryCode{    position: absolute;
    left: 1px;
    top: 32px;
    height: 48px;
    border: none;
    width: 100%;
    max-width: 80px;
    border-right: 1px solid #ddd;}
    #txtPhoneNumber{padding-left: 85px;}
	.numbersOnly {
    padding-left: 85px !important;
}
</style>

</head>
<body>
  
<!--HEADER START-->
<jsp:include page="header.jsp" />

        <div id="main-wrapper">
         
         <div class="page-title page-title--small align-left">
            <div class="container">
               <div class="page-title__content">
                  <h1 class="page-title__name">Contact Us</h1>
                  <p class="page-title__slogan">Tell you contact us</p>
               </div>
            </div>
            <div class="breadcrumb_area full-w text-uppercase none" style="background-image:">
               <div class="container">
                  <ul class="bradcum">
                     <li> <a href="/">Home</a> </li>
                     <li class="breadcrumb-item active" aria-current="page">
                        <!-- -->Contact
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="about-uspage full-w pyblock-80 contact-us">
            <div class="site-content site-contact">
               <div class="container mb-5">
                  <div class="form-row">
                     <div class="col-md-6">
                        <div class="contact-text">
                           <h2>Our Offices</h2>
                           <div class="contact-box">
                              <h3>USA</h3>
                              <p>10-S511 Echo Ln, Willowbrook, Illinois(IL), 60527</p>
                              <a href="tel:+1-802-341-3416"><i class="fa fa-phone dilsad" aria-hidden="true"></i>+1-802-341-3416</a><h6></h6>
                              <a href="#" title="Get Direction">Get Direction</a>
                           </div>
                           <div class="contact-box">
                              <h3>Paris</h3>
                              <p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>
                              <a href="#" title="Get Direction">Get Direction</a>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="contact-form">
                           <h2>Get in touch with us</h2>
                           <form action="#" method="POST" class="form-underline">
                              <div class="field-inline">
                                 <div class="field-input"><input type="text" name="first_name" placeholder="First Name"/></div>
                                 <div class="field-input"><input type="text" name="last_name" placeholder="Last Name"/></div>
                              </div>
                              <div class="field-input"><input type="email" name="email" placeholder="Email"/></div>
                              <div class="field-input"><input type="tel" name="tel" placeholder="Phone Number"/></div>
                              <div class="field-textarea"><textarea name="message" placeholder="Message"></textarea></div>
                              <div class="field-submit"><input type="submit" value="Send Message" class="btn"/></div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
                      
        </div>

<script src="/resources/scripts/jquery-1.11.1.min.js"></script>
 <script src="/resources/scripts/jquery.validate.min.js"></script> 
<jsp:include page="footer.jsp" />

 <script>

$('.textOnly').keyup(function () {
        		  if (this.value != this.value.replace(/[^a-zA-Z ]+/g, '')) {
        		       this.value = this.value.replace(/[^a-zA-Z ]+/g, '');
        		    }
        	});

$('.numbersOnly').keyup(function () {
    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
       this.value = this.value.replace(/[^0-9\.]/g, '');
    }
});


$.validator.messages.required = '';
$("#contactForm").validate({
	rules:{
		name:{
			required : true
		},
		email:{
			required : true,
			email: true,
			emailVal :true
		},
		
		phone:{
			required : true
		},
		message:{
			required : true
		}
	},
	 errorPlacement: function(error, element) {   },
	 submitHandler:function(form){
		 if($('input[name="Chktermsandcondition"]').is(':checked') == false){
			 $("#dvTermsandConditions").show();
			return false; 
		 }
		 form.submit();
	 }
})
$.validator.addMethod('emailVal', function (value) {
              return IsEmail(value)
          }, "")
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
</script>       


</body>


</html>
