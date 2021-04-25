const spamWords = [`1xBet`, `XXX`];

function checkSpam(str) {
  let strLC = str.trim().toLowerCase();
  if (!strLC) return false;
  
  let isSpam = false;

  for(let i = 0; i < spamWords.length; i++) {
    if (strLC.includes(spamWords[i].toLowerCase())) {
      isSpam = true;
      break;
    }
  }
  
  return isSpam;
};