<?php
session_start();
if(isset($_SESSION['darkMode'])){
echo $_SESSION['darkMode'];
}
?>