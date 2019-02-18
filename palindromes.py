# -*- coding: utf-8 -*-

# No param needed, as we will ask it directly to the user 
def check_palindrome():
	# Alternative: remove this line and add a param named "word" to the function
	word = input('\nPlease, enter the word to evaluate: ')
	reversedWord = word[::-1]

	# If the word is the same backwards, it's a palindrome
	if word.lower() == reversedWord.lower():
		print("Congratulations! That word is a palindrome") # Human friendly output (we can change this to true)
	else:
		print("Ohhhhh, I'm afraid that word is not a palindrome") # Human friendly output (we can change this to false)

# Execute the function if this is not part of a module
if __name__ == "__main__":
	check_palindrome()