
var imgElement = document.querySelectorAll('img')[0];
var p = document.querySelectorAll(".msg")[0]
var para = document.querySelectorAll(".count")[0]
var count = 0;
var attempt = document.querySelectorAll(".attempt")[0];

function ludoDies(userPick) {
    var ranNum = Math.ceil(Math.random() * 6);
    if (ranNum === 1) {
        imgElement.src = "./no 1.png";
    }
    else if (ranNum === 2) {
        imgElement.src = "./image no 2.png";
    }
    else if (ranNum === 3) {
        imgElement.src = "./image 3.webp";
    }
    else if (ranNum === 4) {
        imgElement.src = "./image no 4.png";
    }
    else if (ranNum === 5) {
        imgElement.src = "./5 image.png";
    }
    else if (ranNum === 6) {
        imgElement.src = "./image no 6.png";
    }

    if ((userPick === "1" && ranNum === 1) || (userPick === '2' && ranNum === 2) || (userPick === '3' && ranNum === 3) || (userPick === '4' && ranNum === 4) ||(userPick === '5' && ranNum === 5) || (userPick === '6' && ranNum === 6)) {
        attempt.innerHTML = count;
        count = ++count;
        var  winner = p.innerHTML = "you are win";
          var win = document.querySelectorAll(".win")[0];
         winnerAttampt = 0;
         if (winnerAttampt == 0) {
           winnerAttampt++;
         }
         win.innerHTML  =  "WINNER "+" ATTEMPT" +"=" +  winnerAttampt + " .";
       
    }
    else { 
       var loxer = p.innerHTML = "better luck next time";
       var loss = document.querySelectorAll(".loss")[0];
       loss.innerHTML = "LOSS COUNTER "  +  " = " + ++count ;
    }

var count = attempt.innerHTML;
  count = "ATTEMPT COUNTER" + "="   + "   "+ " \ "  +  "10";
  attempt = document.querySelectorAll(".attempt")[0].innerHTML = count;
  ++count
if (count === 10){ 
  count = 'only attempt for 10 times';
} 
else if ( count === 1 && count === 2 && count === 3 && count === 4 && count === 5 && count === 6){
    ++count;
}
else if(count === 11){
    count = "you already attempt 10 time please restart the game"
}
count = attempt;
var  num1 = attempt;
var num2 = document.querySelectorAll(".win")[0].innerHTML;
var ratio = document.querySelectorAll(".ratio")[0];
var calculate = ratio.innerHTML;
calculate = Math.round(num2 / num1 * 100); 
ratio.innerHTML =  "ratio" +" " +" = " +  " " + calculate + " % ";
}




