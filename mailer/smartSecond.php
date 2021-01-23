<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$delivery = $_POST['delivery'];
$department = $_POST['department'];
$product = $_POST['product'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

//$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'densosrus@gmail.com';                 // Наш логин
$mail->Password = 'metallicatogether';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('densosrus@gmail.com', 'Guitar shop');   // От кого письмо 
$mail->addAddress('denissosnowsky@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
    Номер телефона: ' . $phone . ' <br>
    Эмейл: ' . $email . ' <br>
    Город доставки: ' . $city . ' <br>
    Способ доставки: ' . $delivery . ' <br>
    Отделение: ' . $department . ' <br>
    Заказ(артикул---цена---название): ' . $product . '';
	

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>