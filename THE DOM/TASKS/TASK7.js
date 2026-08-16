//create a new image element with a placeholder source and add it at the top of a div and set its width to 200px.
let div=document.querySelector("div");
let img=document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200/200");
img.classList.add("placeholder");
div.prepend(img);