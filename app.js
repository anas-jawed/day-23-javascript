// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hi ${user.value} your password is set to ${pass.value}`);
// })

//  More Events

//  change

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// })
// let user = document.querySelector("#user");

// user.addEventListener("change", function(event){
//     event.preventDefault()
//     console.log("input was changed");
//     console.log("final value =", this.value);
// })

// //  input

// let pass  = document.querySelector("#pass");

// pass.addEventListener("input", function(){
//     console.log("input value begin");
//     console.log("input value finalized", this.value);
// })


//  Text Editor

let inp = document.querySelector("#text");
let p = document.querySelector("p");


inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
})