const spamWords = [`1xBet`, `XXX`];

function checkSpam(str) {
  const strLC = str.trim().toLowerCase();
  if (!strLC) return false;

  for(let i = 0; i < spamWords.length; i++) {
    if (strLC.includes(spamWords[i].toLowerCase())) return true;
  }
  
  return false;
};