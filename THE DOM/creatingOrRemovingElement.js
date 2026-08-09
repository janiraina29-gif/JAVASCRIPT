//creating an element solely using javascript
//let h1=document.createElement("h1");
//h1.textContent="HELLO";
//to print this h1 in the body:
/*
this can be done in two ways: append and prepend. 
append attaches the h1 tag in the end of the body tag.
prepend attaches the h1 tag at the start of the body tag.
*/ 
//exmaple of prepend:
//document.querySelector("body").prepend(h1);
//example of append:
//document.querySelector("body").append(h1);
//removing an element:
//h1.remove();


//adding an element in a div element:
let h1=document.querySelector("h1");
h1.textContent="outer element";
document.querySelector("div").prependChild(h1);