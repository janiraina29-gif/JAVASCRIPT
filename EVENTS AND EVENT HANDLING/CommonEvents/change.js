//change the text "select your device" to device selected when an option is chosen.
let sel= document.querySelector("select");
let h3= document.querySelector("h3");
sel.addEventListener("change", function(dets){
    console.log(dets.target.value);
h3.textContent=`${dets.target.value} DEVICE SELECTED!`;
})

//imp. take-away: adding a dynamic value: `${value} constant-text`