const plainText = process.argv[2];
const offset = Number(process.argv[3]);
if (!plainText || !/^[a-zA-Z ]+$/.test(plainText)) {
  console.log("Invalid input!!!Please enter text and offset to encrypt");
  return;
}

const arrAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const text = plainText.toLowerCase().split("");
let encIndex;
const result = text.map((each) => {
  const currentIndex = arrAlphabet.indexOf(each);
  if (currentIndex === -1) return each;
  if (offset >= 0) {
    encIndex = (currentIndex + offset) % 26;
    return arrAlphabet[encIndex];
  }

  const absOffset = Math.abs(offset) % 26;
  const effOffset = 26 - absOffset;
  encIndex = currentIndex + effOffset;
  return arrAlphabet[encIndex];
});
console.log(result.join(""));
