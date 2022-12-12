const data = await Deno.readTextFile('input.txt');

let last = data.slice(0, 14).split('');
console.log(last);

let marker = 0;

for (let i = 14; i < data.length - 1; i++) {
  let lastSet = Array.from(new Set(last));
  console.log(lastSet);
  if( lastSet.length === 14 ) {
    marker = i;
    break;
  }
  last.shift();
  last.push(data[i]);
}

console.log(marker);