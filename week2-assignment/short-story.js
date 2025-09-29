//Ask for user input
let name = prompt("What is your name?");

//Boolean
let onTime = confirm ("Did you wake up on time? Click OK for Yes, Cancel for No.");

//Other user input
let breakfast = prompt("What did you eat for breakfast?");
let activity = prompt("Waht do yoo usually do after class?");

//Story 
let story = "Good Morning"+ name + "!";

// Use boolean to change the day
if (onTime) {
  story += "You woke up early and had plenty of time to get ready. ";
} else {
  story += "Oh no! You overslept and had to run to class without getting ready. ";
}

// Continue story
story += "For breakfast, you had " + breakfast + ". ";
story += "After class, you decided to " + activity + ". ";

// End of day
story += "It was an interesting day for you, " + name + "!";

console.log(story);


