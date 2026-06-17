# Journal de bord — Neon Runner

> 3 lignes par jour : ce que j'ai **fait**, ce que j'ai **compris**, ce qui m'a **bloqué**.

---

## Mardi 17 juin 2026 — Jour 1

- **Fait :** créé ma première page web (`index.html`) et affiché un cube 3D qui tourne dans le navigateur avec Three.js. Premier commit git (T01 ✅). Puis remplacé le cube par un sol néon qui défile vers moi → sensation de vitesse (T02 ✅).
- **Compris :** une page web a besoin d'un serveur local pour charger les modules ; la 3D marche avec 3 briques (scène, caméra, renderer) ; un commit git, c'est un point de restauration. Pour le T02 : l'astuce du défilement infini (recycler la grille toutes les 1 case) et les « nombres magiques » à éviter (calculer `tailleCase` plutôt qu'écrire 1 en dur).
- **Bloqué :** rien aujourd'hui — tout a marché du premier coup !

### T03 — Le joueur et ses déplacements ✅

- **Fait :** ajouté un joueur (un cube vert) qui se déplace à gauche/droite avec les flèches du clavier, et qui s'arrête au bord de l'écran (« mur invisible »). Réglé moi-même la limite à 2.5 en testant. Revue de code : renommé `vitesse` en `vitesseSol` pour éviter la confusion avec `vitesseJoueur`.
- **Compris :** un mesh = une forme + une matière (donc facile à embellir plus tard sans toucher au reste) ; pour un mouvement fluide, on retient les touches enfoncées et c'est la boucle qui déplace ; « borner » une valeur pour ne pas sortir de l'écran ; un nom de variable doit rester précis quand le jeu grandit.
- **Bloqué :** trouver la console sur Mac/Safari (il faut activer les outils développeur dans Réglages → Avancé). Réglé.

### T04 — Les obstacles et la collision ✅

- **Fait :** ajouté des obstacles rouges qui foncent vers moi depuis le fond, en boucle, à des positions gauche/centre/droite tirées au hasard. Quand mon cube en touche un → écran « GAME OVER » et le jeu se fige. Construit en 3 étapes (un obstacle → plusieurs → la collision). Revue de code : donné un nom (`zDisparition`) au nombre magique `6`.
- **Compris :** un **tableau** + une boucle `for` pour gérer plein d'objets d'un coup ; `Math.random()` pour le hasard ; **recycler** les obstacles (les renvoyer au fond) au lieu d'en recréer, c'est mieux pour la perf ; une **collision** = écart petit en x ET en z en même temps (`Math.abs` pour la distance sans le signe) ; un **drapeau** d'état (`partieFinie`) pour figer le jeu.
- **Bloqué :** je pensais qu'une `distanceCollision` plus petite rendait le jeu plus dur — c'est l'inverse (zone dangereuse plus petite = plus facile à éviter). Compris avec l'image de la flaque d'eau à contourner.

### T05 — Les orbes et le score ✅

- **Fait :** ajouté des orbes jaunes (des sphères) à ramasser pour gagner des points. Le score s'affiche en haut à gauche et augmente à chaque orbe prise (`pointsParOrbe`). Le meilleur score (record) est conservé même après avoir fermé la page. Les orbes apparaissent sur une voie libre (jamais collées à un cube, sinon impossibles à prendre). Réutilisé la même fonction `touche()` pour les cubes ET les orbes.
- **Compris :** le `localStorage`, c'est le « carnet » du navigateur qui garde une info entre deux parties (et même après fermeture) ; on peut **réutiliser une seule fonction** (`touche`) pour deux usages différents, c'est plus propre que de la réécrire ; une `SphereGeometry` pour faire une bille ronde ; placer un objet sur une voie libre en réessayant au hasard avec une limite d'essais pour ne jamais bloquer.
- **Bloqué :** rien de majeur — surtout bien comprendre que ramasser une orbe ne la supprime pas : on la **recycle** au fond, comme les obstacles.

### T06 — La montée en difficulté ✅

- **Fait :** ajouté l'accélération du jeu. J'ai créé un `facteurVitesse` (un multiplicateur qui démarre à 1) qui grandit un tout petit peu à chaque image ; le sol, les obstacles et les orbes se déplacent maintenant à `vitesse × facteurVitesse`, donc tout accélère en douceur avec le temps. Revue de code : rangé `facteurVitesse` avec les autres valeurs d'état (`score`, `partieFinie`).
- **Compris :** la différence entre un **`const`** (un réglage qui ne change jamais, ex. `accelerationVitesse`) et un **`let`** (une valeur qui change pendant la partie, ex. `facteurVitesse`) ; pourquoi on augmente d'un **tout petit peu** (`0.0001`) à chaque image plutôt que d'un gros coup (sinon le jeu deviendrait injouable en 2 secondes) ; un seul multiplicateur permet d'accélérer plusieurs choses d'un coup.
- **Bloqué :** rien de bloquant — juste une question de « feeling » : la montée me semblait un peu lente, j'ai testé des valeurs et finalement gardé `0.0001`.
