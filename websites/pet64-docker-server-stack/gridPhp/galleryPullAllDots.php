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

$mapQuery = "SELECT * FROM displays ORDER BY created DESC";
$mapResult = $conn->query($mapQuery);

    while ($row = mysqli_fetch_array($mapResult, MYSQLI_BOTH)){
        echo $row["title"]."|".$row["author"]."|".$row["timeUploaded"]."|".$row["map"]."|".$row["code"]."@";
    };
$conn->close();
?>
