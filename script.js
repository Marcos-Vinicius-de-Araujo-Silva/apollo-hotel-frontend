document.addEventListener('DOMContentLoaded', () => {
    const btnReserva = document.getElementById('btnReserva');

    if (btnReserva) {
        btnReserva.addEventListener('click', () => {
            alert('Redirecionando para o sistema de reservas...');
            // Aqui você poderia usar: window.location.href = '/reservas';
        });
    }
});