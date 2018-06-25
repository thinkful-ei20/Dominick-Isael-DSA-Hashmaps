const HashMap = require('./hashMap');

const getHashedAnagram = arr => {
  const anagrams = new HashMap();
  const result = [];
  const different = [];
  for(let i=0; i<arr.length; i++){
    let sortedLetters = arr[i].split('').sort().join('');
    try {
      anagrams.set(sortedLetters, [...anagrams.get(sortedLetters), arr[i]]);
    } catch(err){
      different.push(sortedLetters);
      anagrams.set(sortedLetters, [arr[i]]);
    }
  }
  for(let i=0; i < different.length; i++){
    result.push(anagrams.get(different[i]));
  }
  return result;
};

console.log(getHashedAnagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));