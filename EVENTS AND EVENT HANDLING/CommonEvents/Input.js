//1. input: the console needs to show that the user has typed something.
let ip= document.querySelector("input");
ip.addEventListener("input", function(){
console.log("typed");
})
/*it also shows the number of characters or events done.
it also includes the number of spaces, the number of backspaces.
even if you clear it all out, it still displays the number of words and spaces that were typed before adding more numbers for the backspaces.
*/

//if you want to know the text that the user typed and want to show it on console:
ip.addEventListener("input", function(evt){  //you can simply write data as well here. evt is a variable name.
    console.log(evt.data); //here data is the property that stores text inside the console.
})

//to not count the backspaces:
ip.addEventListener("input", function(dets){
    if (dets.data!=null){
        console.log(dets.data);  //or console.log ("typed"); to actually check if it counts the backspaces or not.
    }
})