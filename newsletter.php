<?php
$NL_email = $_POST['user-email'];

$email_from = 'noreply@marodesclean.com';

$email_subject = "Nouvelle incription à la newsletter";

$email_body = "Adresse mail: $NL_email.\n";


$to = "H.lachhab@marodesclean.com";


$headers = "From: $email_from \r\n";

$headers .= "Reply To: $NL_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html#home");

?>