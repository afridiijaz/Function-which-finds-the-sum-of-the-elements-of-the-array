let arr=[5,6,7,3,6,2,6,1];

// using array reduce method we can find the sum of the array
const sum = arr.reduce((a1,b1)=> a1+b1);
console.log('sum of the array is : ', sum) 
//using function and then inside function we use loop 
function sumOfArr(container){
    let sum2=0;
for(let i in container){
    sum2 += container[i];
}
return sum2;
}
const allsum = sumOfArr(arr);
console.log('using function the sum is ',allsum);