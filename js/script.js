let vacationType = "";
let lowerCaseVacationType = "";
let destination;
let groupSize;
let via;
let result;


vacationType = prompt("Welcome to Travel Circus! Let's plan a trip! What kind of vacation theme sounds fun to you: \n\nMusical, Tropical, or Adventurous? \n \nIn lower-case, please type your preference below...");
lowerCaseVacationType = vacationType.toLowerCase();

groupSize = prompt ("Wow, what an amazing choice! \n Including you, how many people will be traveling?");

if (lowerCaseVacationType === "musical") {
    destination = "to New Orleans";
} else if (lowerCaseVacationType === "tropical") {
    destination = "on a beach vacation in Mexico";
} else if (lowerCaseVacationType === "adventurous"){
    destination = "white water rafting in the Grand Canyon";
}

if (groupSize > 0 && groupSize<= 2) {
    via = "First Class";
} else if (groupSize > 2 && groupSize <= 5) {
    via = "Helicopter";
} else if (groupSize > 5) {
    via = "Charter Flight";
}

result = "Alright, you have given me quite a bit of information ~ so let's recap. You are looking for a " + vacationType + " theme, so I would recommend you go " + destination + "! \n\n But the trick now is to figure out how to get you there? \n\n I see that you have " + groupSize + " people traveling with you, so SUUUURRVEYYY SAYS: travel by " + via + "! How exciting!!";

console.log(result);