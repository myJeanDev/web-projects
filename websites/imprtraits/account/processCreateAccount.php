<?php session_start();?>
<?php if(isset($_SESSION["userID"])){
session_destroy();
};?>
<?php
$servername = "localhost";
$username = "userName";
$password = "password";
$dbname = "DBname";

$createdEmail = $_POST['createdEmail'];
$cleanedEmail = stripslashes($createdEmail);
$cleanedEmail = str_replace(["'",'"'], "", $createdEmail);
$cleanedEmail = strtolower($cleanedEmail);

$createdName = $_POST['createdName'];
$cleanedName = stripslashes($createdName);
$cleanedName = str_replace(["'",'"'], "", $createdName);
$cleanedName = strtolower($cleanedName);

$createdPassword = $_POST['createdPassword'];
$cleanedPassword = stripslashes($createdPassword);
$cleanedPassword = str_replace(["'",'"'], "", $cleanedPassword);
$hashedPassword = password_hash($cleanedPassword, PASSWORD_DEFAULT);
$userID = generateRandomString(64);
$currentDate = date("F j, Y, g:i a");

function generateRandomString($inputSize) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $inputSize; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}



// Connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Connection




    $query = "SELECT * FROM Users WHERE Email = '$cleanedEmail'";
    $result = $conn->query($query);
        if (mysqli_num_rows($result) > 0) {
            echo 'Email already being used';
        $conn->close();
        } else {
            
        //Create User

        $sql = "INSERT INTO Users (UserID, Name, Email, Password, TimeCreated, PurchaseHistory) VALUES ('$userID','$createdName','$cleanedEmail','$hashedPassword','$currentDate','0')";
        if ($conn->query($sql) === TRUE) {
        $_SESSION["userName"] = $cleanedName;
        $_SESSION["userEmail"] = $cleanedEmail;
        $_SESSION["userID"] = $userID;
        header("Location: https://imprtraits.com/account/logInPage.php");
        } else {
            echo "Cannot create account";
                    
        }
        $conn->close();
    }

?>