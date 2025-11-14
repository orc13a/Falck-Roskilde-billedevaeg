console.log('v1.0.2');


const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('name');
const numberInput = document.getElementById('numberInput');
const numberDisplay = document.getElementById('number');

nameInput.addEventListener('input', (value) => {
    const input = value.target.value;

    if (input.length < 1) {
        nameDisplay.style.color = '#66172A'
        nameDisplay.innerHTML = '-';
    } else {
        nameDisplay.style.color = '#ffffff'
        nameDisplay.innerHTML = input;
    }
});

numberInput.addEventListener('input', (value) => {
    const input = value.target.value;

    if (input.length < 1) {
        numberDisplay.style.color = '#66172A'
        numberDisplay.innerHTML = '-';
    } else {
        numberDisplay.style.color = '#ffffff'
        numberDisplay.innerHTML = input;
    }
});

numberInput.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};

// 
// Image
// 

const imageInput = document.getElementById('imageInput');
const imageDisplay = document.getElementById('imageDisplay');

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageDisplay.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById('file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.getElementById('imageDisplay');
        const noPicture = document.getElementById('noPictureImage');

        noPicture.style.display = 'none';

        img.src = e.target.result;
        img.style.display = 'block'; // viser billedet når det er uploadet
    };
    reader.readAsDataURL(file);
});