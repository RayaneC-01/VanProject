<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact - Présentation des Véhicules</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Présentation des Véhicules</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="vehicles.html">Véhicules</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.php">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="container my-5">
      <h1 class="text-center">Contactez-nous</h1>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <?php if (isset($_SESSION['message_success'])): ?>
            <div class="alert alert-success" role="alert">
              <?php echo htmlspecialchars($_SESSION['message_success']); ?>
            </div>
            <?php unset($_SESSION['message_success']); ?>
          <?php endif; ?>
          <?php if (isset($_SESSION['message_error'])): ?>
            <div class="alert alert-danger" role="alert">
              <?php echo htmlspecialchars($_SESSION['message_error']); ?>
            </div>
            <?php unset($_SESSION['message_error']); ?>
          <?php endif; ?>
          <form method="POST" action="contact_processing.php">
            <div class="mb-3">
              <label for="name" class="form-label">Nom</label>
              <input type="text" name="nameForm" class="form-control" id="name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" name="emailForm" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" name="messageForm" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-dark text-light py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2024 Présentation des Véhicules</p>
        </div>
        <div class="col-md-6 text-end">
          <p>Contactez-moi : contact@example.com</p>
        </div>
      </div>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
</body>

</html>