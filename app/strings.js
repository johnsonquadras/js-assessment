exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    function findRepeats() {
      var repeats = [];
      var repeatString = "";
      var previous = "";
      var current = "";

      for(var index = 0; index < str.length; index++) {
        current = str[index];

        if(( previous != current && repeatString.length) || index == str.length -1) {
          repeats.push(repeatString);
          repeatString = "";
        }
        repeatString += current;
        previous = current;
     }
     return repeats;
    }

    function constructString(arr , amount) {
        var resultString = "";
        _.each(arr,function(item) {
            if(item.length > amount) {
              resultString+= item.substring(0,amount);
            } else{
              resultString+=item;
            }
        });

        return resultString;
    }

    var repeats = findRepeats();
    return constructString(repeats, amount);
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var result = "";
    var length = str.length;

    for(var index = 0; index < length; index++) {
      result += str[length -1- index];
    }

    return result;
  }
};
