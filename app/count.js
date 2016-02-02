exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timer;
    function countNumber () {
      start++;
      if (start <= end) {
        timer = _.delay(countNumber, 100);
      }
    }

    countNumber();

    return {
      cancel : function () {
         clearTimeout(timer);
      }
    };
  }
};
