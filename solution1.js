// the string which is to be converted.

let words = prompt("Enter a short sentence")
// the function iterates over each  character in the string.
function change() {
    let changedWords = "";

    // //For each character, it checks if the character’s index is in the array
    for (let i = 0; i < words.length; i++) {
        //If the index is in this array, it converts the character to uppercase
        if ([].includes(i)) {
            changedWords += words[i].toUpperCase();
            //If the index is not in  the array, it converts the character to lowercase
        } else {
            changedWords += words[i].toLowerCase(1);
        }

        // The function returns the modified string with characters at the specified positions converted to uppercase and the rest converted to lowercase.
    }
    return changedWords;
}

//Calling the function will show the modified string when the console log is used to call the function.
alert(change());

