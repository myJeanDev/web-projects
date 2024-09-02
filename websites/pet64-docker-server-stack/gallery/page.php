<?php 
session_start();
unset($_SESSION['mapCode']);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="../dots.ico">
    <title>Sixty4-Gallery</title>
    <link rel="stylesheet" href="../style.css" id="styler">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,900&display=swap"
        rel="stylesheet">
</head>

<body style="overflow-y:scroll;">
    <a class="home insideShadow" href="../index.php"></a>
    <div class="column">
        <div id="galleryContainer"></div>
    </div>
    <script src="gallery.js"></script>
    <script src="../darkMode/darkModeSwitch.js"></script>
</body>

</html>