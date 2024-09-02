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
$requestedMap = $_GET['code'];
$userId = $_SESSION['id'];
$mapQuery = "SELECT * FROM likes WHERE displayId = '$requestedMap' AND userId = '$userId'";
$mapResult = $conn->query($mapQuery);

if(mysqli_num_rows($mapResult) > 0){
    echo "true";
}else{
    echo "false";
}

$conn->close();
?>
