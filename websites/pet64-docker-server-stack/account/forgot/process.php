<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forgotpassword Code</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/dotDisplay/dots.ico"/>
    <link rel="stylesheet" href="/dotDisplay/style.css">
  </head>

  <body>
      <a class="home insideShadow" href="/dotDisplay/index.html"></a>
      <div class="column">
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
$username = "willeans_dotDisplay";
$password = "Kf@LUhD!XSP=";
$dbname = "willeans_dotDisplay";

    $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
//MYSQL CONNECTION

//SQL CHECK
    $emailSelectQuery = "SELECT * FROM Users WHERE email LIKE '$email'";
    $resultFromEmailSelect = $conn->query($emailSelectQuery);
    if($resultFromEmailSelect->num_rows > 0) {
//SQL CHECK  

//EMAIL CODE
    $to = "$email";
    $subject = "Forgot password code";
    $message = "$fastCode";
    $header = "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    $retval = mail ($to,$subject,$message,$header);
//EMAIL CODE

$dateMade = date('H');

//SQL INSERT
    $deletePreviousEntry = "DELETE FROM recoveryCodes WHERE email LIKE '$email'";
    $conn->query($deletePreviousEntry);
    $insertQuery = "INSERT INTO recoveryCodes (email, code, dateIssued) VALUES ('$email','$fastCode','$dateMade')";
    $conn->query($insertQuery);
//SQL INSERT
    
    
                echo "<h1 class='titleLarge'> Check Email For Code </h1>";
                echo'
        <form action="/dotDisplay/account/forgot/codeCheck.php" method="POST" class="columnInside shadow" id="codeCheck">
            <input class="shadow" name="code" id="code" type="text" minlength="4" maxlength="4" placeholder="Code" required/>
            <input class="hidden" name="email" id="email" type="email" minlength="1" maxlength="64" value="'.$email.'"/>
            <input class="submitButton shadow" type="submit" value="Submit"/>
        </form>';
    }else{
        echo "<h2 class='mainTitle'>Account does not exsist</h2>";
        echo"<a href='/dotDisplay/account/forgot/page.php' class='altSubmitButton shadow'><p class='alignText'>Try Again?</p></a>";
    }
    $conn->close();
?>
  </body>
</html>