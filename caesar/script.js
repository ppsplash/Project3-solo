const plainText = process.argv[2];
const offset = Number(process.argv[3]);
if (!plainText || !/^[a-zA-Z ]+$/.test(plainText)) {
  console.log("Invalid input!!!Please enter text and offset to encrypt");
  return;
}

const arrAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const text = plainText.toLowerCase().split("");
let encryptedIndex;
const result = text.map((each) => {
  const currentIndex = arrAlphabet.indexOf(each);
  if (currentIndex === -1) {
    return each;
  } else if (offset >= 0) {
    encryptedIndex = (currentIndex + offset) % 26;
  } else if (offset < 0) {
    encryptedIndex = 26 - ((currentIndex * -offset) % 26);
  }

  const output = arrAlphabet[encryptedIndex];
  return output;
});
console.log(result.join(""));
