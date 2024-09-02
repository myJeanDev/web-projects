<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sixty4-Forgot Password</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/dotDisplay/dots.ico"/>
    <link rel="stylesheet" href="/dotDisplay/style.css">
  </head>

  <body>
      <a class="home insideShadow" href="../../index.php"></a>
      <div class="column">
            <h1 class="mainTitle">Sixty4</h1>
            <h2 class="flair">Forgot Password</h2>
            <div class="spacer"></div>
        <form action="process.php" method="POST" class="columnInside shadow" id="forgotPassword">
            <input class="shadow" name="inputedEmail" id="inputedEmail" type="email" minlength="3" maxlength="64" placeholder="Email" required/>
            <input class="submitButton shadow" type="submit" value="Send Email"/>
        </form>
    </body>
</html>