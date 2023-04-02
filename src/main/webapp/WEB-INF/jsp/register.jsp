<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register form</title>
<link href="/assets/css/bootstrap.min.css" rel="stylesheet"/>

</head>
<body>
<div class="container">
	<div class="row">
		<div class ="col-md-6">
			<form:form action="/register" modelAttribute="register" method="post">
			  <div class="mb-3">
			    <label for="exampleInputEmail1" class="form-label">Name</label>
			    <input type="name" name ="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
			  </div>
			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Password</label>
			    <input type="text" name ="password" class="form-control" id="exampleInputPassword1">
			  </div>
			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">content</label>
			    <textarea name="content" class="form-control ckeditor" id="exampleInputPassword1"></textarea>
			  </div>
			  <div style="color:green;">${message}</div>
			  <div style="display:none;" id ="alertMessage">${alertMessage}</div>
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form:form>
		</div>
	</div>
</div>
<script src="/assets/js/sweetalert.min.js"></script>
<script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>
  <script>
        CKEDITOR.replace( 'content' );
  </script>
  <script type="text/javascript">
  
  $(document).ready(function(){
	  var msg = $("#alertMessage").text();
	  if(msg == ''){
		  
	  }else{
		  swal("Opps !!", msg, "warning");
	  }
	
  });
  </script>
</body>
</html>