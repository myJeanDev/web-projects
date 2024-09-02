<?php session_start() ?>
<?php
//MYSQL
$servername = "db";
$username = "willeans_dotDisplay";
$password = "Kf@LUhD!XSP=";
$dbname = "willeans_dotDisplay";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$userId = $_SESSION['id'];
$code = $_POST['code'];

$dotQuery ="UPDATE Users
SET profilePicture = '$code'
WHERE userId = '$userId'";

$conn->query($dotQuery);
$conn->close();
?>
