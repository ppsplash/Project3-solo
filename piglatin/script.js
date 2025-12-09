const inputText = process.argv[2];
const text = inputText.toLowerCase().split("");

function validation(input) {
  if ("aeiou".includes(input[0])) {
    const changedText = input.join("") + "way";
    const finalText = changedText[0].toUpperCase() + changedText.slice(1);
    return finalText;
  } else {
    let rightShift = "";
    let i = 0;
    while (i < input.length && !"aeiou".includes(input[i])) {
      rightShift += input[i];
      i++;
    }
    const remText = input.slice(i).join("");
    const changedText = remText + rightShift + "ay";
    const finalText = changedText[0].toUpperCase() + changedText.slice(1);
    return finalText;
  }
}

const output = validation(text);
console.log(output);
