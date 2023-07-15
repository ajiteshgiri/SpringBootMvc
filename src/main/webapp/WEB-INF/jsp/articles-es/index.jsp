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
<html lang="ES" dir="ltr">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head itemscope itemtype="http://schema.org/WebSite">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta id="viewport" name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<title>Usairling | Verifique el mejor y más barato vuelo con nosotros en línea</title>
<meta name="description" content="Usairling es una fuente confiable de ofertas de vuelos donde puede reservar vuelos para todos los destinos en América del Sur o el mundo a las tarifas aéreas más bajas con nosotros. " />
<meta name="keywords" content="" />
<link rel="canonical" href="https://www.usairling.com/es/articulos"/>
<link rel="alternate" href="https://www.usairling.com/es/articulos"/>
<link rel="stylesheet" type="text/css" href="/resources/css/home.css">
<link rel="stylesheet" type="text/css" href="/resources/css/demo.css">
<link rel="shortcut icon" href="/resources/images/favicon.ico" type="image/x-icon">

</head>
<body>
<jsp:include page="../header-es.jsp"></jsp:include>
<main>
	<div class="page-title page-title--small page-title--blog align-left"><div class="container">
		<div class="page-title__content">
		 <h1 class="page-title__name">Articlou </h1>
		</div>
	</div>
		<div class="breadcrumb_area full-w text-uppercase none" style="background-image:">
		 <div class="container">
		   <ul class="bradcum"> 
		   <li><a href="/">Casa</a></li> 
			     <li class="breadcrumb-item active" aria-current="page">Articlou</li> 
			  </ul>
			 </div>
			</div>
		</div>
	<div class="container">
	<div class="row">
		<c:forEach var="data" items="${blogData}">
		<div class="mb-4 col-xl-4 col-md-6 col-12">
        	<div class="post postreadmore-card hover__box">
        		<div class="post__info">
                    <a href="/es/articulos/${data.titleUrl}">
						<h3 class="post__title">${data.heading}</h3></a>
						<p>${(fn:substring(data.content.replaceAll('<.*?>' , ""), 0, 300))}</p>
                       <div class="reads_more">	
                      <a href="/es/articulos/${data.titleUrl}" class="image_area_partition btn mt-3">Lee mas</a>
                 </div>
             </div>
            </div>
        </div>
        </c:forEach>
	</div> 
</div> 
</main>
<script src="/resources/scripts/jquery-1.11.1.min.js"></script>
<jsp:include page="../footer.jsp"></jsp:include>
</body>
</html>