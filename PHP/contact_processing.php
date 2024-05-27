<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validation des données
    $name = htmlspecialchars(trim($_POST['nameForm']));
    $email = htmlspecialchars(trim($_POST['emailForm']));
    $message = htmlspecialchars(trim($_POST['messageForm']));

    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        // Vous pouvez ici envoyer un email ou enregistrer le message dans une base de données
        $_SESSION['message_success'] = "Votre message a été envoyé avec succès.";
    } else {
        $_SESSION['message_error'] = "Veuillez remplir tous les champs correctement.";
    }
}

header('Location: contact.php');
exit();