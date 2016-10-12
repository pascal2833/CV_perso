Pour ce CV, j'ai utilisé le cours de Udacity Front End mais pas mal adapté.

## TODO :
* Add icon/name site
* Il faut aussi mettre en placel'option multilangue.
* Adapter aux différents navigateurs car pas mal de nvlles technologies (Flex, ...).
* Ajouter footer `pour faire + joli.
* Enlever les divs pour mettre des tags avec sémantique (CF exo Udacity).
* Appliquer web-kit pour all flex/safari avec mixin gnaux !
* Adapter pour rem/css/typo : support issues: doesn't work in IE 8, Safari 4, or iOS 3.2.
* Integrer Boostrap pour que j'ai acces aux intéractions typiques des mobiles, CF http://getbootstrap.com/css/, mobile first.
* Citer source image : https://pixabay.com
* Manque le footer
* Ajouter nav bar (avec Polymer ?).
* Mettre links/schools, ... réels !

## Il y a différentes logiques derrières :

* Bonne partie de l'html est généré par js et les données à insérées dans cet html sont elles même sissue d'un autre fichier js contenant des objets json.
* On a également utiliser **l'encapsulation** pour avoir un code + propre, cad :
    * on met notre fonction associée à un objet, pour que ce soit + clair et éviter le risque des erreurs si on appelle avec même nom, ...

