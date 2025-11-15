// function autoFitName() {
//     const nameEl = document.getElementById('name');
//     if (!nameEl) return;

//     const containerWidth = nameEl.parentElement.clientWidth;

//     // Startværdien (samme som dit design)
//     let fontSize = 120;
//     nameEl.style.fontSize = fontSize + "px";
//     nameEl.style.whiteSpace = "nowrap";

//     // Reduce font-size until text fits
//     while (nameEl.scrollWidth > containerWidth && fontSize > 20) {
//         fontSize -= 2;
//         nameEl.style.fontSize = fontSize + "px";
//     }
// }

// // Kør når man skriver navn
// nameInput.addEventListener('input', () => {
//     autoFitName();
// });

// // Kør efter billede-load også (så størrelsen passer altid)
// window.addEventListener('load', autoFitName);
// window.addEventListener('resize', autoFitName);

function autoResizeName() {
    const nameEl = document.getElementById('name');
    const container = document.querySelector('.nameContainer');

    const maxFont = 38.5;     // standard størrelse
    const minFont = 16;       // laveste størrelse (kan ændres)
    let fontSize = maxFont;

    nameEl.style.fontSize = fontSize + 'px';

    // Loop indtil tekst passer i containeren
    while (nameEl.scrollWidth > container.clientWidth && fontSize > minFont) {
        fontSize -= 1;
        nameEl.style.fontSize = fontSize + 'px';
    }
}