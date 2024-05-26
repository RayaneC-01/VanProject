<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['nameForm'], $_POST['emailForm'], $_POST['messageForm'])) {
    $name_user = $_POST['nameForm']; // Récupérer le nom depuis le formulaire
    $email_user = $_POST['passwemailFormord']; // Récupérer l'email
    $message_user = $_POST['messageForm'];

}
?>