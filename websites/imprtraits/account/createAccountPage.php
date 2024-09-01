<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Imprtraits-Account Creation</title>
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
    <h1 class="titleLarge">Account Creation</h1>
    <form action="processCreateAccount.php" method="POST" class="columnCont wideInput" id="signUp">
        <input name="createdName" id="createdName" type="text" minlength="1" maxlength="64" placeholder="Full Name" required/>
        <div class="smallerSpacer"></div>
        <input name="createdEmail" id="createdEmail" type="email" minlength="4" maxlength="64" placeholder="Email" required/>
        <div class="smallerSpacer"></div>
                <input name="createdPassword" id="createdPassword" type="text" minlength="4" maxlength="64" placeholder="Password" required/>
                <div class="smallSpacer"></div>
                            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
        <input type="submit" value="Create Account"/>
    </form>
    <p>or</p>
    <a class="medText" href="https://imprtraits.com/logIn/">Log In</a>
</div>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>