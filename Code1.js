
    const mybutton = document.getElementById("mybutton"); // this is a random number generator thats 1 out of 1 trillion 
    const mylabel = document.getElementById("mylabel");
    const min = 1
    const max = 1000000000000
    let randomNum;

    mybutton.onclick = function(){
        randomNum = Math.floor(Math.random() * max) + min;
        mylabel.textContent = randomNum;
    }
   