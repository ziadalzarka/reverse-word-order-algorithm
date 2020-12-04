/**
 * Reverse a string
 * @date 2020-12-04
 * @param {String} str input string
 * @returns {String} reversed string
 */
module.exports.reverseString = (str) => {
  const chars = str.split("");
  const length = chars.length;

  for (let i = 0; i < length; i++) {
    chars[i] = str[length - 1 - i];
  }

  return chars.join("");
};
