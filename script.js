/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function () {
    const vehicleContainer = document.getElementById('vehicleContainer');

    if (!vehicleContainer) {
        console.error('Element with ID "vehicleContainer" not found');
        return;
    }

    // Les données des nouvelles voitures
    const newVehicles = [
        { name: 'Ford Ranger', description: 'Description du Ford Ranger.', image: 'https://www.ford.fr/content/dam/guxeu/rhd/central/cvs/all-new-ranger-2022/features/ford-ranger-eu-P703_EU_LHD_TREMOR-16x9-2160x1215.jpg.renditions.original.png' },
        { name: 'Toyota Hilux', description: 'Description du Toyota Hilux.', image: 'https://scene7.toyota.eu/is/image/toyotaeurope/toyota-hilux-2020-gallery-03-full_tcm-18-2017452?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0' },
        { name: 'Nissan Navara', description: 'Description du Nissan Navara.', image: 'https://images.caradisiac.com/logos-ref/modele/modele--nissan-navara-3/S7-modele--nissan-navara-3.jpg' },
        { name: 'Volkswagen Amarok', description: 'Description du Volkswagen Amarok.', image: 'https://www.automobile-magazine.fr/asset/cms/840x394/6353/config/6047/ce-restylage-de-lamarok-1-ne-transfigure-pas-vraiment-la-plastique-musclee-de-ce-beau-bebe.jpg' },
        { name: 'Mercedes-Benz X-Class', description: 'Description du Mercedes-Benz X-Class.', image: 'https://images.clickdealer.co.uk/vehicles/5254/5254336/large1/124197960.jpg' },
        { name: 'Mitsubishi L200', description: 'Description du Mitsubishi L200.', image: 'https://sf2.autoplus.fr/wp-content/uploads/autoplus/2022/12/1-89.jpg' },
        { name: 'Chevrolet Colorado', description: 'Description du Chevrolet Colorado.', image: 'https://img.sm360.ca/images/article/groupe-dallaire/106587//2023-colorado-gal-ext-011667230712658.jpg' },
        { name: 'Ford F-150', description: 'Description du Ford F-150.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoCeaM4_fm4LSMptwstILyMdGkNxGULJYXXlcxmHN8A&s' },
        { name: 'Jeep Gladiator', description: 'Description du Jeep Gladiator.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J2BSUw1--u3WYTFvnFoTeBBBBn5RYzT36_puMv1bnA&s' },
        { name: 'Honda Ridgeline', description: 'Description du Honda Ridgeline.', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-honda-ridgeline-trailsport-117-660c4ee75bd07.jpg?crop=0.901xw:0.674xh;0.0537xw,0.243xh&resize=1200:*' }
    ];

    // affiche dans la fenetre
    // newVehicles.forEach(vehicle => {
    //     console.log(vehicle.image);
    // });

    // Pour chaque nouvelle voiture, créez une carte et ajoute  au conteneur
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
