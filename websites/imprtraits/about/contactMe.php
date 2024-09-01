<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign-In to Imprtraits</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/imp.ico"/>
    <link rel="stylesheet" href="/home.css">
  </head>

  <body>
      <div class="centralContainer">
        <header id="header">
        </header>
        <div class="breaker">
        </div>
            <?php 
            if(isset($_SESSION["userEmail"])){
                echo "<p class='titleMedium'>".$_SESSION['userEmail']."</p>";
                echo'
        <form action="processContactMe.php" method="POST" class="columnCont wideInput" id="contactMe">
            <div class="smallSpacer"></div>
            <input name="userName" id="userName" type="text" minlength="4" maxlength="64" placeholder="full name" required/>
            <input class="hidden" name="userEmail" id="userEmail" type="email" minlength="3" maxlength="64" placeholder="email" value ="'.$_SESSION["userEmail"].'" required/>
            <div class="smallSpacer"></div>
            <textarea class="contactBody" name="contactBody" id="contactBody" form="contactMe" placeholder="enter text here..."></textarea>
            <div class="smallSpacer"></div>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
            <input type="submit" value="Submit"/>
        </form>';
                }else{
                echo'
        <form action="processContactMe.php" method="POST" class="columnCont wideInput" id="contactMe" name="contactMe">
            <div class="smallSpacer"></div>
            <input name="userName" id="userName" type="text" minlength="4" maxlength="64" placeholder="full name" required/>
            <div class="smallSpacer"></div>
            <input name="userEmail" id="userEmail" type="email" minlength="3" maxlength="64" placeholder="email" required/>
            <div class="smallSpacer"></div>
            <textarea class="contactBody" name="contactBody" id="contactBody" form="contactMe" placeholder="enter text here..."></textarea>
            <div class="smallSpacer"></div>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
            <input type="submit" value="Submit"/>
        </form>';

            };
?>
        </div>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>