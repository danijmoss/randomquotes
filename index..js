var tweetUrl; 
function quotes() {
  var aquote = new Array;
  aquote[0] = "\"I'm going to need you to take your opinions, and put 'em waaay up inside your butthole...Put 'em way up inside there.\"";
  aquote[1] = "\"Wubba Lubba Dub Dub!\"";
  aquote[2] = "\"Whatever you are asking, the answer is I'm amazing.\"";
  aquote[3] = "\Get Schwifty!\"";
  aquote[4] = "\I hate to break it to you, but what people call 'love' is just a chemical reaction that compels animals to breed.\"";
  aquote[5] = "\If you get killed in someone else's dream, you die for real, Morty.\"";
  aquote[6] = "\It's like the N word and the C word had a baby, and it was raised by all the bad words for Jews.\"";
  aquote[7] = "\What about the reality where Hitler cured cancer, Morty? The answer is: Don't think about it.\"";
  aquote[8] = "\Do you know how many characters there are in the Simpsons Morty? There's like a-a BILLION CHARACTERS, M-Morty.\"";
  aquote[9] = "\Oh, I'm sorry Morty, are you the scientist or are you the kid who wanted to get laid?\"";

  rdmQuote = Math.floor(Math.random() * aquote.length);
  document.getElementById("txtbox").value = aquote[rdmQuote];
  tweetUrl = 'https://twitter.com/intent/tweet?text=' + aquote[rdmQuote] + ' - Rick Sanchez';
}
window.onload = quotes;

function tweet() {
  window.open(tweetUrl); i
}
