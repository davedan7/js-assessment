exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(sum, x) {
      return sum + x;
    });
  },

  remove : function(arr, item) {
    var newArr = [];
    arr.forEach(function(x) {
      if (x !== item) {
        newArr.push(x);
      }
    });
    return newArr;
  },

  removeWithoutCopy : function(arr, item) { // Redo this one
    for (var i = 0, newLength = arr.length; i < newLength; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
        // newLength -= 1;
      }
    }
    return arr;
  //   var  i, newLength;
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
    var result = arr1.concat(arr2);
    return result;
  },

  insert : function(arr, item, index) {
     arr.splice(index, 0, item);
     return arr;
  },

  count : function(arr, item) {
    var i, len;
    var count = 0;
    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var old = {};
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      if (!old[arr[i]]) {
        old[arr[i]] = 1 ;
      } else if (old[arr[i]] === 1) {
        duplicates.push(arr[i]);
        old[arr[i]] ++;
      } else {
        old[arr[i]] ++;
      }
    }
    return duplicates;
   },

  square : function(arr) {
    var newArr = arr.map(function(x){
      return x * x;
    });
    return newArr;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }

};
  