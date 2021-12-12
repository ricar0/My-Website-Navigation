<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2021/9/9
  Time: 20:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/search.css"  type="text/css" media="all">
<%--    <link rel="stylesheet" href="css/input.css"  type="text/css" media="all">--%>
    <link rel="stylesheet" href="css/button.css"  type="text/css" media="all">
    <link rel="stylesheet" href="css/bar.css"  type="text/css" media="all">
    <link rel="stylesheet" href="css/background.css"  type="text/css" media="all">
    <link rel="stylesheet" href="css/style.css"  type="text/css" media="all">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script type="text/javascript" src="js/search.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/background.js"></script>
    <script type="text/javascript" src="js/color.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>
        我的主页
    </title>
</head>
<body id="body">

<input type="checkbox" id="check">
<label for="check">
    <i class="fas fa-bars" id="btn"></i>
    <i class="fas fa-times" id="cancel"></i>
</label>
<div class="sidebar">
    <header>My Home</header>
    <ul>
        <li><a href="#" onclick="ChangeBackground()"><i class="fas fa-link"></i>切换背景</a></li>
        <li><a href="#" onclick="changecolor()"><i class="fas fa-qrcode"></i>切换主题</a></li>
        <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
        <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
        <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
        <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
    </ul>
</div>
<section></section>

<div id="button-div" class="block">
    <a href="http://connect.facebook.com/"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.facebook.com/TwitterInc"><i class="fab fa-twitter"></i></a>
    <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
    <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
    <a href="https://weibo.com"><i class="fab fa-weibo"></i></a>
</div>

<div id="search-div" class="search-box">
    <label for="selects"></label>
    <select id="selects" class="search-sel" onchange="changes()"></select>
    <label for="input"></label>
    <input id="input" class="search-txt" type="text" name="" placeholder="Search in Google">
    <a id="button" class="search-btn" href="" target="_blank" onclick="searchs()">
        <img src="basic/search.png" style="width: 20px; height:20px" alt="搜索">
    </a>
</div>

<script>
      init();
</script>
</body>
</html>
