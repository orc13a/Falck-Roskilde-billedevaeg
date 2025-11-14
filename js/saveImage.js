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

        // Fast, pæn scale – fx 3 (giver høj opløsning uden mærkelige afrundinger)
        // const scale = 3;

        html2canvas(frame, { scale: scale })
            .then((canvas) => {
                // document.body.appendChild(canvas);
                const dataUrl = canvas.toDataURL('image/png');
                return dataUrl;
            })
            .then(url => {
                const name = document.getElementById('nameInput').value;
                const number = document.getElementById('numberInput').value;

                const fileFullName = name.split(' ').join('_')

                const link = document.createElement('a');
                link.download = `${fileFullName}-${number}--Falck-Roskilde-billede.png`;
                link.href = url;
                link.click();
            });
    });
});