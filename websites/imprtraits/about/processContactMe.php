<?php
//MYSQL
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "DBname";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//MYSQL
$contactName = $_POST['userName'];
$contactEmail = $_POST['userEmail'];
$contactBody = $_POST['contactBody'];
$today = date("F j, Y, g:i a"); 
$toEmail = "toEmail";

mail($toEmail,"Contact from '$contactEmail'",$contactName.": ".$contactBody);

$contactMeQuery = "INSERT INTO contactMe (name, email, body, time) VALUES ('$contactName','$contactEmail','$contactBody', '$today')";
$conn->query($contactMeQuery);
?>
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
echo "<h1 class='titleMedium'>thank you for your message</h1>";
?>
        </div>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
  </body>
</html>