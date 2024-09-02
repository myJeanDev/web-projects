<?php session_start();?>
<?php if(isset($_SESSION["PlayerID"])){
session_destroy();
};?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sixty4-Sign Up</title>
    <link rel="icon" type="image/x-icon" href="/dotDisplay/dots.ico">
    <link rel="stylesheet" href="/dotDisplay/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,900&display=swap" rel="stylesheet">
  </head>

  <body>
<a class="home insideShadow" href="../../index.php"></a>
<div class="column">
        <h1 class="mainTitle">Sixty4</h1>
        <h2 class="flair">Sign Up</h2>
        <div class="spacer"></div>
    <form action="/dotDisplay/account/signUp/process.php" method="POST" class="columnInside shadow" id="signUp">
        <input class="shadow" name="createdName" id="createdName" type="text" minlength="1" maxlength="64" placeholder="Username" required/>
        <input class="shadow" name="createdEmail" id="createdEmail" type="email" minlength="4" maxlength="64" placeholder="Email" required/>
        <input class="shadow" name="createdPassword" id="createdPassword" type="password" minlength="4" maxlength="64" placeholder="Password" required/>
        <button class="submitButton shadow" type="submit">Create</button>
    </form>
<div class="periodDot"></div>
<div class="spacer"></div>
<a href="../signIn.php" class="buttonSmaller shadow">Sign In</a>
</div>
  </body>
</html>