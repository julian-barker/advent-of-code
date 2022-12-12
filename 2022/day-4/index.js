const data = await Deno.readTextFile('input.txt');
const input = data.split('\n');
const test = ['9-30,30-36'];

let total = 0;

for (let pair of input) {
  let [first, second] = pair.split(',').map(range => range.split('-').map(char => parseInt(char)));
  // console.log(first,second);
  let combined = [...first, ...second];
  let max = Math.max(...combined);
  let min = Math.min(...combined);
  let width = (first[1] - first[0]) + (second[1] - second[0]);
  if ((max - min) <= width) {
    total++;
    console.log('----------match----------', `total = ${total}`);
  }
}

console.log(total);