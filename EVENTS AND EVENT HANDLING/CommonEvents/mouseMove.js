//make a div element and design it to move following the movements of the cursor or mouse of the user.


let abcd = document.querySelector(".abcd");
window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
})