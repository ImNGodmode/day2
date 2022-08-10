


// let num = 10

//     console.log(num)
// if (num > 0 ){
//     console.log("posative")
// }
// if (num < 0 ) {
//    console.log("negative")
// }
// else{
//     console.log("this is 0")
// }

//You are tasked with setting up the security for a web site that only grants users over the age of 18+ access to the site. 
//Write a conditional that gives users who are 18+ access and logs access denied for users who do not meet the given condition.

// let age = 18

// if(age >= 18){
//     console.log("access granted")
// }

// else{
//     console.log("access denied")
// }
// Write a nested if/else statement
// Declare a variable ‘num’
// Add an if/else statement that checks if ‘num’ is positive & greater than 100
// Add another statement that checks if ‘num’ is positive but less than 100
// Add an the final statement to check if ‘num’ is negative

//let num = 110


// if( num>=0){
  
//         if(num>=100){
//             if(num===100){
//                 console.log('number is 100')}
//                 else{
        
//                  console.log("number is posative and greater than 100")}
//     }else{
//         console.log('number is posative, but not greater than 100')
//     }
// }else{
//     console.log("number is negative")

// // }
// if(num>=0){
//     if(num===0){
//         console.log("number is 0")
//     }else{
//         if(num>=100){
//             console.log('number is posative and greater than 100')
//         }else{
//             console.log("number is posative, but not greater than 100")
//         }
//     }
// }else{
//     console.log('number is negative')
// // }
// for (let i = 0; i < 10 ; i++ ){
// //     console.log(i)
// // }
// for (let i=10; i>0; i--){
//     console.log(i)
// // }
//   let x=1
//    for (let i = 0; i < 10; i++){
//        console.log(x)
//        x += 2
//        if (x>10){
//            x=2
//      }
//    }
// for (let i = 1; i<=20; i++){
//     console.log(i*3)
// }
// for (let i =0; i < 7; i++){
//     console.log()
// }

// using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers

for (let i = 1; i < 11; i++){
    if (i % 2 ===0 ){
        console.log(i)
    }
}
// student problem


   let x=10
    for (let i = 0; i < 10; i++){
        if( x > 79 ){
            console.log("you did a goo job")
        }
        if( x > 69){
            console.log("keep trying")
        }
        if( x > 59){
            console.log("ehhhh")
        }        
        if( x > 54){
            console.log("Not to good")
        }
        else{
            console.log("bad grade but you'll get em next time")
        }
        x += 20
        if (x>100){
            x=20
      }
    }

    // fizz buzz
    for(let i = 1 ; i < 101; i++){
        if( i % 5 === 0 && i % 3 ===0){
            console.log("fizzbuzz")
        }
        else if( i % 3 === 0 && i % 5 !== 0){
            console.log("fizz")
        }
        else if( i % 5 === 0 && i % 3 !== 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        
        }
    }
    let ray = ["#"]
    for ( let i = 0; i < 7; i++){
console.log(ray)
ray.push("#")
    }