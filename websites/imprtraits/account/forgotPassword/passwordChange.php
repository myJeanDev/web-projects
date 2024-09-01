<?php
//VARIABLES
$email = $_POST['email'];
$newPassword = $_POST['newPassword'];
$newPassword = stripslashes($newPassword);
$newPassword = str_replace(["'",'"',";",":"], "", $newPassword);
$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
//VARIABLES

//MYSQL CONNECTION
$servername = "localhost";
$username = "userName";
$password = "password";
$dbname = "DBname";

    $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
//MYSQL CONNECTION
$deletePreviousEntry = "DELETE FROM forgotPasswordCodes WHERE UserEmail LIKE '$email'";
$conn->query($deletePreviousEntry);

$passwordChangeQuery = "UPDATE Users SET Password = '$hashedPassword' WHERE Email LIKE '$email'";
$conn->query($passwordChangeQuery);

header("Location: https://imprtraits.com/logIn/");
?>
