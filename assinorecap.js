// using the anonymous functions==function without a name with parameters
const grade=function(mark1,mark2,mark3){
    let average=(mark1+mark2+mark3)/3
    let answer=average
    if (average>=100 || average<0){
        console.log(`invalid;${answer}`)
    }
    else if (average>= 70){
        console.log(`A;${answer}`)
    }
    else if(average >=60 && average <70){
        console.log(`B;${answer}`)
    }
    else if(average>=50 && average <60){
        console.log(`C;${answer}`)
    }
    else{
        console.log(`Fail;${answer}`)
    }
}
grade(65,72,58)