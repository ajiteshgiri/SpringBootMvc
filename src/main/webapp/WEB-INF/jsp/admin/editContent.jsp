<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Pages / Contact - NiceAdmin Bootstrap Template</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
 <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="/assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="/assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="/assets/vendor/simple-datatables/style.css" rel="stylesheet">


  <!-- Template Main CSS File -->
  <link href="/assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: NiceAdmin
  * Updated: Mar 09 2023 with Bootstrap v5.2.3
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <jsp:include page="header.jsp" />
  <!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <jsp:include page="sidebar.jsp" />
  <!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Add blog</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
          <li class="breadcrumb-item">Add Blog</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section contact">

        <div class="col-xl-12 col-md-12 col-12">
          <div class="card p-4">
            <form:form action="/updateContent" modelAttribute="contentform" method="post" >
              <div class="row gy-4">

                <div class="col-md-4">
                 <input type="hidden" name="id" class="form-control" value="${contentLit.id}" placeholder="Title" required>
                 <label>Title</label>
                  <input type="text" name="title" class="form-control" value="${contentLit.title}" placeholder="Title" required>
                </div>

                <div class="col-md-4">
                <label>Keyword</label>
                  <input type="text" class="form-control" name="keywords" value="${contentLit.keywords}" placeholder="keywords" required>
                </div>

                <div class="col-md-4">
                <label>Description</label>
                  <input type="text" name="description" class="form-control" value="${contentLit.description}" placeholder="description" required>
                </div>

                <div class="col-md-4">
                <label>Heading</label>
                  <input type="text" class="form-control" name="heading" value="${contentLit.heading}" placeholder="heading" required>
                </div>
                <div class="col-md-4">
                <label>Blog Url</label>
                  <input type="text" class="form-control" name="blogUrl" id="blogUrl" value="${contentLit.blogUrl}" placeholder="blogUrl" onblur="buildUrl()"required>
                </div>

                <div class="col-md-12">
                <label>Content Data</label>
                  <textarea class="form-control" name="contentdata"  rows="6" placeholder="contentdata" required>${contentLit.contentdata}</textarea>
                </div>
                <div>
                <label>Status</label>
                	<select class="form-select" name ="status"aria-label="Default select example">
					  <option value="${contentLit.status}"><span class="status-text">${contentLit.status}</span></option>
					  <option value="Active">Active</option>
					  <option value="Inactive">Inactive</option>
					 
					</select>
                </div>

                <div class="col-md-12 text-center">
                
                  <div class="sent-message">${saveMessage}</div>

                  <button type="submit" class="btn btn-primary">Update</button>
                </div>

              </div>
            </form:form>
          </div>

        </div>

      </div>

    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <jsp:include page="footer.jsp" />
  <!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="/assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/vendor/chart.js/chart.umd.js"></script>
  <script src="/assets/vendor/echarts/echarts.min.js"></script>
  <script src="/assets/vendor/quill/quill.min.js"></script>
  <script src="/assets/vendor/simple-datatables/simple-datatables.js"></script>
  <!-- <script src="assets/vendor/tinymce/tinymce.min.js"></script> -->
  <script src="/assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="/assets/js/main.js"></script>
  <script src="https://cdn.ckeditor.com/4.20.2/standard/ckeditor.js"></script>

</body>
<script>
  CKEDITOR.replace( 'contentdata' );
</script>
<script>
	function buildUrl(){
		let x = document.getElementById("blogUrl");
		  x.value = x.value.toLowerCase().replaceAll(" ","-");
	}
</script>
</html>