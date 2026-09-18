// Select the first item in a list and delete it from the DOM.
let ul=document.querySelector("ul");

//document.querySelector selects only the first element in a list (an array like structure). 
//to select all elements, use document.QuerySelectorAll.
let li=document.querySelector("li");
li.remove(li);
