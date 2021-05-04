var firstNames = ["Luca", "Marco", "Filippo", "Luigi", "Maria", "Francesca", "Giulia", "Margherita"];
var lastNames = ["Rossi", "Verdi", "Bianchi", "Gialli", "Marroni", "Neri", "Arancioni"];
var fullName = [];
var nameList = [];
var li = document.getElementById("list");

function rndNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
function randomName(array1, array2) {
      for (i = 0; i < 10; i++) {
            fullName[i] = array1[rndNum(0, array1.length - 1)] + " " + array2[rndNum(0, array2.length -1)];
            nameList.push(fullName[i]);
      }
}

randomName(firstNames, lastNames);

for (i = 0; i < nameList.length; i++) {
      li.innerHTML += "<li>" + nameList[i] + "</li>";
}