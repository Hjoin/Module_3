/*
1. **iqTest** Bob is preparing to pass an IQ test. The most frequent task in this test 
    is to find out which one of the given numbers differs from the others. Bob observed
    that one number usually differs from the others in evenness. Help Bob — to check his 
    answers, he needs a program that among the given numbers finds one that is different in 
    evenness, and return the position of this number. _Keep in mind that your task is to help 
    Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)_

		iqTest("2 4 7 8 10") → 3 //third number is odd, while the rest are even
		iqTest("1 2 1 1") → 2 // second number is even, while the rest are odd
		iqTest("") → 0 // there are no numbers in the given set
        iqTest("2 2 4 6") → 0 // all numbers are even, therefore there is no position of an odd number
*/

function iqTest(numbers){
    numbers = numbers.split(" ").map(function(n){return n}); //splits the numbers and puts a space between each of them when mapped
    
    var odd = numbers.filter(function(n){ return n % 2 === 1}); //filters odd number
    var even = numbers.filter(function(n){ return n % 2 === 0}); //filters even numbers
    
    return odd.length < even.length ? //is the length of the odds less than the length of the evens? 
    (numbers.indexOf(odd[0]) + 1) //+1 is to adjust for the the fact that the elements start from 1 (not 0): for when there is majority even
    : (numbers.indexOf(even[0]) + 1); //+1 is to adjust for the fact that the elements start from 1 (not 0): for when there is majority odd
  }

/*
2. **titleCase** Write a function that will convert a string into title case, given an optional 
    list of exceptions (minor words). The list of minor words will be given as a string with each 
    word separated by a space. Your function should ignore the case of the minor words string -- 
    it should behave in the same way even if the case of the minor word string is changed.


* First argument (required): the original string to be converted.
* Second argument (optional): space-delimited list of minor words that must always be lowercase
except for the first word in the string. The JavaScript tests will pass undefined when this 
argument is unused.

		titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
		titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
        titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
    if (title){
      const minorArray = minorWords ? minorWords.split(" ").map(word => word.toLowerCase()) : ['']
      let titleArray = title.split(" ") //array for title
      let finalTitle = [] //array for the final title
      titleArray.map(word => {
        if(minorArray.includes(word.toLowerCase())){ //if the word needs to stay lowercased
          finalTitle.push(word.toLowerCase()) //send the lowercased word to the finalTitle array
        } else { //if the word does not need to stay lowercased
          finalTitle.push(capitalize(word)) //send a capitalized version to the finalArray
        }
      })
      finalTitle[0] = capitalize(finalTitle[0])
      return finalTitle.join(" ")
      }
      else return title
    }
    function capitalize(word){ 
      let newWord = [] //new words
      newWord.push(word[0].toUpperCase()) //new word given, then put it into proper formatting
      for (let i=1; i<word.length; i++){ //for each new word in the array
        newWord.push(word[i].toLowerCase()) //push
      }
      return newWord.join("")
    }