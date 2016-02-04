exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
      return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = "";

      if(num % 2 != 0) {
        binary = "0"+(num).toString(2);
        return binary;
      }
     return (num).toString(2);
  },

  multiply: function(a, b) {
    return a * b;
  }
};
