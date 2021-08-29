// Assignment code here
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*_-+=";


const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generatePassword = document.getElementById("generate");


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  let characters = alpha;
  // ternary operators
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});
// generate password function
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
