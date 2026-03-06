const fizzBuzz=(num)=>{
    if (num %5==0 && num%3==0){
        console.log("FizzBuzz")
    }else if
    (num%3==0){
        console.log("Fizz")
    }else if
    (num %5==0){
        console.log("Buzz")
    }else{
        console.log(`number is ${num}`)
    }
    }
fizzBuzz(15)
