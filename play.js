var x = 10;

function addToX(y) {
  if (y === 5) {
    var local3 = 200;
  }
  x = 25;
  return x + y;
}

console.log(addToX(5));
console.log(x);

if (x === 25) {
  var local = 20;
  console.log(local);
}

for (var i = 0 ; i < 1 ; i++) {
  var local2 = 100;
}

console.log(local);
console.log(local2);
//console.log(local3);

function hello() {
  console.log(hello2());

  function hello2() {
    var x = 20;
    var y = 50;
    return x + y;
  }

}

hello();
