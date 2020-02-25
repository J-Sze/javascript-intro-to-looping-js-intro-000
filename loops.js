function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }
  
function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5;
  }
  var l = array[1];
  var newArr = [];
  // console.log(l);
  console.log(newArr);

  do {
    console.log(l);
    l=l-1;
  } while (!!l && !!maybeTrue());
  return newArr;
}

doWhileLoop(array);