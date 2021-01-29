<?php
$NomComplet = $_POST['Nom-Complet'];
$Mobile = $_POST['Mobile'];
$Email = $_POST['Email'];
$Objet = $_POST['Objet'];
$Message = $_POST['Message'];

$email_from = 'achrafboularhmane1@gmail.com';

$email_subject = "Nouveau devis";

$email_body = "Nom Complet: $NomComplet.\n".
              "Mobile: $Mobile.\n".
              "Email: $Email.\n".
              "Objet: $Objet.\n".
              "Message: $Message.\n";

$to = "H.lachhab@marodesclean.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $Email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html#Contact");

?>
