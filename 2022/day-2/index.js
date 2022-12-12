const map = {
  X: {
    P: 0,
    A: 3,
    B: 1,
    C: 2
  },
  Y: {
    P: 3,
    A: 1,
    B: 2,
    C: 3
  },
  Z: {
    P: 6,
    A: 2,
    B: 3,
    C: 1
  }
};

const data = await Deno.readTextFile('input.txt');
const input = data.split('\n');
console.log(input);

let total = 0;

for (let line of input) {
  let [opp, me] = line.split(' ');
  console.log(me, opp);
  let pts = map[me]['P'] + map[me][opp];
  total += pts;
}

console.log(total);