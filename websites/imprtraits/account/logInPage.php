<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Imprtraits-SignIn</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="../imp.ico"/>
    <link rel="stylesheet" href="../home.css">
  </head>

  <body>
      <div class="centralContainer">
        <header id="header">
        </header>
        <div class="breaker">
        </div>
            <?php 
            if(isset($_SESSION["userEmail"])){
                echo "<h1 class='titleMedium'>".$_SESSION['userEmail']."</h1>";
                echo "<a style='border:1px solid rgb(37,37,37);padding:.5rem 1rem .5rem 1rem;background:rgba(255,255,255,.2);margin-top:1rem;' href='processLogOut.php'>Log Out</a>";
            }else{
                echo "<h1 class='titleLarge'> Account Log In </h1>";
                echo'
        <form action="processLogIn.php" method="POST" class="columnCont wideInput" id="signIn">
            <input name="inputedEmail" id="inputedEmail" type="email" minlength="3" maxlength="64" placeholder="Email" required/>
            <div class="smallerSpacer"></div>
            <input name="inputedPassword" id="inputedPassword" type="text" minlength="5" maxlength="64" placeholder="Password" required/>
            <a href="https://imprtraits.com/forgotPassword/">forgot password?</a>
            <div class="smallSpacer"></div>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
            <input type="submit" value="Sign In"/>
        </form>';
            };
?>
    
    <p>or</p>
<a class="medText" href="https://imprtraits.com/createAccount/">Create new account</a>
        </div>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>