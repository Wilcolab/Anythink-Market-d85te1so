function toKebabCase(input) {
    // Step 1: Validate the input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a valid string');
    }

    // Step 2: Clean the string and split words
    const cleaned = input
        .trim()
        // Split on spaces, underscores, hyphens, and camelCase boundaries
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase boundaries
        .replace(/[\s_-]+/g, '-') // spaces, underscores, hyphens
        .toLowerCase();

    // Step 3: Convert to lowercase and join with hyphens
    return cleaned;
}

module.exports = toKebabCase;