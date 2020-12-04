/**
 * Reverse a string
 * @date 2020-12-04
 * @param {String} str input string
 * @returns {String} reversed string
 */
module.exports.reverseWordOrder = (str) => {
  const words = str.split(" ");
  const length = words.length;

  for (let i = 0; i < length / 2; i++) {
    const intermediate = words[i];
    words[i] = words[length - 1 - i];
    words[length - 1 - i] = intermediate;
  }

  return words.join(" ");
};
