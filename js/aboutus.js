const activeModalImage = document.querySelector('#documents-modal-image');
const modalDocument = document.querySelector('.documents-modal');
const imgDocuments = document.querySelectorAll('.documents-item img');

function displayImage(e) { 
    activeModalImage.src = e.target.src;
    modalDocument.style.display = 'block';
}

imgDocuments.forEach(img => img.addEventListener('click', displayImage)); 

function closeImage() {
    modalDocument.style.display = 'none';
}

modalDocument.addEventListener('click', closeImage);