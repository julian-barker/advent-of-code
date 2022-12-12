const data = await Deno.readTextFile('input.txt');
const realInput = data.split('\n\n');

const testData = await Deno.readTextFile('test.txt');
const testInput = testData.split('\n\n');

const input = realInput;

const testMonkeys = [
  {
    items: [79, 98],
    op: (old) => old * 19,
    test: (worry) => worry % 23 === 0 ? 2 : 3
  },
  {
    items: [54, 65, 75, 74],
    op: (old) => old + 6,
    test: (worry) => worry % 19 === 0 ? 2 : 0
  },
  {
    items: [79, 60, 97],
    op: (old) => old * old,
    test: (worry) => worry % 13 === 0 ? 1 : 3
  },
  {
    items: [74],
    op: (old) => old + 3,
    test: (worry) => worry % 17 === 0 ? 0 : 1
  }
];

const realMonkeys = {
  '0': {
    items: [74, 73, 57, 77, 74],
    op: (old) => old * 11,
    test: (worry) => worry % 19 === 0 ? 6 : 7
  },
  '1': {
    items: [99, 77, 79],
    op: (old) => old + 8,
    test: (worry) => worry % 2 === 0 ? 6 : 0
  },
  '2': {
    items: [64, 67, 50, 96, 89, 82, 82],
    op: (old) => old + 1,
    test: (worry) => worry % 3 === 0 ? 5 : 3
  },
  '3': {
    items: [88],
    op: (old) => old * 7,
    test: (worry) => worry % 17 === 0 ? 5 : 4
  },
  '4': {
    items: [80, 66, 98, 83, 70, 63, 57, 66],
    op: (old) => old + 4,
    test: (worry) => worry % 13 === 0 ? 0 : 1
  },
  '5': {
    items: [81, 93, 90, 61, 62, 64],
    op: (old) => old + 7,
    test: (worry) => worry % 7 === 0 ? 1 : 4
  },
  '6': {
    items: [69, 97, 88, 93],
    op: (old) => old * old,
    test: (worry) => worry % 5 === 0 ? 7 : 2
  },
  '7': {
    items: [59, 80],
    op: (old) => old + 6,
    test: (worry) => worry % 11 === 0 ? 2 : 3
  },
}
const correct = [99,97,8,103];

const monkeys = testMonkeys;

let touched = new Array(4).fill(0);

for (let i = 0; i < 1000; i++) {
  for (let m = 0; m < 4; m++) {
    let mk = monkeys[m]

    while (mk.items.length !== 0) {
      let oldWorry = mk.items.shift();
      let newWorry = mk.op(oldWorry) % 9937;
      let tgt = mk.test(newWorry);
      monkeys[tgt].items.push(newWorry);
      touched[m] += 1;
    }
    mk.items = [];
  }
}

console.log(touched);
touched.sort((a,b) => b - a);
console.log(touched[0] * touched[1]);


// for (let x = 0; x < 10000; x++) {
//   let touched = new Array(4).fill(0);

//   const monkeys = [
//     {
//       items: [79, 98],
//       op: (old) => old * 19,
//       test: (worry) => worry % 23 === 0 ? 2 : 3
//     },
//     {
//       items: [54, 65, 75, 74],
//       op: (old) => old + 6,
//       test: (worry) => worry % 19 === 0 ? 2 : 0
//     },
//     {
//       items: [79, 60, 97],
//       op: (old) => old * old,
//       test: (worry) => worry % 13 === 0 ? 1 : 3
//     },
//     {
//       items: [74],
//       op: (old) => old + 3,
//       test: (worry) => worry % 17 === 0 ? 0 : 1
//     }
//   ];

//   for (let i = 0; i < 20; i++) {
//     for (let m = 0; m < 4; m++) {
//       let mk = monkeys[m]
  
//       while (mk.items.length !== 0) {
//         let oldWorry = mk.items.shift();
//         let newWorry = mk.op(oldWorry) % x;
//         let tgt = mk.test(newWorry);
//         monkeys[tgt].items.push(newWorry);
//         touched[m] += 1;
//       }
//       mk.items = [];
//     }
//   }
//   if(touched.every((v, i) => v === correct[i])) {
//     console.log(x, touched)
//     // console.log('💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥');
//   }
// }

// const sorted = touched.sort((a,b) => b - a);
// console.log("🚀 ~ file: index.js:76 ~ sorted", sorted);

// const mb = sorted[0] * sorted[1];
// console.log("🚀 ~ file: index.js:78 ~ mb", mb);

// console.log(monkeys);