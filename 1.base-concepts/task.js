"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let convertedPercentage = (percent / 100) / 12;
  let bodyСredit = amount - contribution;
  let monthlyPayment = bodyСredit * (convertedPercentage + (convertedPercentage / (((1 + convertedPercentage) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}