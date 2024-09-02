<?php session_start();?>
<?php
$servername = "db";
$username = "willeans_dotDisplay";
$password = "Kf@LUhD!XSP=";
$dbname = "willeans_dotDisplay";

$inputedEmail = $_POST['inputedEmail'];
$inputedPassword = $_POST['inputedPassword'];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$inputedEmail = strtolower($inputedEmail);

$query = "SELECT * FROM Users WHERE email LIKE '$inputedEmail'";

$result = $conn->query($query);
if($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if(password_verify($inputedPassword,$row["password"])){
        
        //session setting
        $_SESSION["id"] = $row["userId"];
        $_SESSION["email"] = $row["email"];
        $_SESSION["name"] = $row["name"];
        //session setting
        header("Location: ../accountPage/page.php");
        $conn->close();
        exit;
    }else{
        header("Location: ../signIn/page.php");
        $conn->close();
        exit;
    }
    }else{
        header("Location: ../signIn/page.php");
        $conn->close();
        exit;
}
$conn->close();
?>