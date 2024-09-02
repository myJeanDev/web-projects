<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Code Checking</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/dotDisplay/dots.ico"/>
    <link rel="stylesheet" href="/dotDisplay/style.css">
  </head>

  <body>
      <div class="column">

<?php
//VARIABLES
    $code = $_POST['code'];
    $email = $_POST['email'];
    $dateTimer = date('H')+1;
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

    $codeCheckQuery = "SELECT * FROM recoveryCodes WHERE email LIKE '$email'";
    $resultCodeCheck = $conn->query($codeCheckQuery);
    if($resultCodeCheck->num_rows > 0) {
        $row = $resultCodeCheck->fetch_assoc();
    if($code = $row["code"] && $row["dateIssued"] < $dateTimer){
        echo "<h1 class='titleLarge'> Make New Password </h1>";
                echo'
        <form action="/dotDisplay/account/forgot/change.php" method="POST" class="columnInside shadow" id="newPassword">
            <input class="shadow" name="newPassword" id="newPassword" type="text" minlength="4" maxlength="64" placeholder="newPassword" required/>
            <input class="hidden" name="email" id="email" type="email" value="'.$email.'"/>
            <input class="submitButton shadow" type="submit" value="Submit"/>
        </form>';
    }else{
        echo "try Again";
    }
}
?>
</div>
  </body>
</html>