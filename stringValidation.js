//Validates a string's format, containing both opening and closing parentheses 
function validateString(input){

	// We will need this below
	let inputLength;
	const facingParenthesis = /(\[\])|(\(\))|(<>)/g;

	//Remove all non-parentheses characters
	const nonParenthesesChars = /[^\[\]\(\)<>]/g; 
	input = input.replace(nonParenthesesChars,"");

	// If the input string is empty 
	// after removing non-parentheses characters
	// then it's not valid!
	if (input.length === 0) { return false; }

	// If the input string's length is an
	// odd number, then it dosn't have the same
	// nº of opening and closing parentheses
	if (input.length % 2) { return false; }

	// Remove the pairs of facing parentheses
	// one by one
	do { 
        stopFlag = input.length;
        input = input.replace(facingParenthesis, "");
    } while (stopFlag !== input.length)
    // When we can not remove any more pairs
    // then we're done!

    // If after the previous process the string is empty
    // the input only has facing parenthesis
    // which means, the format is correct!
    if (input.length === 0) { return true; }

	// In any other case, it's invalid
	return false;
}

//This is for exporting the function, so it can be imported into another scripts.
//If you don't need to import it anywhere else, just comment the next line
export default validateString;