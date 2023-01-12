// Retrieve the form and console.log it.
let form = document.forms[0]
console.log(form)
// console.log(form.elements[0])

// console.log(form.elements[1])
// console.log(form.elements[2])


// Retrieve the inputs by their id and console.log them.
let firstid = form.elements["fname"]
console.log(firstid)
let secondid = form.elements["lname"]
console.log(secondid)
let thirdid = form.elements["submit"]
console.log(thirdid)

// Retrieve the inputs by their name attribute and console.log them.
let firstname = form.elements["fname"]
console.log(firstname)
let secondname = form.elements["lname"]
console.log(secondname)

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.