<?php
$host = 'localhost'; // Adresse de votre serveur PostgreSQL
$dbname = 'vehicules'; // Nom de votre base de données
$dbuser = 'postgres'; // Votre nom d'utilisateur PostgreSQL
$dbpass = '123456'; // Votre mot de passe PostgreSQL

try {
    $dsn = "pgsql:host=$host;dbname=$dbname";
    $pdo = new PDO($dsn, $dbuser, $dbpass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (PDOException $e) {
    die('Connexion échouée : ' . $e->getMessage());
}
?>