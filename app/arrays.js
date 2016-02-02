exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var defaultLocation = -1;

    for(index = 0; index < arr.length; index++) {
        if(_.isEqual(item ,arr[index])) {
          return index;
        }
    }

    return defaultLocation;
  },

  sum : function(arr) {
    var sum = 0;

    _.each(arr,function(item){
        sum += item;
    });

    return sum;
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy : function(arr, item) {
    var length = arr.length;

    for(index = 0; index < length; index++) {
        if(arr[index] == item){
          arr.splice(index,1);
          index =  0 ? 0 : index - 1;
          length = length -1;
        }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
     arr.shift();
     return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var occurences = _.filter(arr,
                        function(arrItem){
                         return arrItem === item;
                       });
    return  occurences.length;
  },

  duplicates : function(arr) {
    var firstOccurences = [];
    var duplicates = [];

    _.each(arr,function(item){
      if(firstOccurences.indexOf(item) < 0) {
        firstOccurences.push(item);
      } else if(duplicates.indexOf(item) < 0){
        duplicates.push(item);
      }
    });

    return duplicates;
  },

  square : function(arr) {
    var result = [];
    _.each(arr,function(item){
      result.push(item * item);
    });

    return result;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];

    _.each(arr,function( item, index){
        if(item == target){
            occurences.push(index);
        }
    });

    return occurences;
  }
};
