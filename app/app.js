let plantCount = 0;

function addPlant() {
    plantCount++;
    const plantContainer = document.createElement('div');
    plantContainer.id = `plant-${plantCount}`;
    plantContainer.classList.add('plant-container');
    plantContainer.innerHTML = `
        <h2>Plant ${plantCount}</h2>
        <div id="plant-status-${plantCount}">
            <img id="plant-image-${plantCount}" src="images/happyPlant.png" alt="Plant Image">
            <p id="moisture-level-${plantCount}">Moisture Level: --</p>
        </div>
        <button onclick="updateMoistureLevel(${plantCount})">Check Moisture Level</button>
    `;
    document.getElementById('plants-container').appendChild(plantContainer);
}

function updateMoistureLevel(plantId) {
    // Generate a random number between 1 and 100
    const moistureLevel = Math.floor(Math.random() * 100) + 1;

    // Update the text to show the current moisture level
    document.getElementById(`moisture-level-${plantId}`).innerText = `Moisture Level: ${moistureLevel}%`;

    // Update the image based on the moisture level
    const plantImage = document.getElementById(`plant-image-${plantId}`);

    if (moistureLevel > 75) {
        plantImage.src = "images/happyPlant.png";
        plantImage.alt = "High Moisture Plant";
    } else if (moistureLevel > 50) {
        plantImage.src = "images/mehPlant.png";
        plantImage.alt = "Medium Moisture Plant";
    } else if (moistureLevel > 25) {
        plantImage.src = "images/badPlant.png";
        plantImage.alt = "Low Moisture Plant";
    } else {
        plantImage.src = "images/sadPlant.png";
        plantImage.alt = "Very Low Moisture Plant";
    }
}
