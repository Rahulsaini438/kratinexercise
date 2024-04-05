// script.js
document.addEventListener('DOMContentLoaded', function () {
    const addMedBtn = document.getElementById('addMedBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const saveMedBtn = document.getElementById('saveMedBtn');
    const medList = document.getElementById('medList');

    addMedBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    saveMedBtn.addEventListener('click', function () {
        const medName = document.getElementById('medName').value;
        const medTime = document.getElementById('medTime').value;

        if (medName && medTime) {
            const medItem = document.createElement('div');
            medItem.classList.add('med-item');
            medItem.innerHTML = `
                <p>${medName}</p>
                <p>${medTime}</p>
            `;
            medList.appendChild(medItem);
            modal.style.display = 'none';
        } else {
            alert('Please fill out all fields.');
        }
    });
});

function selectImage() {
    document.getElementById('imageInput').click();
}

function readText() {
    // Functionality to read text from image or input text and display in outputText div
    // Implementation would require OCR library or API integration
    // Once text is retrieved, display it in #outputText
}
