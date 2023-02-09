function isLetter(a) {
  return (a >= "a" && a <= "z") || (a >= "A" && a <= "Z");
}

function reverse(a) {
  let inv = "";
  for (let i = a.length - 1; i >= 0; i--) {
    inv += a[i];
  }
  return inv;
}

function inverse(phrase) {
  let d = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (!isLetter(phrase[i])) {
      let mot = phrase.substring(d, i);
      let motinverse = reverse(mot);
      console.log(motinverse);
      phrase = phrase.replace(mot, motinverse);

      for (; i < phrase.length; i++) {
        if (isLetter(phrase[i])) {
          d = i;
          break;
        }
      }
    }
  }
  console.log(phrase);
}

inverse("allo! oui?");
