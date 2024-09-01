<?php session_start();?>
<?php
$servername = "localhost";
$username = "userName";
$password = "Password";
$dbname = "DBname";

$inputedEmail = $_POST['inputedEmail'];
$inputedPassword = $_POST['inputedPassword'];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$inputedEmail = strtolower($inputedEmail);

$query = "SELECT * FROM Users WHERE Email LIKE '$inputedEmail'";

$result = $conn->query($query);
if($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if(password_verify($inputedPassword,$row["Password"])){
        
        //session setting
        $_SESSION["userID"] = $row["UserID"];
        $_SESSION["userEmail"] = $row["Email"];
        $_SESSION["userName"] = $row["userName"];
        //session setting
        
        header("Location: https://imprtraits.com/account/logInPage.php");
        $conn->close();
        exit;
    }else{
        header("Location: https://imprtraits.com/account/logInPage.php");
        $conn->close();
        exit;
    }
    }else{
        header("Location: https://imprtraits.com/account/logInPage.php");
        $conn->close();
        exit;
}
$conn->close();
?>