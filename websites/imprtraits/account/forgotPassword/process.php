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
function generateRandomString($inputSize) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $inputSize; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
$fastCode = generateRandomString(4);
$email = $_POST['inputedEmail'];
$email= strtolower($email);
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

//SQL CHECK
    $emailSelectQuery = "SELECT * FROM Users WHERE Email LIKE '$email'";
    $resultFromEmailSelect = $conn->query($emailSelectQuery);
    if($resultFromEmailSelect->num_rows > 0) {
//SQL CHECK  

//EMAIL CODE
    $to = "$email";
    $subject = "Importraits forgot password code";
    $message = "$fastCode";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    $retval = mail ($to,$subject,$message,$header);
//EMAIL CODE

$dateMade = date('H');

//SQL INSERT
    $deletePreviousEntry = "DELETE FROM forgotPasswordCodes WHERE UserEmail LIKE '$email'";
    $conn->query($deletePreviousEntry);
    $insertQuery = "INSERT INTO forgotPasswordCodes (UserEmail, code, DateIssued) VALUES ('$email','$fastCode','$dateMade')";
    $conn->query($insertQuery);
//SQL INSERT
    
    
                echo "<h1 class='titleLarge'> Check Email For Code </h1>";
                echo'
        <form action="https://imprtraits.com/forgotPassword/newPassword/" method="POST" class="columnCont wideInput" id="codeCheck">
            <input name="code" id="code" type="text" minlength="4" maxlength="4" placeholder="Code" required/>
            <input class="hidden" name="email" id="email" type="email" minlength="4" maxlength="4" value="'.$email.'"/>
            <div class="smallerSpacer"></div>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <div class="smallSpacer"></div>
            <input type="submit" value="Submit"/>
        </form>';
    }else{
        echo "Account does not exsist";
    }
    $conn->close();
?>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>