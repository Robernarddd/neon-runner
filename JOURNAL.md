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
