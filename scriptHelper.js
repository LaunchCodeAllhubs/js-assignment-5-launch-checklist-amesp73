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
    } else if (typeof testInput === "number") {
        return "Is a Number";
    } else if (isNaN(testInput)) {
        return "Is Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is Not a Number") {
        alert("Pilot name must be an alphabetical character.");
   } else if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is Not a Number") {
        alert("Copilot name must be an aplhabetical character.");
   } else if (validateInput(fuelLevel) === "Is Not a Number") {
        alert("Fuel Level must be a numerical digit.");
   } else if (validateInput(cargoLevel) === "Is Not a Number") {
        alert("Cargo Level must be a numerical digit.");
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
