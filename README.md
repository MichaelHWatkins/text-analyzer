# _Text Analyzer_

#### _A page for a text analyzer._

#### By _**Michael Watkins**__**Albert Lee**__
## Technologies Used

* _CSS_
* _HTML_
* _Markdown_
* _Git Repositories_
* _Jquery_
* _Javascript_

## Description

_{A website for a text analyzer.}_

## Setup/Installation Requirements

* _Navigate to https://github.com/MichaelHWatkins/text-analyzer in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open DIRECTORYNAME/index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_{MIT Copyright (c) 2021 Michael Watkins, Albert Lee}_

## Contact Information

_{Albert Lee leesga8@gmail.com}_
_{Michael Watkins michaelhugheswatkins@gmail.com}_


Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- Our second test. -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

<!-- Our third test. -->
Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

<!-- Our fourth test. -->
Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- Our second test. -->
Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

<!-- Our third test. -->
Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- Our fourth test. -->
Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

<!-- Our fifth test. -->
Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

<!-- Our sixth test. -->
Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

<!-- Our second test. -->
Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

<!-- Our third test. -->
Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"