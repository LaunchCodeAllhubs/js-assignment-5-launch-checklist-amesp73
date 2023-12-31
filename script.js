// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let form = document.getElementById("launchForm");
   let list = document.getElementById("faultyItems");

   list.style.visibility = "hidden";

   form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;  
       
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
   });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function() {
       console.log(listedPlanets);
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       
       let name = chosenPlanet.name;
       let diameter = chosenPlanet.diamter;
       let star = chosenPlanet.star;
       let distance = chosenPlanet.distance;
       let moons = chosenPlanet.moons;
       let imageUrl = chosenPlanet.image;

       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
       
   })
   

});