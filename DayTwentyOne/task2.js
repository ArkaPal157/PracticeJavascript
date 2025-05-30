// Task 2: Match All Digits
// Write a regular expression to match all digits in a string.
// Log the matches.

function matchAllDigits(text) {
  // Creates a regular expression to match all digits
  const regex = /\d/g;
  // Uses match() to find all matches
  const matches = text.match(regex);
  // Logs the matches
  console.log("Digits:", matches);
}

// Example usage
matchAllDigits("The year is 2025 and the time is 04:16:24 PM.");
