"use strict";
let sumNow = 0,
  top3 = [0, 0, 0];
let something = function (str) {
  str.split("\n\n").forEach(function (elfc) {
    sumNow = elfc.split("\n").reduce(function (partialSum, a) {
      return +partialSum + +a;
    }, 0);
    if (top3[2] < sumNow) {
      top3[2] = sumNow;
      top3.sort((a, b) => b - a);
    }
  });
  console.log(
    top3.reduce((sum, a) => {
      return sum + a;
    }, 0)
  );
};
something(`30000
2000
3000

4000

5000
6000

7000
8000
9000

10000`);

const l = ["A", "B", "C"];
const r = ["X", "Y", "Z"];
let extra;
const decryptGuide2_1 = {};
const guideCreator2_1 = function () {
  for (let oppo of l) {
    for (let me of r) {
      if (l.indexOf(oppo) === r.indexOf(me)) {
        extra = 3;
      } else if (oppo === "A" && me === "Z") {
        extra = 0;
      } else if (oppo === "C" && me === "X") {
        extra = 6;
      } else {
        l.indexOf(oppo) < r.indexOf(me) ? (extra = 6) : (extra = 0);
      }
      decryptGuide2_1[`${oppo}${me}`] = Number(r.indexOf(me) + 1) + extra;
    }
  }
};
guideCreator2_1();
let total = 0;
const puzzel2 = function (str) {
  str.split("\n").forEach(function (combinations, i) {
    combinations = combinations.replace(" ", "");
    total += decryptGuide2_1[combinations];
  });
  console.log(total);
};

puzzel2(`A Y
B X
C Z`);

const finalarr = [],
  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
let x;
const thirdChallange_1 = function (str) {
  let obj1 = {},
    obj2 = {};
  str.split("\n").forEach(function (str) {
    (obj1 = {}), (obj2 = {});
    const str1 = str.slice(0, str.length / 2);
    const str2 = str.slice(str.length / 2);

    for (const letter of str1) {
      if (!obj1[letter]) {
        obj1[letter] = 1;
      }
    }
    for (const letter of str2) {
      if (!obj2[letter]) {
        obj2[letter] = 1;
      }
    }
    for (const letter in obj1) {
      if (obj2[letter]) {
        finalarr.push(
          (x =
            Math.min(obj1[letter], obj2[letter]) *
            (letters.indexOf(letter) + 1))
        );
      }
    }
  });
  console.log(finalarr.reduce((a, b) => a + b, 0));
};

// thirdChallange_1(``);

const thirdChallange_2 = function (str) {
  const startArr = str.split("\n");

  let n = 0,
    min;
  while (startArr[n + 1]) {
    let arr = [startArr[n], startArr[n + 1], startArr[n + 2]];
    let sortedArr = arr.sort((a, b) => a.length - b.length);
    for (const letter of sortedArr[0]) {
      if (sortedArr[1].includes(letter) && sortedArr[2].includes(letter)) {
        toDO(letter);
        break;
      }
    }
    n = n + 3;
  }
  console.log(FinalArr3_2.reduce((a, b) => a + b, 0));
};
const FinalArr3_2 = [];
const toDO = function (letter) {
  FinalArr3_2.push(letters.indexOf(letter) + 1);
};
thirdChallange_2(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg`);

let numPair = 0;
const fourthChallange_1 = function (str) {
  let numbers = [];
  str.split("\n").forEach(function (str) {
    numbers = [];
    str.split(",").forEach(function (str) {
      str.split("-").forEach(function (number) {
        numbers.push(Number(number));
      });
    });
    if (
      (Math.min(numbers[0], numbers[1]) >= Math.max(numbers[2], numbers[3]) &&
        Math.max(numbers[0], numbers[1]) <= Math.max(numbers[2], numbers[3])) ||
      (Math.min(numbers[0], numbers[1]) <= Math.min(numbers[2], numbers[3]) &&
        Math.max(numbers[0], numbers[1]) >= Math.max(numbers[2], numbers[3]))
    ) {
      numPair++;
    }
  });
};
fourthChallange_1(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`);
console.log(numPair);

let numPair2 = 0;
const fourthChallange_2 = function (str) {
  let numbers = [];
  str.split("\n").forEach(function (str) {
    numbers = [];
    str.split(",").forEach(function (str) {
      str.split("-").forEach(function (number) {
        numbers.push(Number(number));
      });
    });
    if (
      Math.min(numbers[0], numbers[1]) > Math.max(numbers[2], numbers[3]) ||
      Math.max(numbers[0], numbers[1]) < Math.min(numbers[2], numbers[3])
    ) {
    } else numPair2++;
  });
};
fourthChallange_2(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`);
console.log(numPair2);
