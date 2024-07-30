document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('pan-form');
    const panInput = document.getElementById('pan');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const panValue = panInput.value;

        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        if (!panPattern.test(panValue)) {
            errorMessage.textContent = "Invalid PAN Number";
        } else {
            errorMessage.textContent = "";
            alert("PAN number is valid");
        }
    });
});
