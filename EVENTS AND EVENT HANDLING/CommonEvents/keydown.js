//whenever you press any key, the letter or key you pressed must be displayed on the screen.



let h1=document.querySelector("h1");

window.addEventListener("keydown", function(dets){
    if (dets.key=== " "){
        h1.textContent="SPC";
    }
    else{
        h1.textContent=dets.key;
    }
})