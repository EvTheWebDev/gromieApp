let plantCount = 0;

function showModal() {
    document.getElementById('plant-size-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('plant-size-modal').style.display = 'none';
}

function addPlant(size) {
    plantCount++;
    const plantContainer = document.createElement('div');
    plantContainer.id = `plant-${plantCount}`;
    plantContainer.classList.add('plant-container');
    plantContainer.innerHTML = `
        <h2>Plant ${plantCount}</h2>
        <div id="plant-status-${plantCount}">
            <div id="plant-image-${plantCount}" class="plant-image" style="background-image: url('');"></div>
            <p id="moisture-level-${plantCount}">Moisture Level: --</p>
        </div>
        <button onclick="updateMoistureLevel(${plantCount}, '${size}')">Check Moisture Level</button>
    `;
    document.getElementById('plants-container').appendChild(plantContainer);
    closeModal();
    updateMoistureLevel(plantCount, size);
}

function updateMoistureLevel(plantId, size) {
    // Generate a random number between 1 and 100
    const moistureLevel = Math.floor(Math.random() * 100) + 1;

    // Update the text to show the current moisture level
    document.getElementById(`moisture-level-${plantId}`).innerText = `Moisture Level: ${moistureLevel}%`;

    // Update the image based on the moisture level
    const plantImage = document.getElementById(`plant-image-${plantId}`);

    if (moistureLevel > 75) {
        plantImage.style.backgroundImage = `url('images/${size}/happyPlant.png')`;
        plantImage.alt = "High Moisture Plant";
    } else if (moistureLevel > 50) {
        plantImage.style.backgroundImage = `url('images/${size}/mehPlant.png')`;
        plantImage.alt = "Medium Moisture Plant";
    } else if (moistureLevel > 25) {
        plantImage.style.backgroundImage = `url('images/${size}/badPlant.png')`;
        plantImage.alt = "Low Moisture Plant";
    } else {
        plantImage.style.backgroundImage = `url('images/${size}/sadPlant.png')`;
        plantImage.alt = "Very Low Moisture Plant";
    }
}
