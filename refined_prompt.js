/**
 * Converts a string to camelCase format.
 * 
 * Handles multiple delimiters (spaces, underscores, hyphens) and converts the input
 * to camelCase where the first word is lowercase and subsequent words are capitalized.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, underscores, 
 *                         hyphens, or be in any case format.
 * @returns {string} The converted camelCase string.
 * @throws {Error} Throws an error if input is null, undefined, or not a string.
 * 
 * @example
 * // Basic usage
 * toCamelCase("first name"); // Returns: "firstName"
 * toCamelCase("user_id"); // Returns: "userId"
 * toCamelCase("SCREEN_NAME"); // Returns: "screenName"
 * toCamelCase("mobile-number"); // Returns: "mobileNumber"
 * 
 * @example
 * // Edge cases
 * toCamelCase(""); // Returns: ""
 * toCamelCase("   "); // Returns: ""
 */

/**
 * Converts a string to dot.case format.
 * 
 * Handles multiple delimiters (spaces, underscores, hyphens) and camelCase boundaries,
 * converting the input to dot.case where words are separated by dots and lowercase.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, underscores,
 *                         hyphens, camelCase notation, or be in any case format.
 * @returns {string} The converted dot.case string.
 * @throws {Error} Throws an error if input is null, undefined, or not a string.
 * 
 * @example
 * // Basic usage
 * toDotCase("first name"); // Returns: "first.name"
 * toDotCase("user_id"); // Returns: "user.id"
 * toDotCase("SCREEN_NAME"); // Returns: "screen.name"
 * toDotCase("mobileNumber"); // Returns: "mobile.number"
 * 
 * @example
 * // Edge cases
 * toDotCase(""); // Returns: ""
 * toDotCase("   "); // Returns: ""
 */
function toCamelCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Check if input is a string
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim and handle empty strings
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return "";
    }

    // Split by spaces, underscores, and hyphens
    const words = trimmed.split(/[\s_-]+/);

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // First word stays lowercase, rest are capitalized
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join("");
}
function toDotCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Check if input is a string
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim and handle empty strings
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return "";
    }

    // Split by spaces, underscores, hyphens, and camelCase boundaries
    const words = trimmed
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .split(/[\s_-]+/);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .filter(word => word.length > 0)
        .join(".");
}

// Test cases
console.log(toCamelCase("first name")); // "firstName"
console.log(toCamelCase("user_id")); // "userId"
console.log(toCamelCase("SCREEN_NAME")); // "screenName"
console.log(toCamelCase("mobile-number")); // "mobileNumber"

