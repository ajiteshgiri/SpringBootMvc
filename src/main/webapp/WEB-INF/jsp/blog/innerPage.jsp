<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Calendar" %>
<%@ page import="java.text.ParseException" %> 
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="EN">
 <c:forEach var="data" items="${blogData}">
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title> ${data.title}</title>
<meta id="viewport" name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<meta name="description" content="${data.description}" >
<meta name="keywords" content="${data.keywords}" />
<meta name="author" content="crenoveative">
<link rel="shortcut icon" href="/resources/images/favicon.png" type="image/x-icon">
<link rel="alternate" href="https//localhost:8081/blog/${data.blogUrl}">
<link rel="canonical" href="https//localhost:8081${requestScope['javax.servlet.forward.request_uri']}">
<link rel="stylesheet" type="text/css" href="/resources/css/home.css">
<link rel="stylesheet" type="text/css" href="/resources/css/demo.css">
<link rel="icon" href="/resources/images/favicon.ico" type="image/x-icon">
<%-- <jsp:include page="../common.jsp"></jsp:include> --%>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<main>
	<div class="page-title page-title--small page-title--blog align-left"><div class="container">
		<div class="page-title__content">
		 <h1 class="page-title__name">${data.heading}</h1>
		</div>
	</div>
		<div class="breadcrumb_area full-w text-uppercase none" style="background-image:">
		 <div class="container">
		   <ul class="bradcum"> 
		   	<li><a href="/">Home</a></li> 
		   <li><a href="/blog">Blog</a></li> 
			     <li class="breadcrumb-item active" aria-current="page">${data.heading}</li> 
			  </ul>
			 </div>
			</div>
		</div>
<div class="blogaddalist-round about-uspage privacy__policy">

<mains class="destination_details destination_page">
<div class="container content_div">
	<div class="row">
		<div class="col-lg-8 col-12">
            <div class="blog-inner-box2">
                ${data.contentdata}</div>
      		</div>
           		<div class="mt-5 mt-lg-0 col-lg-4 col-12">
		        <ul class="side_accordion">
		            <div class="heading">Recent links</div>
		              <c:forEach var="data" items="${recentData}" begin="0" end="4">
			          <li class="card d-flex py-3 px-3 flex-row ">
			          	<span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
			            <a href="/blog/${data.blogUrl}"> ${data.heading}</a>
			          </li>
		        </c:forEach>
            </ul>
        </div> 
   </div>
</div> 
</main>
</div>
<script src="/resources/scripts/jquery-1.11.1.min.js"></script>
	<jsp:include page="../footer.jsp"></jsp:include>
</body>
    </c:forEach>
</html>