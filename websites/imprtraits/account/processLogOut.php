<?php session_start();?>
<?php if(isset($_SESSION["userID"])){
session_destroy();
};
header("Location: https://imprtraits.com/account/logInPage.php");
?>