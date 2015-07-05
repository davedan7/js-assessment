exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timer;
    function counter() {
      console.log(start++);

      if (start <= end) {
        timer = setTimeout(counter, 100);
      }
    }

    counter();
    return {
      cancel: function () {
        timer && clearTimeout(timer);
      }
    };
  }

};
