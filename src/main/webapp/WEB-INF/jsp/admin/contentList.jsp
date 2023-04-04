<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="/assets/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
<div class="container mt-3">
  <h2>Basic Table</h2>
  <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>            
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Password</th>
        <th>Action</th>
        <th><a class="test-link" id="test-link" href="/" target="_blank" >home</a></th>
      </tr>
    </thead>
    <tbody>
    <c:forEach var="data" items="${contList}">
      <tr>
        <td>${data.name}</td>
        <td>${data.password}</td>
        <td><span style="color:green;"><a href="/edit/${data.id}">edit</a></span>&nbsp;&nbsp;||&nbsp;&nbsp;<span style="color:red;"><a href="/delete/${data.id}">delete</a></span></td>
      </tr>
      </c:forEach>
    </tbody>
  </table>
</div>

<script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/sweetalert.min.js"></script>
<script src="/assets/js/bootstrap.bundle.min.js"></script>
<script>
$(document).ready(function(){
	$('.test-link').click(function(){
		return false;
		
	});
});
</script>

</body>
</html>