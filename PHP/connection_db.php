<?php
// Informations de connexion à la base de données
$host = 'localhost';
$port = '5432';         // Le port PostgreSQL
$dbname = 'vehicules';  // Le nom de la base de données
$dbuser = 'postgres'; // Remplacez par votre nom d'utilisateur PostgreSQL
$dbpass = '123456';

// Connexion à la base de données
try {
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";
    $pdo = new PDO($dsn, $dbuser, $dbpass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    echo "Connexion réussie!";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
    exit();
}
?>