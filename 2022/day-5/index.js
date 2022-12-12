const data = await Deno.readTextFile('input.txt');
let [stackInput, directions] = data.split('\n\n');
directions = directions.split('\n');
// console.log('directions: ', directions);

stackInput = stackInput.split('\n').slice(0, -1);
// console.log("🚀 ~ file: index.js:7 ~ stackInput", stackInput);
let emptyMatrix = new Array(9).fill(0);
for (let i in emptyMatrix) {
  emptyMatrix[i] = [];
}
// console.log(emptyMatrix);

let stacks = stackInput.reduce((acc, v) => {
  
  for (let i = 0; i < v.length / 4; i++) {
    let char = v[i * 4 + 1];
    if(char !== ' '){ 
      acc[i].unshift(char);
    }
  }
  // console.log(acc);
  return acc;
}, emptyMatrix);

console.log(stacks);

directions = directions.map(line => 
  line.match(/\d+/g)
    .map(c => parseInt(c) || ' ')
);
// console.log(directions);

for(let i = 0; i < directions.length; i++) {
  let dir = directions[i];
  let tgt = stacks[dir[2] - 1];
  let src = stacks[dir[1] - 1];

  console.log('directions', dir);
  let num = dir[0];
  console.log(num * -1);
 
  if(src.length >= num) {
    let moveStack = src.splice(num * -1, num);
    console.log("🚀 ~ file: index.js:45 ~ moveStack", moveStack);
    tgt.push(...moveStack);
  }

  console.log(stacks);
}

console.log(stacks)

let tops = stacks.reduce((acc, v) => acc + v.pop(), '');

console.log(tops);
