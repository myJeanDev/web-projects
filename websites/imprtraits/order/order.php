<?php session_start()?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Importraits-Order</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../home.css"/>
    <link rel="icon" type="image/x-icon" href="../imp.ico"/>
</head>

<body>
      <div class="centralContainer">
        <header id="header">
      </header>
      <div class="breaker">
      </div>
        <h1 class="titleLarge">Portrait Comission</h1>
        <?php
        if(isset($_SESSION['userID'])){
           echo '<form role="form" action="commission.php" method="post" class="columnCont" enctype="multipart/form-data">
          <section class="columnCont smallerMargin gap10">
            <div class="columnCont">
            <label class="inputLabel" for="petName">Pet name</label>userID
                    <input id="petName" name="petName" type="text" required><!--INPUT-->
            </div>
            <div class="columnCont">
            <label class="inputLabel" for="description">Description of Pet</label>
                    <textarea id="petDescription" class="description" name="petDescription" type="text" required></textarea><!--INPUT-->
                  </div>
          </section>

        <div class="breaker">
          <i class="breakerMarker mLeft"></i>
          <i class="breakerMarker mRight"></i>
        </div>
          <section class="gap10 rowCont smallerMargin">
            <div class="plan">
              <h3 class="planTitle">Digital</h3>
              <div class="breaker">
                  <i class="breakerMarker mLeft"></i>
                  <i class="breakerMarker mRight"></i>
              </div>
              <ol class="planList">
                  <li class="planWords">1 free alteration</li>
                  <li class="planWords">High Quality File</li>
                  <li class="planWords">Personal Request</li>
              </ol>
              <p class="buyButton">$99</p>
              <input class="planDot" id="planDigital" name="plan" type="radio" value="Digital Plan" required><!--INPUT-->
          </div>

          <div class="plan">
            <h3 class="planTitle">Printed</h3>
            <div class="breaker">
                <i class="breakerMarker mLeft"></i>
                <i class="breakerMarker mRight"></i>
            </div>
            <ol class="planList">
                <li class="planWords">1 free alteration</li>
                <li class="planWords">High Quality File</li>
                <li class="planWords">Personal Request</li>
            </ol>
            <p class="buyButton">$149</p>
            <input class="planDot" id="planPrinted" name="plan" type="radio" value="Printed Plan" required><!--INPUT-->
        </div>

        <div class="plan">
          <h3 class="planTitle">Themed</h3>
          <div class="breaker">
              <i class="breakerMarker mLeft"></i>
              <i class="breakerMarker mRight"></i>
          </div>
          <ol class="planList">
              <li class="planWords">1 free alteration</li>
              <li class="planWords">High Quality File</li>
              <li class="planWords">Personal Request</li>
          </ol>
          <p class="buyButton">$199</p>
          <input class="planDot" id="planThemed" name="plan" type="radio" value="Themed Plan" required><!--INPUT-->
      </div>

          </section>

          <div class="breaker">
            <i class="breakerMarker mLeft"></i>
            <i class="breakerMarker mRight"></i>
        </div>

          <section class="columnCont smallerMargin">
            <label for="file" class="titleSimple custom-file-upload"> Photo Upload </label>
            <input id="file" type="file" name="file[]" multiple="multiple"><!--INPUT-->
            <div id="fileDisplay" class="fileFont"></div>
          </section>
          <input class="formButton " id="submitButton" type="submit" value="submit"/><!--SUBMIT-->
        </form>'; 
        }else{
            echo "<a class='navLink' href='../account/logInPage.php'>Click here to log in or create an account</a>";
        };
        ?>
        
      </div>
    <script src="commission.js"></script>
	<script src="/header.js"></script>
	<script src="/home.js"></script>
</body>
</html>
