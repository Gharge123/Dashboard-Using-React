// Get references to elements
const imageInput = document.getElementById('imageInput');
const uploadedImage = document.getElementById('uploadedImage');
const textInput = document.getElementById('textInput');
const textOverlay = document.getElementById('textOverlay');
const generateButton = document.getElementById('generateButton');

// Event listener for image upload
imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        uploadedImage.src = reader.result;
    }

    reader.readAsDataURL(file);
});

// Event listener for generating image with text overlay
generateButton.addEventListener('click', function() {
    textOverlay.innerText = textInput.value;
});

