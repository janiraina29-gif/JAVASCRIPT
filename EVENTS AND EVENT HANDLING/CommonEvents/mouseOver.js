//make a div container and give it a primary color. change the color of the div when the mouse hovers over the element and change the color back to original once the mouse is outside of your div element.



let div = document.querySelector(".card");
//this command changes the color of the div element when the mouse hovers over your element.
div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "purple";
})

//this changes the color back to original once the mouse is moved out of the div.
div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "plum";
})