var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here

      var bucketIndex = hashFn(key, max);
      var bucket = this._storage[bucketIndex];

      for (var i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key)
          return bucket[i][1];
      }
      return;
    },

    insert: function(key, value) {
      //your code is here
      var bucketIndex = hashFn(key, max);

      if(this._storage[bucketIndex] === undefined)
        var bucket = [];
      else
        var bucket = this._storage[bucketIndex];


      for (var i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key){
          bucket[i][1] = value;
          return;
        }
      }

      bucket.push([key,value]);
      return;
  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};