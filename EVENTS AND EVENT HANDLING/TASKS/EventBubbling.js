let ul = document.querySelector("ul");
ul.addEventListener("click", function(dets){
//to find out the target where the function runs: (it runs on li tag)
//console.log(dets.target);
dets.target.style.textDecoration = "line-through";
})