<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "devdavixx@gmail.com"; // Replace with your email address
    $subject = "Message from Contact Form";
    
    // Get form data
    $name = $_POST["name"];
    $email_address = $_POST["email_address"];
    $message = $_POST["message"];
    
    // Email headers
    $headers = "From: $email_address \r\n";
    $headers .= "Reply-To: $email_address \r\n";
    $headers .= "Content-type: text/html; charset=UTF-8 \r\n";
    
    // Email content
    $email_body = "<p>Name: $name</p>";
    $email_body .= "<p>Email: $email_address</p>";
    $email_body .= "<p>Message: $message</p>";
    
    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(array('success' => true, 'message' => 'Email sent successfully'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Error sending email'));
    }
} else {
    echo json_encode(array('success' => false, 'message' => 'Invalid request'));
}
?>
