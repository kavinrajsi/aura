<?php


// the message
$name = ($_POST['username']);
$email = ($_POST['email']);
$mobile = ($_POST['phoneNumber']);

         $to = "exclusiveyash@gmail.com";
         $subject = "[Arise Academy] Enquire by ". $name;

$msg = "<html><body style='font-family:Lato,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Enquire for Arise Academy</h2>\r\n";
$msg .= "<table width='600' border='0' align='left' cellpadding='0' cellspacing='0' bgcolor='#FFF' style='font-weight: 700;font-size: 12px;color: #666;font-family:Arial, Helvetica, sans-serif; background-color:#FFFFFF;'>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-bottom:none; border-right:none; padding:10px;'>Name</td><td width='250' style='border: 1px solid #CCC; border-bottom:none; padding:10px;'> " . $name . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-bottom:none; border-right:none; padding:10px;'>Email</td><td width='250' style='border: 1px solid #CCC; border-bottom:none; padding:10px;'> " . $email . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-right:none; padding:10px;'>Phone Number</td><td width='250' style='border: 1px solid #CCC; padding:10px;'>" . $mobile . "</td></tr>";
$msg .= "</table>";
$msg .= "</body></html>";


// neeraja@digitalacademy360.com

         $header = "From:alphvvvm@premium59.web-hosting.com\r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";

         $retval = mail ($to,$subject,$msg,$header);

         if( $retval == true ) {
            // echo "Message sent successfully...";
        // header( "refresh:2; https://da360.netlify.com");
        print "<p class='success'>Mail Sent.</p>";

         }else {
            // echo "Message could not be sent...";
            print "<p class='error'>Problem in Sending Mail.</p>";

         }

?>
