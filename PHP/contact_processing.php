<?php
// Start the session to store and retrieve session variables
session_start();

// Include the database connection PHP file
include_once '../PHP/connection_db.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize the input data
    $name = htmlentities(trim($_POST['nameForm']), ENT_QUOTES, 'UTF-8');
    $first_name = htmlentities(trim($_POST['first_name']), ENT_QUOTES, 'UTF-8');
    $email = htmlentities(trim($_POST['emailForm']), ENT_QUOTES, 'UTF-8');
    $message = htmlentities(trim($_POST['messageForm']), ENT_QUOTES, 'UTF-8');

    // Check if all input fields are filled and the email is valid
    if (!empty($name) && !empty($first_name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        try {
            // Prepare the SQL query to insert the message into the database
            $query = "INSERT INTO messages (name, first_name, email, message) VALUES (:name, :first_name, :email, :message)";
            $stmt = $pdo->prepare($query);

            // Bind the input parameters to the query
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':first_name', $first_name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':message', $message);

            // Execute the query and check if it was successful
            if ($stmt->execute()) {
                // Set a session variable to display a success message
                $_SESSION['message_success'] = "Votre message a été envoyé avec succès.";
            } else {
                // Set a session variable to display an error message
                $_SESSION['message_error'] = "Une erreur est survenue lors de l'envoi de votre message.";
            }
        } catch (PDOException $e) {
            // Set a session variable to display a database error message
            $_SESSION['message_error'] = "Erreur de base de données : " . $e->getMessage();
        }
    } else {
        // Set a session variable to display an error message if any input field is empty or invalid
        $_SESSION['message_error'] = "Veuillez remplir tous les champs correctement.";
    }
}

// Redirect to the contact.php page
header('Location: contact.php');
exit();
?>