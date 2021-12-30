for (let i = 1; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    if (i % 2 === 1 ) {
        console.log(` ${i} is oneven`);
    }
    else {
        console.log(` ${i} is even`);
    }
  };

  console.log("End of this loop");
  
  // Expected output:
  // 1 is oneven 
  // 2 is even 
  // 3 is oneven 
  // 4 is even 
  // ...