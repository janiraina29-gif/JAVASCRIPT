//select all the li elements and print their text using a loop. 
//in this way the text of the li's will be stored in an array like structure.
let lis=document.querySelectorAll("li");

//METHOD 1: using the forEach loop
lis.forEach(function(val){
    console.log(val.textContent);
});
//console.log(val) prints the li tags in console.
//console.log(val.textContent) prints the text stored in the li tags in console.

//METHOD 2: using the for loop
for ( i=0; i<lis.length; i++ ){
    console.log (lis[i].textContent);
}