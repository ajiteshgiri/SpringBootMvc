<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />



            <header id="header" class="site-header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <span class="navbar-brand">
                        
                            <a class="navbar-brand active" href="/"><img src="/resources/images/logo.jpg" alt="logo" width="200" height="35" /></a>
                       
            
                        </span>
                        <div class="order-lg-3 ml-auto mr-3 mr-lg-0 btnlang ">
                            <a href="/login">login</a>

                        </div>

                        <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse" id="basic-navbar-nav">
                            <div class="mx-auto navbar-nav">
                                <ul class="navbar-nav">
                                 
                                    <li class="nav-item mx-lg-2"><a class="nav-link" href="/">Home</a></li>
                                    <li class="nav-item mx-lg-2"><a class="nav-link " href="/about-us">About</a></li>
                            
                                    <li class="nav-item mx-lg-2"><a class="nav-link " href="/blog">Blog</a></li>
                                    <li class="nav-item mx-lg-2"><a class="nav-link " href="/contact-us">Contact</a></li>
                                  
                              
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>