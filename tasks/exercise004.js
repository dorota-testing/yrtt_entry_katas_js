// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    // turn into arrays with separate words
    const arrWords = str.split(' ');
    const myArray = [];
    //loop through words
    for (const word of arrWords){
        let wordEnd = word.substring(0, 1) + 'ay';
        let wordStart = word.substring(1) ;
        //console.log(wordEnd);
        myArray.push(wordStart+wordEnd);
    }

    //console.log(myArray);
    return myArray.join(' ');
}

module.exports = {
    pigLatin
};
