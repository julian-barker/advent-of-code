const data = await Deno.readTextFile('input.txt');
const realInput = data.split('\n');

const testData = await Deno.readTextFile('test.txt');
const testInput = testData.split('\n');

const input = realInput;
