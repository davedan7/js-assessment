exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  // argsAsArray : function(fn, arr) {
  //   return fn(arr[0], arr[1], arr[2]);
  // },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function (argument) {
      return str + ', ' + argument;
    }
  },

  makeClosures : function(arr, fn) {
    // result = [];

    var makeFunction = function (value) {
      return function () {
        return fn(value);
      };
    }

    var result =  arr.map(function (x) {
      return makeFunction(x);
    });

    return result;
    // for (var i = 0; i < arr.length; i++) {
    //   result.push(makeFunction(arr[i]));
    // }
    // return result;
  },

  partial : function(fn, str1, str2) {
    return function (str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments : function() {
    result = 0;

    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    };

    // var result = [].reduce.call(arguments, function (sum, x) {
    //    return sum + x;
    // };

    return result;
  },

  callIt : function(fn) {
    // var args = Array.prototype.slice.call(arguments, 1, arguments.length);

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
