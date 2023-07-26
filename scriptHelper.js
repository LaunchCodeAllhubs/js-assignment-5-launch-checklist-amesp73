// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoLevelStatus = document.getElementById("cargoStatus");

    let launchStatus = document.getElementById("launchStatus");
    // let list = document.getElementById("faultyItems");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
        return;
    } else if (validateInput(pilot) === "Is a Number") {
        // Pilot input error, bail early
        alert("Pilot name must be alphabetical characters.");
        return;
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Co-pilot name must be alphabetical characters.");
        return;
    } else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level must be numerical digits.");
        return;
    } else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Fuel Level and Cargo Mass must be numerical digits.");
        return;
    } else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }


    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelLevelStatus.innerHTML = "Not enough fuel for the journey.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoLevelStatus.innerHTML = "There is too much mass for the shuttle to take off.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
    } else {
        list.style.visibility = "visible";
        fuelLevelStatus.innerHTML = "Fuel level high enough for takeoff";
        cargoLevelStatus.innerHTML = "Cargo mass low enough for takeoff";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#419F6A";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
