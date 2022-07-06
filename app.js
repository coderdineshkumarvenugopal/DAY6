// var a=10;
// let b=20.0;
// const c = "hello";

// console.log(a);
// console.log(b);
// console.log(c);
// document.write("hello");

const button1 = document.getElementById("submit");
console.log(button1);
var randomnumber = Math.round(Math.random()*100);
console.log(randomnumber);

var  live=10;

const message = document.getElementById("message");
// console.log(message);
const lives =document.getElementById("lives");
// console.log(lives);

button1.onclick = () =>{
    var inputvalue=document.getElementById("input-number").value;
    console.log(inputvalue);
    live--;
    //winning condition
    //if my input value is equal to the random number
    if(inputvalue==randomnumber)
    {
        location.href = './win.html';

    }
    else if(live==0)
    {
        location.href= './lose.html';

    }
    else if(inputvalue>randomnumber)
    {
        text = `Your guess is too high. ${live} lives remaining`;
    }
    else if(inputvalue<randomnumber)
    {
        text = `Your guess is too low. ${live} lives remaining`;
    }
console.log(text);
message.style.display = "inherit";
message.innerHTML = text;
live.innerHTML = live;
} 