// assignment 1
var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var i = 0; i < testArr.length; i++){    
    sum = sum + testArr[i];

    console.log("Num " + testArr[i] + ", " + "Sum " + sum);
}

// assignment 2
var testArr2 = [6,3,5,1,2,4];
for(var i = 0; i < testArr2.length; i++){    
    testArr2[i] = testArr2[i] * i;
}
console.log(testArr2)