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
  
  
  function doWhileLoop(num) {
  let i = 0;

  do {
    console.log(i, "I run once regardless. ");
  }
  while (i++ < num);

  console.log("Final value of i:", i);
}

doWhileLoop(10);