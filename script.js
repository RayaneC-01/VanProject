// Attend que le DOM soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {

    // Sélectionne l'élément avec l'ID "vehicles" dans le DOM
    const vehicleContainer = document.getElementById('vehicles');

    // Vérifie si l'élément vehicleContainer existe
    if (!vehicleContainer) {
        // Affiche un message d'erreur dans la console si l'élément n'est pas trouvé
        console.error('Element with ID "vehicles" not found');
        // Sort de la fonction si l'élément n'est pas trouvé
        return;
    }


    // Les données des nouvelles voitures
    const newVehicles = [
        // Liste des voitures avec leurs propriétés (nom, description, image et lien)
        {
            name: 'Ford Ranger',
            description: 'Description du Ford Ranger.',
            image: 'https://www.ford.fr/content/dam/guxeu/rhd/central/cvs/all-new-ranger-2022/features/ford-ranger-eu-P703_EU_LHD_TREMOR-16x9-2160x1215.jpg.renditions.original.png',
            link: 'https://www.ford.fr/utilitaires-et-pick-up/nouveau-ranger'
        },
        {
            name: 'Toyota Hilux',
            description: 'Description du Toyota Hilux.',
            image: 'https://scene7.toyota.eu/is/image/toyotaeurope/toyota-hilux-2020-gallery-03-full_tcm-18-2017452?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0',
            link: 'https://www.toyota.fr/vehicules-neufs/hilux'
        },
        {
            name: 'Nissan Navara',
            description: 'Description du Nissan Navara.',
            image: 'https://images.caradisiac.com/logos-ref/modele/modele--nissan-navara-3/S7-modele--nissan-navara-3.jpg',
            link: 'https://www.nissan.co.uk/vehicles/new-vehicles/np300-navara.html'
        },
        {
            name: 'Volkswagen Amarok',
            description: 'Description du Volkswagen Amarok.',
            image: 'https://www.automobile-magazine.fr/asset/cms/840x394/6353/config/6047/ce-restylage-de-lamarok-1-ne-transfigure-pas-vraiment-la-plastique-musclee-de-ce-beau-bebe.jpg',
            link: 'https://www.volkswagen-nutzfahrzeuge.de/de/modelle/amarok.html'
        },
        {
            name: 'Mercedes-Benz X-Class',
            description: 'Description du Mercedes-Benz X-Class.',
            image: 'https://images.clickdealer.co.uk/vehicles/5254/5254336/large1/124197960.jpg',
            link: 'https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/x-class/x-class-pickup/explore.html'
        },
        {
            name: 'Chevrolet Colorado',
            description: 'Description du Chevrolet Colorado.',
            image: 'https://img.sm360.ca/images/article/groupe-dallaire/106587//2023-colorado-gal-ext-011667230712658.jpg',
            link: 'https://www.chevrolet.com/trucks/colorado-small-truck'
        },
        {
            name: 'Ford F-150',
            description: 'Description du Ford F-150.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoCeaM4_fm4LSMptwstILyMdGkNxGULJYXXlcxmHN8A&s',
            link: 'https://www.ford.com/trucks/f150/'
        },
        {
            name: 'Jeep Gladiator',
            description: 'Description du Jeep Gladiator.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J2BSUw1--u3WYTFvnFoTeBBBBn5RYzT36_puMv1bnA&s',
            link: 'https://www.jeep.com/gladiator.html'
        },
        {
            name: 'Honda Ridgeline',
            description: 'Description du Honda Ridgeline.',
            image: 'https://hips.hearstapps.com/hmg-prod/images/2024-honda-ridgeline-trailsport-117-660c4ee75bd07.jpg?crop=0.901xw:0.674xh;0.0537xw,0.243xh&resize=1200:*',
            link: 'https://automobiles.honda.com/ridgeline'
        },
        {
            name: 'Mitsubishi L200',
            description: 'Description du Mitsubishi L200.',
            image: 'https://sf2.autoplus.fr/wp-content/uploads/autoplus/2022/12/1-89.jpg',
            link: 'Lien de la page pour le Mitsubishi L200'
        },
        {
            name: 'Hymer Exsis-i 474',
            description: 'Description du Hymer Exsis-i 474.',
            image: 'https://www.campingcarlesite.com/wp-content/uploads/2022/05/2022-Integral-Hymer-Exsis-i-474-07.jpg',
            link: 'https://www.campingcarlesite.com/essai-camping-car/54177-hymer-exsis-i-474-les-atouts-dun-integral-dans-un-petit-format-664-m'
        },
        {
            name: 'Ford Transit 2T',
            description: 'Description du Ford Transit 2T.',
            image: 'https://www.vanlifemag.fr/wp-content/uploads/2022/06/dethleffs-590c-001-e1675940818135-768x432.jpg',
            link: 'https://www.vanlifemag.fr/presentationessais/ford-transit/66425'
        },
        {
            name: 'Ford Transit Custom Nugget',
            description: 'Description du Ford Transit Custom Nugget.',
            image: 'https://live.dealer-asset.co/images/fr4/product/file/TransitCustomNugget-638489450688005219.jpg?s=2000',
            link: 'https://www.motor1.com/news/683268/2024-ford-transit-custom-nugget/'
        },
        {
            name: 'Mercedes Sprinter',
            description: 'Description du Mercedes Sprinter.',
            image: 'https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610141260192-BV2N87XMRPF2QEFH5EMY/Copy+of+Toops_Sprinter+144-26.jpg?format=1500w',
            link: 'https://vanlifecustoms.com/chads144sprinter'
        },
        {
            name: 'Volkswagen Transporter',
            description: 'Description du Volkswagen Transporter.',
            image: 'https://www.ecowagon.co.uk/wp-content/uploads/2020/04/Custom-VW-T6-Specialists-UK.jpg',
            link: 'https://www.ecowagon.co.uk/custom-van-options/'
        },
        {
            name: 'Fiat Ducato',
            description: 'Description du Fiat Ducato.',
            image: 'https://www.fiatcamper.com/content/dam/camper/cross/product/fiat-ducato-camper-van/modular-dimensions/cover-2.jpg',
            link: 'https://www.fiatcamper.com/fr/produit/Fiat-ducato-camper-van'
        },
        {
            name: 'Renault Master',
            description: 'Description du Renault Master.',
            image: 'https://www.vanlifemag.fr/wp-content/uploads/2023/07/font-vendome-leader-camp-elegance1.jpg',
            link: 'https://www.vanlifemag.fr/presentationessais/font-vendome-nos-photos-exclusives-des-nouveaux-camper-vans-elegance/69261'
        },
        {
            name: 'Peugeot Boxer',
            description: 'Description du Peugeot Boxer.',
            image: 'https://www.transitcenter.fr/graphics/new_brands/Boxerglowne.jpg',
            link: 'https://www.transitcenter.fr/peugeot-boxer.php'
        },
        {
            name: 'Citroën Jumper',
            description: 'Description du Citroën Jumper.',
            image: 'https://i.gaw.to/vehicles/photos/40/24/402483_2020_citroen_jumper.jpg',
            link: 'https://www.citroen.fr/vehicules-utilitaires/citroen-jumper.html'
        },
        {
            name: 'Nissan NV300',
            description: 'Description du Nissan NV300.',
            image: 'https://assets.quirkycampers.com/uk/wp-content/uploads/2022/04/20220416_142859-1-1024x768.jpg',
            link: 'https://www.quirkycampers.com/uk/for-sale/converted-nissan-nv300/'
        },
        {
            name: 'Iveco Daily',
            description: 'Description du Iveco Daily.',
            image: 'https://cdn.motor1.com/images/mgl/jXk3W/s3/iveco-daily-2022.jpg',
            link: 'https://www.iveco.com/ivecobus/products/pages/new-daily-van.aspx'
        },
        {
            name: 'Ford Transit Custom',
            description: 'Description du Ford Transit Custom.',
            image: 'https://www.ford.co.uk/content/dam/guxeu/uk/showroom/vehicles/transit-custom/commercial/ford_transit_custom_gallery_04.jpg',
            link: 'https://www.ford.co.uk/vans-and-pickups/transit-custom/'
        },
        {
            name: 'Ford E-Transit',
            description: 'Description du Ford E-Transit.',
            image: 'https://media.ford.com/content/fordmedia/fna/us/en/news/2020/11/12/all-electric-ford-e-transit-to-power-a-new-era-of-business.html',
            link: 'https://www.ford.com/commercial-trucks/e-transit/'
        },
        {
            name: 'Ford Tourneo Custom',
            description: 'Description du Ford Tourneo Custom.',
            image: 'https://www.ford.co.uk/content/dam/guxeu/uk/showroom/vehicles/tourneo-custom/commercial/ford_tourneo_custom_gallery_03.jpg',
            link: 'https://www.ford.co.uk/cars/tourneo-custom/'
        },
        {
            name: 'Ford Nugget',
            description: 'Description du Ford Nugget.',
            image: 'https://www.ford.co.uk/content/dam/guxeu/uk/showroom/vehicles/nugget/commercial/ford_nugget_gallery_01.jpg',
            link: 'https://www.ford.co.uk/vans-and-pickups/transit-custom/nugget/'
        },
        {
            name: 'Ford Big Nugget',
            description: 'Description du Ford Big Nugget.',
            image: 'https://www.ford.co.uk/content/dam/guxeu/uk/showroom/vehicles/big-nugget/commercial/ford_big_nugget_gallery_01.jpg',
            link: 'https://www.ford.co.uk/vans-and-pickups/transit-custom/big-nugget/'
        },
        {
            name: 'Ford Transit Trail',
            description: 'Description du Ford Transit Trail.',
            image: 'https://www.ford.co.uk/content/dam/guxeu/uk/showroom/vehicles/transit-trail/commercial/ford_transit_trail_gallery_02.jpg',
            link: 'https://www.ford.co.uk/vans-and-pickups/transit-trail/'
        },
        {
            name: 'Ford Transit Courier',
            description: 'Description du Ford Transit Courier.',
            image: 'https://www.ford.co.uk/content/dam/guxeu/uk/showroom/vehicles/transit-courier/commercial/ford_transit_courier_gallery_02.jpg',
            link: 'https://www.ford.co.uk/vans-and-pickups/transit-courier/'
        },
        {
            name: 'Ford Econoline (E-Series)',
            description: 'Description du Ford Econoline (E-Series).',
            image: 'https://www.contravans.com/wp-content/uploads/2023/10/IMG_E3484-1536x1152.jpg',
            link: 'https://www.contravans.com/ford-econoline-campervan-custom/'
        },
        {
            name: 'Ford Club Wagon',
            description: 'Description du Ford Club Wagon.',
            image: 'https://media.ford.com/content/fordmedia/fna/us/en/news/2020/11/12/all-electric-ford-e-transit-to-power-a-new-era-of-business.html',
            link: 'https://www.ford.com/commercial-trucks/e-transit/'
        }
    ];

    // Pour chaque nouvelle voiture, créez une carte et ajoute  au conteneur
    // Début de la boucle forEach qui itère sur chaque objet véhicule dans le tableau newVehicles
    newVehicles.forEach(vehicle => {
        const card = `
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}">
                    <div class="card-body">
                        <h5 class="card-title">${vehicle.name}</h5>
                        <p class="card-text">${vehicle.description}</p>
                        <button class="btn btn-primary" data-link="${vehicle.link}">En savoir plus</button>
                    </div>
                </div>
            </div>
        `;
        // Insère la carte nouvellement créée dans le conteneur "vehicles" dans le DOM
        document.getElementById('vehicles').insertAdjacentHTML('beforeend', card);
        // Utilise insertAdjacentHTML pour insérer la carte HTML à la fin du contenu existant du conteneur "vehicles"

    }); // Fin de la boucle forEach

    // Ajoutez un gestionnaire d'événements aux nouveaux boutons après avoir ajouté les nouvelles cartes
    vehicleContainer.addEventListener('click', function (e) {
        // Début de l'écouteur d'événements 'click' sur le conteneur de véhicules

        if (e.target && e.target.classList.contains('btn')) {
            // Vérifie si l'élément cliqué est un bouton

            // Récupère le nom du véhicule à partir du titre de la carte parente de ce bouton
            let vehicleName = e.target.parentNode.querySelector('.card-title').innerText;

            // Récupère la description du véhicule à partir du texte de la carte parente de ce bouton
            let vehicleDescription = e.target.parentNode.querySelector('.card-text').innerText;

            // Récupère le lien du véhicule à partir de l'attribut data-link du bouton
            let vehicleLink = e.target.getAttribute('data-link');

            // Affiche une boîte de dialogue modale avec le nom, la description et un lien pour en savoir plus sur le véhicule
            Swal.fire({
                title: vehicleName, // Titre de la boîte de dialogue avec le nom du véhicule
                text: vehicleDescription, // Texte de la boîte de dialogue avec la description du véhicule
                html: `${vehicleDescription}<br><a href="${vehicleLink}" target="_blank">En savoir plus</a>`, // Contenu HTML de la boîte de dialogue avec la description et le lien du véhicule

                icon: 'info', // Icône de la boîte de dialogue (info)
                confirmButtonText: 'OK', // Texte du bouton de confirmation
            });
        }
    });

});
