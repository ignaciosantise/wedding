function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('i');
    if (name) {
        // Decode the name and replace '+' with spaces
        return decodeURIComponent(name.replace(/\+/g, ' '));
    }
    return '';
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('guest-name');
    if (nameInput) {
        nameInput.value = getUrlParams();
    }
}); 