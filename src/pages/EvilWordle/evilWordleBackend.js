// evilWordle.js
// Contains all the core logic for Evil Wordle

/**
 * Compute Wordle feedback for a guess vs. solution
 * Returns string of 5 characters: 'G' = green, 'Y' = yellow, 'B' = black
 */
export function getFeedback(guess, solution) {
  guess = guess.toLowerCase();
  solution = solution.toLowerCase();

  let feedback = Array(5).fill("");
  let solutionChars = solution.split("");

  // First pass: greens
  for (let i = 0; i < 5; i++) {
    if (guess[i] === solution[i]) {
      feedback[i] = "G";
      solutionChars[i] = null; // consume
    }
  }

  // Second pass: yellows/blacks
  for (let i = 0; i < 5; i++) {
    if (feedback[i]) continue;
    const idx = solutionChars.indexOf(guess[i]);
    if (idx >= 0) {
      feedback[i] = "Y";
      solutionChars[idx] = null;
    } else {
      feedback[i] = "B";
    }
  }

  return feedback.join("");
}

/**
 * Partition remaining possible solutions by feedback for a guess
 */
export function partitionByFeedback(possibleSolutions, guess) {
  const partitions = {};
  possibleSolutions.forEach((word) => {
    const fb = getFeedback(guess, word);
    if (!partitions[fb]) partitions[fb] = [];
    partitions[fb].push(word);
  });
  return partitions;
}

/**
 * Pick the largest partition, avoiding all-green feedback if possible
 * Returns [feedback, newPossibleSolutions]
 */
export function pickLargestPartition(partitions) {
  // Filter out all-green feedback if possible
  const nonWinning = Object.entries(partitions).filter(
    ([fb, words]) => fb !== "GGGGG"
  );

  if (nonWinning.length > 0) {
    // Pick the largest group
    return nonWinning.reduce((a, b) => (b[1].length > a[1].length ? b : a));
  } else {
    // Forced to accept winning group
    return Object.entries(partitions).reduce((a, b) =>
      b[1].length > a[1].length ? b : a
    );
  }
}

/**
 * Convert feedback string to emoji representation for UI
 */
export function feedbackToEmoji(feedback, guess) {
  const map = { G: "🟩", Y: "🟨", B: "⬛" };
  return (
    feedback
      .split("")
      .map((f) => map[f])
      .join("") +
    "  " +
    guess
  );
}

/**
 * Initialize the possible solutions (copy of all answers)
 */
export function initPossibleSolutions(answersJson) {
  return [...answersJson];
}

/**
 * Handle a user guess:
 * - Computes partitions
 * - Picks the largest partition
 * - Returns feedback string and updated possible solutions
 */
export function handleGuess(guess, possibleSolutions) {
  const partitions = partitionByFeedback(possibleSolutions, guess);
  const [feedback, newPossible] = pickLargestPartition(partitions);
  return [feedback, newPossible];
}
