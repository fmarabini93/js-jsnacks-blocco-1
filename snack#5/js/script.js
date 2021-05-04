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

console.log(oddList);