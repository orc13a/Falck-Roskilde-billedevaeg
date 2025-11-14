window.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('imageSave');   // "Gem billede"-knappen
    const frame = document.getElementById('pictureFrame');      // div#pictureFrame

    if (!saveButton || !frame) return;

    saveButton.addEventListener('click', async () => {
        // Mål den faktiske størrelse på skærmen
        const rect = frame.getBoundingClientRect();

        // Ønsket outputstørrelse ca. 13x18 cm ved ~300 dpi
        const targetWidth = 1536;   // px (≈ 13 cm)
        const targetHeight = 2126;  // px (≈ 18 cm)

        const scaleX = targetWidth / rect.width;
        const scaleY = targetHeight / rect.height;
        const scale = Math.min(scaleX, scaleY);

        html2canvas(frame, { scale: scale })
            .then((canvas) => {
                // document.body.appendChild(canvas);
                const dataUrl = canvas.toDataURL('image/png');
                return dataUrl;
            })
            .then(url => {
                const link = document.createElement('a');
                link.download = 'falck-roskilde-billede.png';
                link.href = url;
                link.click();
            });

        // const canvas = await html2canvas(frame, {
        //     scale: scale,
        //     backgroundColor: '#ffffff',
        //     useCORS: true
        // });

        // const dataUrl = canvas.toDataURL('image/png');

        // const link = document.createElement('a');
        // link.download = 'falck-roskilde-billede.png';
        // link.href = dataUrl;
        // link.click();
    });
});

// window.addEventListener('DOMContentLoaded', () => {
//     const saveButton = document.getElementById('imageSave');
//     const frame = document.getElementById('pictureFrame');

//     saveButton.addEventListener('click', async () => {
//         html2canvas(frame).then(function (canvas) {
//             document.body.appendChild(canvas);
//         });
//     });
// });