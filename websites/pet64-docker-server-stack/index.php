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
    <link rel="icon" type="image/x-icon" href="dots.ico">
    <title>Pet64</title>
    <link rel="stylesheet" href="style.css" id="styler">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,900&display=swap"
        rel="stylesheet">
</head>

<body draggable="false" ondragstart="return false;" ondrop="return false;">
    <div class="hidden" id="homePage"></div>
    <div class="splitContainer">
        <div class="box">
            <div class="paddingLeft">
                <div class="row">
                    <a class="link altShadow" href="canvas/page.php">canvas</a>
                    <div class="periodDot"></div>
                    <a class="link altShadow" href="gallery/page.php">gallery</a>
                    <div class="periodDot"></div>
                    <a class="link altShadow" href="account/accountPage/page.php">account</a>
                </div>
                <div class="words">
                    <h1 class="mainTitle">Pet64</h1>
                    <h2 class="description">Create digital pets and share them with others. Try drawing on the dog to
                        the right!</h2>
                    <div class="spacer"></div>
                    <a href="account/signUp/page.php" class="button shadow">Sign Up</a>
                </div>
            </div>
        </div>
        <div class="box">
            <div draggable="false" class="sizeBox">
                <div draggable="false" id="display"></div>
                <div class="shadow" id="controls"></div>
            </div>
        </div>
    </div>
    <script src="canvasDisplay.js"></script>
    <script src="darkMode/darkModeSwitch.js"></script>
</body>

</html>