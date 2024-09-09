function largestNum(arr){
let large = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] > large){
        large = arr[i];
    }
}
return large;
}

largestNum([10,20,30,40,70]); // 70