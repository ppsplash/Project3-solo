const inputText = process.argv[2];
const text = inputText.split("");

function validation(input) {
  if ("aeiou".includes(input[0])) {
    const remove = input.shift();
    input.push(remove);
    const changedText = input.join("") + "way";
    const finalText = changedText[0].toUpperCase() + changedText.slice(1);
    return finalText;
  }
}

const output = validation(text);
console.log(output);
