<?php
// Adresse de votre serveur PostgreSQL
$host = 'localhost';
// Nom de votre base de données
$dbname = 'vehicules';
// nom d'utilisateur PostgreSQL
$dbuser = 'postgres';
// mot de passe postGreSQL
$dbpass = '123456';

try {
    // Création de la chaîne de connexion PDO avec les informations fournies
    $dsn = "pgsql:host=$host;dbname=$dbname";
    // Tentative de connexion à la base de données avec PDO
    $pdo = new PDO($dsn, $dbuser, $dbpass, [
        // Configuration des options de PDO pour afficher les erreurs en cas de problème
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (PDOException $e) {
    // Gestion des erreurs de connexion : affichage du message d'erreur
    die('Connexion échouée : ' . $e->getMessage());
}
?>