<?php session_start();?>
<?php
if(isset($_SESSION["email"])){
header("location: ../accountPage/page.php");
exit();
}?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sixty4-SignIn</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="../../dots.ico" />
    <link rel="stylesheet" href="../../style.css">
</head>

<body>
    <a class="home insideShadow" href="../../index.php"></a>
    <div class="column">
        <header id="header">
        </header>
        <div class="breaker">
        </div>
        <?php 
            if(isset($_SESSION["email"])){
                echo "<h1 class='titleMedium'>".$_SESSION['email']."</h1>";
            }else{
                echo'
                <h1 class="mainTitle"> Sixty4 </h1>
                <h2 class="flair">Sign In</h2>
                <div class="spacer"></div>
        <form action="process.php" method="POST" class="columnInside shadow" id="signIn">
            <input class="shadow" name="inputedEmail" id="inputedEmail" type="email" minlength="3" maxlength="64" placeholder="Email" required/>
            <input class="shadow" name="inputedPassword" id="inputedPassword" type="password" minlength="5" maxlength="64" placeholder="Password" required/>
            <a class="flair" href="../forgot/page.php">forgot password?</a>
            <input class="submitButton shadow" type="submit" value="Sign In"/>
        </form>
        <div class="periodDot"></div>
        <div class="spacer"></div>
        <a class="buttonSmaller shadow" href="../signUp/page.php">Create account</a>';
            };
?>
    </div>
</body>

</html>