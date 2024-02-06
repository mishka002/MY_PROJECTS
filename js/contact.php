<?php
if (isset($_POST["send"])) {
    $name = $_POST["name"];
    $email = $_POST["mail"];
    $subject = $_POST["txt"];

    $toEmail = "mishiko.kuprava19@gmail.com";
    $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
    if (mail($toEmail, $subject, $mailHeaders)) {
        $message = "Your contact information is received successfully.";
        $type = "success";
    }
}
?>