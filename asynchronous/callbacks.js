let k = [];
function someAsyncOperation() {
  setTimeout(function() {
    k = k.concat([1,2,3]);

    setImmediate(function() {
      let sum = 0
      k.forEach((item, i) => {
        sum = sum + item;
      });
      console.log(sum);
    });
  }, 0);
};
someAsyncOperation();
