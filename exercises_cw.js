// // ex 1--------------------------------------------------------------

// const sheeps = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true];


// function countSheeps(arrayOfSheep) {
//     let numberOfSheep = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         const element = arrayOfSheep[i];

//         if (element === true) {
//             numberOfSheep++;
//         }
//     }
//         return numberOfSheep;
// }

//     console.log(countSheeps(sheeps))

// // ex 2--------------------------------------------------------------


// let testNumber1 = -3.2;
// let testNumber2 = 5;

// function opposite(number) {
//     let oppositeNumber;

//     if (number >= 0) {
//         oppositeNumber = number * -1;
//     } else {
//         oppositeNumber = Math.abs(number);
//     }
//     return oppositeNumber;
// }

// console.log(opposite(testNumber1));

// console.log(opposite(testNumber2));

// ex 3--------------------------------------------------------------

function greet(name) {
  const newString = name;
  return finalString = 'Hello,' + ' ' + newString + ' ' + 'how are you doing today?';
}

console.log(greet('Joshua'))
console.log(greet('Francesca'))
console.log(greet(11))

// "Hello, <name> how are you doing today?"


// ex 4-----------------------------------
// Scrivi la funzione RemoveExclamationMarks che rimuove tutti i punti esclamativi 
// da una stringa data.

function RemoveExclamationMarks(string) {
  const result = string.replace(/!/g, '');
  return result;
}

console.log(RemoveExclamationMarks('Ciaoo!! Come stai?!'))

// ex 5-------------------------------------------
// Data una matrice non vuota di numeri interi, restituisce il risultato 
// della moltiplicazione dei valori in ordine. 
// Esempio: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {

  const numbers = x;

  const growByIndex = numbers.reduce((accumulator, current) => {
    return accumulator * current;
  });
  return growByIndex;
}

console.log(grow([1, 2, 3, 4]))



function getCentury(year) {
  // Math.ceil() arrotonda un numero verso l'alto all'intero successivo più grande 
  // o al numero stesso se già intero. Ad esempio, Math.ceil(4.2) restituisce 5.
  const century = Math.ceil(year / 100);
  // Ad esempio, se l'anno è il 1905, il secolo si calcola come 1905 / 100 = 19,05, 
  // e arrotondando per eccesso si ottiene 20.
  return century;
}

// Example
console.log(getCentury(1905));

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", 
// where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection 
// and returns the number of points our team (x) got in the championship 
// by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const resultsOfSeason = ['3:1', '2:2', '1:0', '3:2', '1:4', '3:3', '0:1', '4:0', '2:1', '4:4']

//https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

function pointsOfSeason(array) {

  const ourGoals = array.map(element => element[0]);
  const theirGoals = array.map(element => element[2]);
  let accumulator = 0;

  for (let i = 0; i < array.length; i++) {
    const ourGoalsIndex = ourGoals[i];
    const theirGoalsIndex = theirGoals[i];

    if (ourGoalsIndex > theirGoalsIndex) {
      accumulator = accumulator + 3;
    } else if (ourGoalsIndex < theirGoalsIndex) {
      accumulator = accumulator;
    } else {
      accumulator = accumulator + 1;
    }
  }
      return accumulator;
  }

console.log(pointsOfSeason(resultsOfSeason))



// es----------------------------------------

function betterThanAverage(classPoints, yourPoints) {
  for (let i = 0; i < classPoints.length; i++) {
    const element = classPoints[i];
    const myPoint = yourPoints[0];
    
    if (element >= myPoint) {
      return false;
    }
      
   
  }
  return true;
}

  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

  //------------------------------------------------------------


  const testArray = ['qui', 'quo', 'qua']

  function reverseArray(arr) {
    
    const tempArray = [];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      tempArray.push(element);
      
    }

    return tempArray;

  }
  const newArray = reverseArray(testArray);  
  console.log(newArray)