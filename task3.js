//  loop to find the largest number in the array:[10,20,4,45,99,']
let numbers=[10,20,4,45,99,1]
let largest=[0];
for (let i=1; i<numbers.length;i++){
    if (numbers[i] > largest) {
        largest= numbers[i]
    }
}
    console.log("largest number is:" +largest)