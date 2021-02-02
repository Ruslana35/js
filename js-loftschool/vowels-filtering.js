const string = "Привет. Как дела?";

vowels = ["у", "е", "ё", "а", "о", "ы", "и", "я","э"];

const getVowels = vowelsToFilter=>{

  let searchedVowel ="";

  for (i = 0; i < vowelsToFilter.length; i++){
    const currentVowel = vowelsToFilter[i].toLowerCase();
   
    if (vowels.includes(currentVowel)) {
      searchedVowel += currentVowel;
    }
  } 

  return searchedVowel;
}
console.log (getVowels(string))