<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<section class="banner-contact">
        <div class="container">
            <div class="banner-inner">
             
                <h2>Attend the Best Flight with enthusiasm. We provided each and every time</h2>
                <a href="tel:+1-00000000000" class="btn" target="_blank">Contact Us</a>
             
        
            </div>
        </div>
    </section>
            <footer id="footer" class="footer">
                <div class="container">
                    <div class="footer__top">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="footer__top__info">
                               
                                    <a class="footer__top__info__logo" href="/"><img src="/resources/images/logo.jpg" width="166" height="29" alt="logo" /></a>
                                    
                                    
                             
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <aside class="footer__top__nav">
                                  
                                    <h3>Useful Links</h3>
                                   
                                  
                                    <ul>
                                      
                                        <li><a href="/blog">Blog</a></li>
                                        
                                        <li><a href="/about-us">About Us</a></li>
                                        <li><a href="/contact-us">Contact</a></li>
                                      
                                    </ul>
                                </aside>
                            </div>
                            <div class="col-lg-3">
                                <aside class="footer__top__nav">
                                   
                                     <h3>Others</h3>
                                    
                                
                                    <ul>
                                      
                                      
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/terms-and-conditions">Terms and Condition</a></li>
                                     
                               
                                    </ul>
                                </aside>
                            </div>
                            <div class="col-lg-3">
                                <aside class="footer__top__nav footer__top__nav--contact">
                                 
                                    <h3>Contact Us</h3>
                                    <p>Email: <a href="#" class="__cf_email__" target="_blank">ankit@gmail.com</a></p>
                                  
                               
                                    <ul>
                                        <li class="facebook"><a title="Facebook" href="#" target="_blank">
                                          <i class="fa-brands fa-facebook-f"></i>
                                        </a></li>
                                        <li class="twitter"><a title="Twitter" href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li class="youtube"><a title="pinterest" href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                                        <li class="instagram"><a title="Instagram" href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <div class="footer__bottom">
                      
                       
                          
                   	
                     
                    </div>
                </div>
            </footer>
<script>
    $(document).ready(function(){
$("button.navbar-toggler").click(function(){
$("#basic-navbar-nav").slideToggle();
});

$(".lang-btn").click(function(){
$(".drop").toggleClass("show");
});
    });
</script>


<script>
$(document).ready(function () {
  $(".navbar-nav li a").click(function(){
    var id = $(this);
    $(".navbar-nav li a").removeClass("active");
    $(id).addClass("active");
    sessionStorage .setItem("mylink", $(id).text());
   }); 
   var mylink = sessionStorage .getItem('mylink');
    if (mylink !== null) {
       $("li a:contains('" + mylink + "')").addClass("active");
    }
});
</script>

<script>
  $(document).ready(function() {
  $(".drop a.btn").click(function() {
    var id = $(this);

    $(".drop a.btn").removeClass("active");
    $(id).addClass("active");
    sessionStorage.setItem("mylink", $(id).text());
  });

  // var mylink = sessionStorage.getItem('mylink');
  // if (mylink !== null) {
  //   $("li a:contains('" + mylink + "')").addClass("active");
  // }
});

</script>


