function firstNonRepeatedChar(str) {
    if (!str) return null;

    let count = {};

    // Count frequency of each character
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Find first non-repeating character
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
