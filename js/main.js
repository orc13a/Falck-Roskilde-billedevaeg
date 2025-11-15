console.log('v1.1.0');


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

    autoResizeName();
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

function autoResizeName() {
    const nameEl = document.getElementById('name');
    const container = document.querySelector('.nameContainer');

    if (!nameEl || !container) return;

    const maxFont = 38.5;   // standard størrelse
    const minFont = 16;     // laveste størrelse

    // start altid ved max, så den vokser igen hvis navnet bliver kortere
    let fontSize = maxFont;
    nameEl.style.fontSize = fontSize + 'px';
    nameEl.style.whiteSpace = 'nowrap'; // vigtig: undgå linjeskift, så vi kan måle bredden korrekt

    // Loop indtil teksten passer indenfor containerens bredde
    while ((nameEl.scrollWidth + 56) > container.clientWidth && fontSize > minFont) {
        fontSize -= 1;
        nameEl.style.fontSize = fontSize + 'px';
    }
}

// 
// Image
// 

// const imageInput = document.getElementById('imageInput');
// const imageDisplay = document.getElementById('imageDisplay');

// imageInput.addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             imageDisplay.src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// });


// document.getElementById('file').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (!file) return;

//     // const noPicture = document.getElementById('noPictureImage');
//     // noPicture.style.display = 'none';

//     const reader = new FileReader();
//     reader.onload = function (e) {
//         const img = document.getElementById('imageDisplay');

//         img.src = e.target.result;
//         img.style.display = 'block'; // viser billedet når det er uploadet
//     };
//     reader.readAsDataURL(file);
// });

document.getElementById('file').addEventListener('change', function (event) {
    const noPicture = document.getElementById('noPictureImage');
    noPicture.style.display = 'none';

    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.getElementById('imageDisplay');

        img.src = e.target.result;
        img.style.display = 'block'; // vis billedet
    };

    reader.readAsDataURL(file);
});