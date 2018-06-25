const HashMap = require('./hashMap');

const newHash = new HashMap();

//we need to loop through the str 
//insert each element of the string into the hashmap
//create an obj that holds unique values of the string
//if more two properties are odd its not a palindrome
//if there are no odd values in the object its not a palindrome

function palindrome(str) {
  let newHashMap = new HashMap();
  let odd = 0;
  //loop through the str
  for (let i = 0; i < str.length; i++) {
    //create variable to hold the value of the index
    let letter = str[i];
    //if the hashmap doesnt have a property withe value of the string[index]
    let isInHashMap = newHashMap._findSlot(letter);

    try {
      let count = newHashMap.get(letter);
      count++;
      newHashMap.set(letter, count);
    } catch (err) {
      newHashMap.set(letter, 1);
    }
    // console.log(newHashMap._slots[isInHashMap]);
  }
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let count = newHashMap.get(letter);

    if (count % 2 !== 0) {
      odd++;
    }
    if (odd > 1) {
      return false;
    }
  }
  return true;

}

console.log(palindrome('acecarr'));
