<?php
session_start();
include 'connection_db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validation et sécurisation des données
    $name = htmlentities(trim($_POST['nameForm']), ENT_QUOTES, 'UTF-8');
    $first_name = htmlentities(trim($_POST['first_name']), ENT_QUOTES, 'UTF-8');
    $email = htmlentities(trim($_POST['emailForm']), ENT_QUOTES, 'UTF-8');
    $message = htmlentities(trim($_POST['messageForm']), ENT_QUOTES, 'UTF-8');

    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        try {
            // Préparer la requête d'insertion
            $query = "INSERT INTO messages (nom,first_name, email, message) VALUES (:name,:first_name, :email, :message)";
            $stmt = $pdo->prepare($query);

            // Lier les paramètres
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':first_name', $first_name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':message', $message);

            // Exécuter la requête
            if ($stmt->execute()) {
                $_SESSION['message_success'] = "Votre message a été envoyé avec succès.";
            } else {
                $_SESSION['message_error'] = "Une erreur est survenue lors de l'envoi de votre message.";
            }
        } catch (PDOException $e) {
            $_SESSION['message_error'] = "Erreur de base de données : " . $e->getMessage();
        }
    } else {
        $_SESSION['message_error'] = "Veuillez remplir tous les champs correctement.";
    }
}

header('Location: contact.php');
exit();