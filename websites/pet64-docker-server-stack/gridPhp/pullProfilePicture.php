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

$userID = $_SESSION['id'];

$idQuery = "SELECT profilePicture FROM Users WHERE userId = '$userID'";
$idResult = $conn->query($idQuery);

while ($row = mysqli_fetch_array($idResult, MYSQLI_BOTH)){
    $displayId = $row["profilePicture"];
};
    
    
    
$mapQuery = "SELECT map FROM displays WHERE code = '$displayId'";
$displayResult = $conn->query($mapQuery);

while ($row = mysqli_fetch_array($displayResult, MYSQLI_BOTH)){
    $map = $row["map"];
};
echo $displayId."&".$map;

$conn->close();
?>
