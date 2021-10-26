// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function offensiveWords(text){
  const wordArray = text.split(" ");
  let newWordArray = [];
  wordArray.forEach(function(word){
    if(word != "zoinks" && word != "muppeteer" && word != "biffaroni" && word != "loopdaloop"){
      newWordArray.push(word);
    }
  })
  let newSentance = newWordArray.join(" ")
  console.log(newSentance)
  return "<p>" + newSentance + "</p>";
}
// function commonWords(text) {
//   let wordArray = text.toLowerCase().split(" ");
//   wordArray = wordArray.sort();
//   let count = 0;
//   let ansArray = [];
//   let finalArray = [];
//   wordArray.forEach(function(word){
//     count++
//     if(word != wordArray[count]){
//       ans = numberOfOccurrencesInText(word, text)
//       ansArray.push(ans)
//       finalArray.push(word)
//     }
//   })
//  console.log(ansArray, finalArray)
// }

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
  if (element.toLowerCase().includes(word.toLowerCase())) {
    let x = new RegExp(word + ".*");
      htmlString = htmlString.concat(element.substring(0, element.indexOf(element.match(x))) + "<b>" + element.match(x) + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}



$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    console.log(boldPassage(word, passage))
    //commonWords(passage)
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#bad-words").html(offensiveWords(passage));
  });
});