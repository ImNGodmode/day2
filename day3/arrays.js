
// an array
let students = ["remy", "jude", "sujitha", "Kamara", "Blake"];

// push adds to the end of an array
//students.push("Norman")

// unshift adds to the start of an array
//students.unshift("Oksana")

//more than one thing can be added at a time with push and unshift

//pop removes an element from the end of an array
//students.pop()

//shift method removes an element from the front of an array
//students.shift()
 
//.length shows how many elements are in an array
//students.length()

students.forEach( (person) => {
    //anything in this block will be executed to all elements in the array
if (person.legnth >= 5){
    console.log(person)
}
})
