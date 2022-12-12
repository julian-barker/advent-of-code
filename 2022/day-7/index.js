const data = await Deno.readTextFile('input.txt');
const realInput = data.split('\n');

const testData = await Deno.readTextFile('test.txt');
const testInput = testData.split('\n');

const input = realInput;

let directory = {'/': {}};

let len = input.length;
let l = 0;

function buildDir(dir) {
  while(l < len) {
    console.log('dir = ', dir)
    let line = input[l].split(' ');
    console.log(`line ${l}:`, line);
    if(line[0] === '$') {
      let cmd = line[1];
      if(cmd === 'cd') {
        let arg = line[2];
        console.log(arg);
        if(arg === '..') {
          console.log('exiting');
          return;
        }
        l++;
        console.log(`stepping into: ${arg}`);
        buildDir(dir[arg]);
      }
      // if(cmd === 'ls') {
      //   continue;
      // }
      l++;
    } else if (line[0] === 'dir') {
      let newDir = {};
      console.log(`adding dir ${line[1]}`);
      dir[line[1]] = newDir;
      l++;
    } else {
      dir[line[1]] = line[0];
      l++;
    }
  }
}

buildDir(directory);

console.log(directory);

let sizes = [];

function getSize(dir) {
  let arr = Object.values(dir);
  console.log("🚀 ~ file: index.js:56 ~ getSize ~ arr", arr);
  let sum = arr.reduce((acc, v) => {
    let num = parseInt(v);
    if (num) {
      return acc + num;
    }
    return acc + getSize(v);
  }, 0);
  sizes.push(sum);
  return sum;
}

getSize(directory['/']);
sizes.sort((a,b) => a - b);
console.log(sizes);

// let total = sizes.filter(v => v < 100000).reduce((acc, v) => acc + v);
const total = sizes[sizes.length - 1];
console.log(total);

const needed = total - 40000000;

const best = sizes.find(v => v >= needed);
console.log(best);