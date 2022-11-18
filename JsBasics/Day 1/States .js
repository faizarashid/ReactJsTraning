let stoveTemp = 500;
function Pot() { this.boilStatus = '';
 this.startBoiling = function () { 
    if (stoveTemp > 400) this.boilStatus = "boiling"; } }
let pastaPot = new Pot(); pastaPot.startBoiling();
console.log(pastaPot);// Pot { boilStatus = 'boiling'; }
function Pasta() { this.cookedStatus = false;
     this.addToPot = function (boilStatus) {
         if (boilStatus == "boiling") this.cookedStatus = true; } }
let myMeal = new Pasta(); myMeal.addToPot(pastaPot.boilStatus);
console.log(myMeal.cookedStatus);// true
