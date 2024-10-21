const bulbContainer = document.getElementById('bulbContainer');

document.getElementById('addBulbBtn').addEventListener('click', function() {

    const numBulbs = parseInt(document.getElementById('numBulbs').value);
    

    for (let i = 0; i < numBulbs; i++) {
        
        const bulbDiv = document.createElement('div');
        
        const image=document.createElement('img');
        image.src="./Light_Bulb_PNG_Clip_Art-2102.png"
        bulbDiv.appendChild(image);
        image.classList.add('newstyle')
    

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                image.src="./Yellow_Light_Bulb_PNG_Clip_Art-2108.png"
            } else {
                image.src="./Light_Bulb_PNG_Clip_Art-2102.png"
            }
        });

       const label = document.createElement('label');
        label.innerText = 'Light Bulb';

        const bulbWrapper = document.createElement('div');
        bulbWrapper.appendChild(bulbDiv);
        bulbWrapper.appendChild(checkbox);
        bulbWrapper.appendChild(label);

        bulbContainer.appendChild(bulbWrapper);
    }
});