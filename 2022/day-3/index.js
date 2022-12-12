
let map = {}

for (let i = 0; i < 26; i++) {
  let char = String.fromCharCode(i + 97);
  map[char] = i + 1;
}
for (let i = 0; i < 26; i++) {
  let char = String.fromCharCode(i + 65);
  let pri = i + 27;
  map[char] = pri;
}

const data = await Deno.readTextFile('input.txt');
const input = data.split('\n');

let total = 0;

for (let i = 0; i < input.length; i += 3) {
  let first = input[i];
  let secondSet = new Set(input[i + 1]);
  let thirdSet = new Set(input[i + 2]);
  console.log(first, secondSet, thirdSet);
  for (let char of first) {
    if(secondSet.has(char) && thirdSet.has(char)) {
      console.log(char, map[char]);
      total += map[char];
      break;
    }
  }
}

console.log(total);

