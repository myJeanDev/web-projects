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
$mapQuery = "SELECT map FROM displays WHERE code LIKE '$requestedMap'";
$mapResult = $conn->query($mapQuery);

    while ($row = mysqli_fetch_array($mapResult, MYSQLI_BOTH)){
        echo $row["map"];
    };
$conn->close();
?>
