document.addEventListener('DOMContentLoaded', function() {
    // Copyright year
    document.querySelector('footer p:first-child').innerHTML = 
        `<i class="fas fa-pen"></i> © ${new Date().getFullYear()} Jean Ntampaka, Rwanda <i class="fas fa-pen"></i>`;

    // Last modified date
    document.getElementById('lastModified').textContent = document.lastModified;
});