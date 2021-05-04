oddList = [];
var checkN;

function isOdd(num) {
      if (num % 2 == 0) {
            return false;
      }
}

for (i = 0; i < 6; i++) {
      do {
            checkN = parseInt(prompt("Please type a number"));
      } while (isNaN(checkN) == true);
      if (isOdd(checkN) != false) {
            oddList.push(checkN);
      }
}

if (oddList.length == 0) {
      document.getElementById("result").innerHTML = "You typed even numbers only.."
} else {
      document.getElementById("result").innerHTML = "Here are the odd numbers you typed: " ;
      for (i = 0; i < oddList.length; i++) {
            document.getElementById("odd-numbers").innerHTML += "<li>" + oddList[i] + "</li>";
      }     
}