<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email_address"];
    $message = $_POST["message"];

    $to = "devdavixx@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>";

    // Send the email
    mail($to, $subject, $message, $headers);
}
?>
