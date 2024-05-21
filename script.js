document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const vehicleName = this.parentNode.querySelector('.card-title').innerText;
            const vehicleDescription = this.parentNode.querySelector('.card-text').innerText;
            Swal.fire({
                title: vehicleName,
                text: vehicleDescription,
                icon: 'info',
                button: 'OK'
            });
        });
    });
}); 