<?php session_start();?>
<?php 
if(isset($_SESSION["email"]) == false){
header("location:../account/signIn/page.php");
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="../style.css" id="styler">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="../dots.ico">
    <title>Sixty4-Canvas</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,900&display=swap" rel="stylesheet">
  </head>
  <body style="overflow:hidden;" draggable="false" ondragstart="return false;" ondrop="return false;">
      		<script src="../darkMode/darkModeSwitch.js"></script>
      <div class="hidden" draggable="false" id="canvasPage"></div>
<a class="home insideShadow" href="../index.php"></a>
<div draggable="false" class="column">
    <div style="z-index:100;" class="canvasTitleContainer">
    <textarea id="canvasTitle" class="shadow" maxlength="14" oninput="this.value = this.value.replace(/\n/g,'')"></textarea>
    <div id="canvasSubmit" class="controlButton shadow"><p class="alignText">^</p></div>
</div>
                <div draggable="false" ondragstart="return false;" ondrop="return false;" class="sizeBox2 shadow">
                  <div id="display" draggable="false"></div>
                      <div class="shadow" id="controls"></div>
                </div>
</div>

</div>

	<script src="canvas.js"></script>
  </body>
</html>