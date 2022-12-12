

function getMostCalories(arr) {
  let most = new Array();
  let curr = 0;
  let id = 1;
  
  console.log(most);

  for (let i in arr) {
    if (arr[i] === '' || i === arr.length - 1) {
      console.log(`elf #${id} calories`, curr);
      if(most.length < 3) {
        most.push(curr);
        console.log(most);
      } else {
        let min = Math.min(...most);
        let minIdx = most.indexOf(min)
        if(curr > min) {
          most[minIdx] = curr;
        }
      }
      curr = 0;
      id++;
    } else {
      curr += parseInt(arr[i]);
    }
  }

  return most.reduce((a,b) => a + b);
}

const data = await Deno.readTextFile('input.txt');
const input = data.split('\n');

console.log(getMostCalories(input));
