document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const vehicleName = this.parentNode.querySelector('h2').innerText;
            const vehicleDescription = this.parentNode.querySelector('p').innerText;

            swal({
                title: vehicleName,
                text: vehicleDescription,
                icon: 'info',
                button: 'OK'
            });
        });
    });
});
