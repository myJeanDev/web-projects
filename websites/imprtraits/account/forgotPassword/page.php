<!DOCTYPE html>
<html style="height:100%;" lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Imprtraits-ForgotPassword</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/imp.ico"/>
    <link rel="stylesheet" href="/home.css">
  </head>

  <body style="height:100%;">
      <div class="centralContainer">
        <header id="header">
        </header>
        <div class="breaker">
            <h1 class="titleLarge">Forgot Password</h1>
        <form action="https://imprtraits.com/forgotPassword/check/" method="POST" class="columnCont wideInput" id="forgotPassword">
            <input name="inputedEmail" id="inputedEmail" type="email" minlength="3" maxlength="64" placeholder="Email" required/>
            <div class="smallerSpacer"></div>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
            <input type="submit" value="Send Email"/>
        </form>
      </div>
    <script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>