const data = await Deno.readTextFile('input.txt');
const realInput = data.split('\n');

const testData = await Deno.readTextFile('test.txt');
const testInput = testData.split('\n');

const input = testInput.map(line => line.split('').map(char => parseInt(char)));

const w = input[0].length;
const h = input.length;

const visMap = new Array(h).fill(0).map(v => new Array(w).fill(0));

visMap.forEach(line => {
  line[0] = 1;
  line[w - 1] = 1;
})
visMap[0].fill(1);
visMap[h - 1].fill(1);


// from left
for (let y = 0; y < h; y++) {
  let line = input[y];
  let tallest = line[0];
  for(let x = 0; x < w; x++) {
    if(line[x] > tallest) {
      tallest = line[x];
      visMap[y][x] = 1;
    }
  }
}

// from right
for (let y = 0; y < h; y++) {
  let line = input[y];
  let tallest = line[w - 1];
  for(let x = w - 1; x >= 0; x--) {
    if(line[x] > tallest) {
      tallest = line[x];
      visMap[y][x] = 1;
    }
  }
}

//from top
for (let x = 0; x < w; x++) {
  let tallest = input[0][x];
  for(let y = 0; y < h; y++) {
    let val = input[y][x];
    if(val > tallest) {
      tallest = val;
      visMap[y][x] = 1;
    }
  }
}


for (let x = 0; x < w; x++) {
  let tallest = input[h - 1][x];
  for(let y = h - 1; y >= 0; y--) {
    let val = input[y][x];
    if(val > tallest) {
      tallest = val;
      visMap[y][x] = 1;
    }
  }
}



// console.log(w);
// console.log(h);
// console.log(visMap);


let rowCounts = visMap.map(line => line.reduce((acc, v) => acc + v, 0));
console.log("🚀 ~ file: index.js:76 ~ rowCounts", rowCounts);
let count = rowCounts.reduce((acc, v) => acc + v, 0);
console.log("🚀 ~ file: index.js:78 ~ count", count);


const losMap = new Array(h).fill(0).map(v => new Array(w).fill(0));

for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {

    console.log('------ coordinates:', y, x);
    let v = input[y][x];
    console.log("🚀 ~ file: index.js:90 ~ v", v);
    let score = 1;
    for (let j = y - 1; j > 0; j--) {
      const e = input[j][x];
      if(e >= v || j === 0) {
        let t = Math.abs(y - j)
        console.log("🚀 ~ file: index.js:93 ~ t", t);
        score *= t;
        break;
      }
    }
    for (let j = y + 1; j < h; j++) {
      const e = input[j][x];
      if(e >= v || j === h - 1) {
        let b = Math.abs(y - j)
        console.log("🚀 ~ file: index.js:102 ~ b", b);
        score *= b;
        break;
      }
    }
    for (let i = x - 1; i > 0; i--) {
      const e = input[y][i];
      if(e >= v || i === 0) {
        let l = Math.abs(x - i)
        console.log("🚀 ~ file: index.js:111 ~ l", l);
        score *= l;
        break;
      }
    }
    for (let i = y + 1; i < w; i++) {
      const e = input[y][i];
      if(e >= v || i === w - 1) {
        let r = Math.abs(x - i)
        console.log("🚀 ~ file: index.js:120 ~ r", r);
        score *= r;
        break;
      }
    }
    console.log(score);

    losMap[y][x] = score;
  }
}

console.log(losMap)
let best = Math.max(...losMap.flat());
console.log(best);