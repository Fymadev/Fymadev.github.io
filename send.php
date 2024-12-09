<?php
    $from = filter_var($_POST['input-email'], FILTER_VALIDATE_EMAIL);
    $to = "mocanu.vlad@gmail.com";
    $subject = htmlspecialchars($_POST['input-name']) . " - " . htmlspecialchars($_POST['input-tel']) . ": From WebSite";
    $message = htmlspecialchars($_POST['input-message']);
    $headers = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";

    if ($from && $subject && $message) {
        mail($to, $subject, $message, $headers);
        exit();
    } else {
        echo "Eroare: Vă rugăm să completați toate câmpurile corect.";
    }
?>
