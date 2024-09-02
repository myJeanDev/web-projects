<?php session_start();?>
<?php 
unset($_SESSION['mapCode']);
?>
<?php 
if(isset($_SESSION["id"]) == false){
header("location:../signIn/page.php");
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sixty4-Account</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="/dotDisplay/dots.ico"/>
    <link rel="stylesheet" href="../../style.css" id="styler">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  </head>
  <body style="overflow-y:scroll;">
<a class="home insideShadow" href="../../index.php"></a>

<div class="column">
    <div style="position:relative; width:100%;display:flex;flex-direction:column;align-items:center;">
        <div class="shadow" id="profilePicture"></div>
        <?php echo'<h1 class="alignText">'.$_SESSION["name"].'</h1>' ?>
        <a class="altSubmitButton shadow" href="../signOut/process.php"><p class="alignText">Log Out</p></a>
    </div>
        <div id="galleryContainer">
    </div>
</div>
<script src="accountPage.js"></script>
	<script src="../../darkMode/darkModeSwitch.js"></script>
  </body>
</html>