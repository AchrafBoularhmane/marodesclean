<?php
$NL_email = $_POST['user-email'];

$email_from = 'achrafboularhmane1@gmail.com';

$email_subject = "Nouvelle incription à la newsletter";

$email_body = "email utilisateur: $NL_email.\n"
              ;

$to = "Aboularhmane@achrafbl.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $NL_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

?>