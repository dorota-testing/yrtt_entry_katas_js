// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    // turn into arrays with separate words
    const arrWords = str.split(' ');
    const myArray = [];
    const reg = /[.,:!?]/gu;
    //loop through arrWords
    for (const word of arrWords){
        //check for punctuation
        let strPunctuation = '';
        let myWord = word;
        let arrPunct = word.match(reg);
        if(arrPunct != null){
            //console.log(arrPunct.length);
            let cutOff = word.length - arrPunct.length;
            strPunctuation = word.substring(cutOff);
            myWord = word.substring(0, cutOff);
        }
        let wordEnd = myWord.substring(0, 1) + 'ay' + strPunctuation;
        let wordStart = myWord.substring(1);
        //console.log(myWord);
        myArray.push(wordStart+wordEnd);
    }

    //console.log(myArray);
    return myArray.join(' ');
}

module.exports = {
    pigLatin
};
