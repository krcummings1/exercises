
// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet");
var sonnetText = sonnet.innerHTML;
console.log(sonnetText);

// Find and output the starting position of the word "orphans"
var orphanIndex = sonnetText.indexOf("orphans")
console.log(orphanIndex);

// Output the number of characters in the sonnet
var sonnetLength = sonnetText.length;
console.log("sonnetLength", sonnetLength;

// Replace the first occurance of the string "winter" with "yuletide"
var sonnetUpdate = sonnetText.replace("winter", "yuletide");
console.log(sonnetUpdate); 

// Replace all occurances of the string "the" with "a large"
var sonnetUpdate2 = sonnetUpdate.replace(/the /g, "a large ");
console.log(sonnetUpdate2);

// Set the content of the sonnet div with the new string
sonnet.innerHTML = sonnetUpdate2;
console.log("Updated", sonnet.innerHTML);