const draggableButton = document.getElementById('designer-element');
        const radioDropzone = document.getElementById('radio-dropzone');

        draggableButton.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', 'button'); // Set the data to be transferred
        });

        radioDropzone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow drop
        });

        radioDropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text/plain');
            if (data === 'button') {
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'radio-group';
                radioDropzone.appendChild(radioInput);
            }
        });