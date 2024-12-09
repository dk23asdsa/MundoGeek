        // Aktualisiert die Höhe dynamisch
        const heightRange = document.getElementById('height-range');
        const heightValue = document.getElementById('height-value');
        heightRange.addEventListener('input', () => {
            heightValue.textContent = heightRange.value;
        });            