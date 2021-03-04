function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

const fiveHeadsSyncPromise = new Promise( (resolve,reject) => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
        if ( attempts > 100 )
        {
            reject(`I took over 100 attempts and have therefore have been terminated`)
        }
    }

    resolve(`It took ${attempts} tries to flip five "heads"`);
});

fiveHeadsSyncPromise
    .then( res => console.log(res))
    .catch( err  => console.log(err))

console.log( "This is NOT run after the fiveHeadsSync function completes" );


// solution code below:
// function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
//   }
  
//   function fiveHeads() {
//     return new Promise((resolve, reject) => {
//       let headsCount = 0;
//       let attempts = 0;
//       while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//           headsCount++;
//         } else {
//           headsCount = 0;
//         }
//       }
//       if (attempts <= 100) {
//         resolve(`It took ${attempts} tries to flip five "heads"`);
//       } else {
//         reject("Attempts have exceeded 100 flips.");
//       }
//     });
//   }
//   fiveHeads()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
//   console.log("When does this run now?");