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
//VARIABLES
    $code = $_POST['code'];
    $email = $_POST['email'];
//VARIABLES

//MYSQL CONNECTION
$servername = "localhost";
$username = "userName";
$password = "password";
$dbname = "DBname";

    $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
//MYSQL CONNECTION
    $dateTimer = date('H')+1;
    $codeCheckQuery = "SELECT * FROM forgotPasswordCodes WHERE UserEmail LIKE '$email'";
    $resultCodeCheck = $conn->query($codeCheckQuery);
    if($resultCodeCheck->num_rows > 0) {
        $row = $resultCodeCheck->fetch_assoc();
    if($code = $row["code"]){
        echo "<h1 class='titleLarge'> Make New Password </h1>";
                echo'
        <form action="/account/forgotPassword/passwordChange.php" method="POST" class="columnCont wideInput" id="newPassword">
            <input name="newPassword" id="newPassword" type="text" minlength="4" maxlength="64" placeholder="newPassword" required/>
            <input class="hidden" name="email" id="email" type="email" value="'.$email.'"/>
            <div class="smallerSpacer"></div>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
            <input type="submit" value="Submit"/>
        </form>';
    }else{
        echo "try Again";
    }
}
?>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>