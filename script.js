/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function () {
    const vehicleContainer = document.getElementById('vehicleContainer');

    // Les données des nouvelles voitures
    const newVehicles = [
        { name: 'Nouveau véhicule 1', description: 'Description du nouveau véhicule 1', image: 'https://example.com/image1.jpg' },
        { name: 'Nouveau véhicule 2', description: 'Description du nouveau véhicule 2', image: 'https://example.com/image2.jpg' },
        { name: 'Nouveau véhicule 3', description: 'Description du nouveau véhicule 3', image: 'https://example.com/image3.jpg' },
        { name: 'Nouveau véhicule 4', description: 'Description du nouveau véhicule 4', image: 'https://example.com/image4.jpg' },
        { name: 'Nouveau véhicule 5', description: 'Description du nouveau véhicule 5', image: 'https://example.com/image5.jpg' },
        { name: 'Nouveau véhicule 6', description: 'Description du nouveau véhicule 6', image: 'https://example.com/image6.jpg' },
        { name: 'Nouveau véhicule 7', description: 'Description du nouveau véhicule 7', image: 'https://example.com/image7.jpg' },
        { name: 'Nouveau véhicule 8', description: 'Description du nouveau véhicule 8', image: 'https://example.com/image8.jpg' },
        { name: 'Nouveau véhicule 9', description: 'Description du nouveau véhicule 9', image: 'https://example.com/image9.jpg' },
        { name: 'Nouveau véhicule 10', description: 'Description du nouveau véhicule 10', image: 'https://example.com/image10.jpg' }
    ];

    // Pour chaque nouvelle voiture, créez une carte et ajoutez-la au conteneur
    newVehicles.forEach(vehicle => {
        const card = `
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}">
                    <div class="card-body">
                        <h5 class="card-title">${vehicle.name}</h5>
                        <p class="card-text">${vehicle.description}</p>
                        <button class="btn btn-primary">En savoir plus</button>
                    </div>
                </div>
            </div>
        `;
        vehicleContainer.innerHTML += card;
    });

    // Ajoutez un gestionnaire d'événements aux nouveaux boutons après avoir ajouté les nouvelles cartes
    vehicleContainer.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('btn')) {
            let vehicleName = e.target.parentNode.querySelector('.card-title').innerText;
            let vehicleDescription = e.target.parentNode.querySelector('.card-text').innerText;
            Swal.fire({
                title: vehicleName,
                text: vehicleDescription,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    });
});
