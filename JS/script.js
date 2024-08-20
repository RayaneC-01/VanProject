
// Attend que le DOM soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {

    // //vérifier dans le mail contient "@" ou se termine".com"
    // let email_form = document.getElementById("email").value;
    // //console.log(email_form);
    // if (email_form.indexOf("@") === -1 || !email_form.endsWith(".com")) {
    //     alert("L'adresse e-mail doit contenir @ et se terminer par .com .");
    //     event.preventDefault();
    //     return;
    // }

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
            type: 'pickup',
            name: 'Toyota Hilux',
            description: 'Description du Toyota Hilux.',
            image: 'https://scene7.toyota.eu/is/image/toyotaeurope/toyota-hilux-2020-gallery-03-full_tcm-18-2017452?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0',
            link: 'https://www.toyota.fr/vehicules-neufs/hilux'
        },
        {
            type: 'pickup',
            name: 'Nissan Navara',
            description: 'Description du Nissan Navara.',
            image: 'https://images.caradisiac.com/logos-ref/modele/modele--nissan-navara-3/S7-modele--nissan-navara-3.jpg',
            link: 'https://www.caradisiac.com/modele--nissan-navara-3/'
        },
        {
            type: 'pickup',
            name: 'Volkswagen Amarok',
            description: 'Description du Volkswagen Amarok.',
            image: 'https://www.automobile-magazine.fr/asset/cms/840x394/6353/config/6047/ce-restylage-de-lamarok-1-ne-transfigure-pas-vraiment-la-plastique-musclee-de-ce-beau-bebe.jpg',
            link: 'https://www.volkswagen-nutzfahrzeuge.de/de/modelle/amarok.html'
        },
        {
            type: 'pickup',
            name: 'GMC Sierra 1500',
            description: 'Description du GMC Sierra 1500.',
            image: 'https://www.gmccanada.ca/content/dam/gmc/na/ca/en/index/trucks/01-images/2023-sierra-1500-lg-23PGSRLD00095.jpg?imwidth=1200',
            link: 'https://www.gmccanada.ca/fr/trucks'
        },
        {
            type: 'pickup',
            name: 'GMC Canyon AT4X',
            description: 'Description du  Canyon AT4X.',
            image: 'https://www.gmccanada.ca/content/dam/gmc/na/ca/en/index/trucks/2024-canyon/featured-edition/2024-canyon-overview-at4x-aev-edition-1920x1200-24PGCN00419.jpg?imwidth=600',
            link: 'https://www.gmccanada.ca/fr/trucks/canyon'
        },
        {
            type: 'pickup',
            name: 'Mercedes-Benz X-Class',
            description: 'Description du Mercedes-Benz X-Class.',
            image: 'https://images.clickdealer.co.uk/vehicles/5254/5254336/large1/124197960.jpg',
            link: 'https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/x-class/x-class-pickup/explore.html'
        },
        {
            type: 'pickup',
            name: 'Chevrolet Colorado',
            description: 'Description du Chevrolet Colorado.',
            image: 'https://img.sm360.ca/images/article/groupe-dallaire/106587//2023-colorado-gal-ext-011667230712658.jpg',
            link: 'https://www.chevrolet.com/trucks/colorado'
        },
        {
            type: 'pickup',
            name: 'Ford F-150',
            description: 'Description du Ford F-150.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoCeaM4_fm4LSMptwstILyMdGkNxGULJYXXlcxmHN8A&s',
            link: 'https://www.ford.com/trucks/f150/'
        },

        {
            type: 'pickup',
            name: 'Chevrolet Tahoe',
            description: 'Description du Chevrolet Tahoe',
            image: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/tahoe/gallery/2024-tahoe-gallery-04.png?imwidth=419',
            link: 'https://www.chevrolet.com/suvs/tahoe'
        },

        {
            type: 'pickup',
            name: 'Jeep Gladiator',
            description: 'Description du Jeep Gladiator.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J2BSUw1--u3WYTFvnFoTeBBBBn5RYzT36_puMv1bnA&s',
            link: 'https://www.jeep.com/gladiator.html'
        },
        {
            type: 'pickup',
            name: 'Honda Ridgeline',
            description: 'Description du Honda Ridgeline.',
            image: 'https://hips.hearstapps.com/hmg-prod/images/2024-honda-ridgeline-trailsport-117-660c4ee75bd07.jpg?crop=0.901xw:0.674xh;0.0537xw,0.243xh&resize=1200:*',
            link: 'https://automobiles.honda.com/ridgeline'
        },
        {
            type: 'pickup',
            name: '2024 Chevrolet Tahoe',
            description: 'Description du Chevrolet Tahoe.',
            image: 'https://www.motortrend.com/uploads/2023/12/023-2024-Chevrolet-Tahoe-Z71-front-view.jpg?fit=around%7C875:492',
            link: 'https://www.motortrend.com/cars/chevrolet/tahoe/2024/photos/'
        },
        {
            type: 'pickup',
            name: '2024 Jeep Grand Cherokee',
            description: 'Description du Chevrolet Tahoe.',
            image: 'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2023/grand-cherokee/vlp/desktop/my24-jeep-grand-cherokee-vlp-hero-awards-v2-desktop.jpg',
            link: 'https://www.jeep.com/grand-cherokee.html'
        },
        {
            type: 'pickup',
            name: '2024 Toyota Tacoma',
            description: 'Description du Toyota Tacoma.',
            image: 'https://media.ed.edmunds-media.com/toyota/tacoma/2024/oem/2024_toyota_tacoma_crew-cab-pickup_limited_fq_oem_4_815x543.jpg',
            link: 'https://www.edmunds.com/toyota/tacoma/'
        },
        {
            type: 'pickup',
            name: 'Ford Econoline (E-Series)',
            description: 'Description du Ford Econoline (E-Series).',
            image: 'https://www.contravans.com/wp-content/uploads/2023/10/IMG_E3484-1536x1152.jpg',
            link: 'https://www.contravans.com/ford-econoline-campervan-custom/'
        },
        {
            type: 'pickup',
            name: 'Mitsubishi L200',
            description: 'Description du Mitsubishi L200.',
            image: 'https://sf2.autoplus.fr/wp-content/uploads/autoplus/2022/12/1-89.jpg',
            link: 'https://www.dna.fr/magazine-automobile/2023/10/16/pick-up-le-nouveau-mitsubishi-l200-deja-distingue'
        },
        {
            type: 'van',

            name: 'Hymer Exsis-i 474', description: 'Description du Hymer Exsis-i 474.', image: 'https://www.campingcarlesite.com/wp-content/uploads/2022/05/2022-Integral-Hymer-Exsis-i-474-07.jpg', link: 'https://www.campingcarlesite.com/essai-camping-car/54177-hymer-exsis-i-474-les-atouts-dun-integral-dans-un-petit-format-664-m'
        },
        {
            type: 'van',

            name: 'Ford Transit 2T', description: 'Description du Ford Transit 2T.', image: 'https://www.vanlifemag.fr/wp-content/uploads/2022/06/dethleffs-590c-001-e1675940818135-768x432.jpg', link: 'https://www.vanlifemag.fr/presentationessais/ford-transit/66425'
        },
        {
            type: 'van',

            name: 'Ford Transit Custom Nugget', description: 'Description du Ford Transit Custom Nugget.', image: 'https://live.dealer-asset.co/images/fr4/product/file/TransitCustomNugget-638489450688005219.jpg?s=2000', link: 'https://www.motor1.com/news/683268/2024-ford-transit-custom-nugget/'
        },
        {
            type: 'van',

            name: 'Mercedes Sprinter', description: 'Description du Mercedes Sprinter.', image: 'https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610141260192-BV2N87XMRPF2QEFH5EMY/Copy+of+Toops_Sprinter+144-26.jpg?format=1500w', link: 'https://vanlifecustoms.com/chads144sprinter'
        },
        {
            type: 'van',

            name: 'Volkswagen Transporter', description: 'Description du Volkswagen Transporter.', image: 'https://www.ecowagon.co.uk/wp-content/uploads/2020/04/Custom-VW-T6-Specialists-UK.jpg', link: 'https://www.ecowagon.co.uk/custom-van-options/'
        },
        {
            type: 'van',

            name: 'Fiat Ducato', description: 'Description du Fiat Ducato.', image: 'https://www.fiatcamper.com/content/dam/camper/cross/product/fiat-ducato-camper-van/modular-dimensions/cover-2.jpg', link: 'https://www.fiatcamper.com/fr/produit/Fiat-ducato-camper-van'
        },
        {
            type: 'van',

            name: 'Renault Master', description: 'Description du Renault Master.', image: 'https://www.vanlifemag.fr/wp-content/uploads/2023/07/font-vendome-leader-camp-elegance1.jpg', link: 'https://www.vanlifemag.fr/presentationessais/font-vendome-nos-photos-exclusives-des-nouveaux-camper-vans-elegance/69261'
        },
        {
            type: 'van',

            name: 'Peugeot Boxer', description: 'Description du Peugeot Boxer.', image: 'https://www.transitcenter.fr/graphics/new_brands/Boxerglowne.jpg', link: 'https://www.transitcenter.fr/peugeot-boxer.php'
        },

        {
            type: 'van',

            name: 'Nissan NV300',
            description: 'Description du Nissan NV300',
            image: 'https://assets.quirkycampers.com/uk/wp-content/uploads/2022/04/20220416_142859-1-1024x768.jpg',
            link: 'https://www.quirkycampers.com/uk/for-sale/converted-nissan-nv300/'
        },
        {
            type: 'van',
            name: 'Ford Econoline',
            description: 'Description du Nissan NV300 Ford Ecoline',
            image: 'https://www.contravans.com/wp-content/uploads/2023/10/IMG_E3484-1536x1152.jpg',
            link: 'https://www.contravans.com/ford-econoline-campervan-custom/'
        },

        {
            type: 'sport',
            name: 'Chevrolet corvette Z06 ',
            description: 'Description de la Corvette Z06',
            image: 'https://images.caradisiac.com/images/0/0/6/3/200063/S1-chevrolet-explique-en-video-comment-roder-la-corvette-z06-740960.jpg',
            link: 'https://www.caradisiac.com/chevrolet-explique-en-video-pourquoi-roder-la-corvette-z06-200063.htm'
        }
    ];

    const successMessage = document.querySelector('.alert-success');
    if (successMessage) {
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }

    const errorMessage = document.querySelector('.alert-danger');
    if (errorMessage) {
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    // Fonction pour afficher les véhicules filtrés
    function displayVehicles(vehicles) {
        vehicleContainer.innerHTML = ''; // Efface le conteneur des véhicules
        vehicles.forEach(vehicle => {
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
            vehicleContainer.insertAdjacentHTML('beforeend', card);
        });
    }

    // Affiche tous les véhicules au chargement de la page
    displayVehicles(newVehicles);

    // Gestionnaire d'événements pour le bouton de filtrage
    document.getElementById('filterButton').addEventListener('click', function () {
        const selectedType = document.getElementById('vehicleType').value;
        let filteredVehicles;
        if (selectedType === 'all') {
            filteredVehicles = newVehicles; // Affiche tous les véhicules si "Tous les types" est sélectionné
        } else {
            filteredVehicles = newVehicles.filter(vehicle => vehicle.type === selectedType); // Filtre les véhicules par type
        }
        displayVehicles(filteredVehicles); // Met à jour l'affichage des véhicules
    });

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

    // Add an event listener to the window object that calls the scrollFunc function whenever the user scrolls
    window.addEventListener("scroll", scrollFunction);
});

// Fonction qui est appelée lorsque l'utilisateur fait défiler la page
window.onscroll = function () {
    scrollFunction();
};

// Fonction qui gère l'affichage du bouton "To Top" en fonction de la position de défilement
function scrollFunction() {
    // Récupère l'élément du bouton "To Top" par son ID
    const toTopButton = document.getElementById("toTopButton");

    // Vérifie si l'utilisateur a défilé vers le bas de plus de 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si oui, affiche le bouton en le stylisant pour qu'il soit visible
        toTopButton.style.display = "block";
    } else {
        // Sinon, cache le bouton
        toTopButton.style.display = "none";
    }
}

// Ajoute un gestionnaire d'événement au bouton "To Top" pour gérer les clics
document.getElementById("toTopButton").onclick = function () {
    // Lorsque le bouton est cliqué, fait défiler la page jusqu'en haut
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
};
