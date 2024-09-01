<?php session_start(); ?>
<?php
//Vars=======================================================================================================================
$SMTPhost = 'DomainMail';
$SMTPusername = 'EmailAdress';
$SMTPpassword = 'Password';
$SMTPcode = 'ssl';
$SMTPport = "PortNumber";

$to = "Email";
$toName = "Name";
$fromEmail = $_SESSION['userEmail'];
$fromName = $_SESSION['userName'];
$fromPet = $_POST['petName'];
$fromDescription = $_POST['petDescription'];
$plan = $_POST['plan'];
//Vars=======================================================================================================================


//PHP_Mailer==================================================================================================================
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require '/home4/imprtrai/vendor/autoload.php';
    $mail = new PHPMailer(true);
//PHP_Mailer==================================================================================================================


//Server_Settings==============================================================================================================
try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                          //Enable verbose debug output
    $mail->isSMTP();                                                //Send using SMTP
    $mail->Host       = $SMTPhost;                                  //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                       //Enable SMTP authentication
    $mail->Username   = $SMTPusername;                              //SMTP username
    $mail->Password   = $SMTPpassword;                              //SMTP password
    $mail->SMTPSecure = $SMTPcode;                                  //safety type
    $mail->Port       = $SMTPport;                                  //port   
//Server_Settings==============================================================================================================


//Message=====================================================================================================================
    $mail->setFrom("commission@imprtraits.com", "Importraits");
    $mail->addAddress($to, $toName);                                //Add a recipient
    $mail->isHTML(true);
    $mail->Subject = $fromName." Commissioned a painting of ".$fromPet;
    $mail->Body    = "Plan:"." ".$plan."</b>"."<br>"."<b>"."Customer Email:"." ".$fromEmail."</b>"."<br>".$fromDescription;
    $mail->AltBody = 'Alt Body';
//Message=====================================================================================================================

//Attachment=====================================================================================================================
	for ($i=0; $i < count($_FILES['file']['tmp_name']) ; $i++) { 
		$mail->addAttachment($_FILES['file']['tmp_name'][$i], $_FILES['file']['name'][$i]);    // Optional name
	}
//Attachment=====================================================================================================================

//Send=====================================================================================================================
    $mail->send();
    echo 'Message has been sent';
    } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
//Send=====================================================================================================================