#Une séquence d'animation asynchrone

Pour animer les images, l'API Web [`animate()`](https://developer.mozilla.org/fr/docs/Web/API/Element/animate) est utilisez.

Vous devez enchainer les animations des trois images pour quelles se produise une après l'autre.

Dans l'animation finale, on devrait voir l'animation de `spade2` commencer lorsque l'animation de `spade1` termine et l'animation de `spade3` commencer lorsque l'animation de `spade2` termine.

La fonction `animate()`retourne un objet `Animation` regardez comment utiliser la propriété `finished` de cet objet. ps: cC'est une `Promise`

Vous devez implémenter l'animation complète de 3 façons différentes:

1. Implémentez une version qui fonctionne en utilisant les callback()
2. Implémentez une version qui utilise une chaine de promesses
3. Implémentez une version qui utilise `async` et `await`