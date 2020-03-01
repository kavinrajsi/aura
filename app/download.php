<?php
// the message
$name = ($_POST['download_username']);
$email = ($_POST['download_email']);
$mobile = ($_POST['download_phoneNumber']);

// $to = "exclusiveyash@gmail.com";
$to = "sikavinraj@gmail.com";

$subject = "[Arise Academy] Enquire by ". $name;

$msg = "<html><body style='font-family:Lato,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Enquire for Arise Academy</h2>\r\n";
$msg .= "<table width='600' border='0' align='left' cellpadding='0' cellspacing='0' bgcolor='#FFF' style='font-weight: 700;font-size: 12px;color: #666;font-family:Arial, Helvetica, sans-serif; background-color:#FFFFFF;'>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-bottom:none; border-right:none; padding:10px;'>Name</td><td width='250' style='border: 1px solid #CCC; border-bottom:none; padding:10px;'> " . $name . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-bottom:none; border-right:none; padding:10px;'>Email</td><td width='250' style='border: 1px solid #CCC; border-bottom:none; padding:10px;'> " . $email . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-right:none; padding:10px;'>Phone Number</td><td width='250' style='border: 1px solid #CCC; padding:10px;'>" . $mobile . "</td></tr>";
$msg .= "</table>";
$msg .= "</body></html>";


$header = "From:alphvvvm@premium59.web-hosting.com\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$retval = mail ($to,$subject,$msg,$header);

if( $retval == true ) {
  print "<iframe src='download_pdf.php' style='display:none;' /><p class='success'>Mail Sent.</p><script>$('#exampleModal').modal('toggle')</script>";
}else {
  print "<p class='error'>Problem in Sending Mail.</p>";
}

?>
