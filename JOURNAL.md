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

### T07 — L'effet WAOU #1 : le néon (bloom) ✅

- **Fait :** ajouté l'effet **néon** : les objets lumineux brillent vraiment, avec un halo. Pour ça j'ai branché le **post-traitement** de Three.js (`EffectComposer` + `UnrealBloomPass`) à la place du dessin direct, et réglé la force, l'étalement et le seuil du halo. J'ai aussi rendu le jeu **adaptable à la taille de la fenêtre** (quand on redimensionne, l'image reste nette et bien proportionnée).
- **Compris :** le **post-traitement**, c'est comme une **chaîne de montage** : on dessine la scène, puis on lui passe des « filtres » par-dessus avant de l'afficher ; le **bloom** repère ce qui est clair et le fait « baver » en lumière → c'est lui qui rend le jeu beau ; un **seuil** décide à partir de quelle luminosité un objet se met à briller ; quand la fenêtre change de taille, il faut prévenir la caméra (`aspect`), le renderer ET la chaîne du bloom (`setSize`).
- **Bloqué :** *(à compléter par toi : un réglage du halo difficile à trouver ? un objet qui brillait trop / pas assez ?)*

### T08 — L'effet WAOU #2 : le juice ✅

- **Fait :** ajouté tout le « juice » qui rend le jeu satisfaisant. 1) Une **secousse d'écran** au crash : la caméra tremble un court instant puis se calme toute seule. 2) Des **particules** (gerbe d'étincelles) qui jaillissent quand on ramasse une orbe, en réutilisant l'astuce de la réserve recyclée. 3) Des **sons** fabriqués par le navigateur (Web Audio) : un bip aigu à la collecte, un boum grave au crash. Revue de code : sorti les valeurs en dur des sons (`SON_ORBE_HZ`, etc.) et de la vitesse des particules (`VITESSE_PARTICULE`) pour les ranger en haut, et renommé `t` en `fraction`.
- **Compris :** le « juice » = des petits effets qui ne changent pas les règles mais rendent les actions agréables ; faire trembler la caméra et la faire revenir à sa position de repos ; un système de **particules** = une réserve d'objets recyclés avec une **vitesse** et une **vie** (compte à rebours) chacun ; on peut **fabriquer des sons sans fichier** avec le Web Audio (oscillateur = la note, gain = le volume) ; le navigateur **bloque le son** tant que le joueur n'a pas interagi, il faut le « réveiller » au premier appui ; toujours ranger les réglages en haut, pas en dur dans la boucle.
- **Bloqué :** rien de bloquant — juste découvert le piège du son bloqué au démarrage, réglé en réveillant l'audio à la première touche pressée.

### T09 — Les écrans et l'interface ✅

- **Fait :** ajouté les **écrans** qui encadrent une partie : un écran d'accueil « NEON RUNNER / Appuie pour jouer » au démarrage, et un écran « GAME OVER » à la fin avec le score de la partie, le record et un bouton **Rejouer**. On peut rejouer **sans recharger la page** : le score repart à 0, le joueur et les obstacles sont remis en place.
- **Compris :** on peut superposer de l'**interface en HTML/CSS** par-dessus le canvas 3D, et l'**afficher ou la cacher** selon l'état du jeu (accueil / en jeu / game over) ; pour rejouer proprement, il faut **réinitialiser l'état** (score, position du joueur, obstacles) au lieu de tout recharger ; bien séparer les trois moments d'une partie rend le code plus clair.
- **Bloqué :** *(à compléter par toi : un écran qui ne se cachait pas au bon moment ? le bouton Rejouer ?)*

---

## Mercredi 18 juin 2026 — Jour 2

### T10 — Le publier sur le web ✅

- **Fait :** mis le jeu **en ligne** avec **GitHub Pages**, et obtenu un **lien partageable** que je peux envoyer à mes potes : https://robernarddd.github.io/neon-runner/. Le jeu se joue maintenant d'un simple clic, sans rien installer.
- **Compris :** **GitHub Pages** prend les fichiers de mon dépôt GitHub et les sert comme un vrai site web, gratuitement ; `git push` envoie mon code en ligne et la page se met à jour ; comme tout tourne dans le navigateur (pas de serveur secret), un site de fichiers statiques suffit pour partager le jeu.
- **Bloqué :** *(à compléter par toi : un délai avant que la page apparaisse ? un fichier qui ne se chargeait pas en ligne ?)*

### T11 — Un deuxième thème visuel ✅

- **Fait :** créé un fichier `theme.js` qui contient **5 thèmes** (couleurs, vitesses) — neon, coucherDeSoleil, halo, haloChief, haloForerunner. On change complètement l'ambiance du jeu **en modifiant seulement ce fichier de config**, sans toucher au moteur. Thème actif : haloForerunner.
- **Compris :** l'architecture **« data-driven »** (pilotée par les données) : on **sépare le moteur** (le code qui fait tourner le jeu) du **contenu** (les réglages dans `theme.js`) ; du coup, ajouter un nouveau thème = ajouter des données, pas réécrire du code — c'est la preuve d'une bonne conception ; un seul endroit à changer pour transformer tout le look du jeu.
- **Bloqué :** *(à compléter par toi : une couleur qui ne s'appliquait pas ? trouver le bon équilibre de vitesses ?)*

### T13 — Des objets 3D importés du web ✅

- **Fait :** remplacé les formes simples par de **vrais modèles 3D** téléchargés sur le web (libres de droits, depuis Poly Pizza) : le joueur est un **vaisseau**, les obstacles sont **3 astéroïdes** tirés au hasard, les orbes sont des **cristaux** néon. Chargés avec `GLTFLoader`. J'ai crédité tous les auteurs dans `CREDITS.md`.
- **Compris :** on charge un modèle 3D (fichier `.glb`/`.gltf`) avec un **`GLTFLoader`** ; il faut souvent **normaliser la taille** (mettre tous les modèles à la bonne échelle) et **cloner** un modèle pour en avoir plusieurs ; on garde une **hitbox invisible** simple pour les collisions, même si le modèle visible est compliqué ; les **licences** comptent : CC0 = libre total, CC-BY = libre mais il faut **citer l'auteur** (d'où le fichier `CREDITS.md`).
- **Bloqué :** *(à compléter par toi : un modèle mal orienté / trop grand au départ ? le chargement qui prend du temps ?)*

### T12 — README + démo ✅ (dernier ticket !)

- **Fait :** écrit le `README.md` du projet (présentation, lien pour jouer en ligne, tableau des commandes, but du jeu, comment le lancer en local, plan des fichiers). Testé le jeu dans le navigateur pour vérifier qu'il tourne bien pour la démo. Déplacé le T12 en « Fait » → **tous les tickets sont bouclés**. Commit, puis `git push` pour envoyer le README sur GitHub.
- **Compris :** un **README**, c'est la « carte de visite » d'un projet — la première chose qu'on voit sur la page GitHub, donc il doit donner envie ET expliquer comment jouer ; la différence entre **commiter** (sauvegarder en local) et **pusher** (envoyer la copie en ligne pour que les autres la voient) ; le workflow complet d'un ticket : travailler → backlog en « Fait » → commit → push.
- **Bloqué :** le serveur local a refusé de démarrer avec l'erreur « Address already in use ». Pas un vrai bug : ça voulait juste dire qu'un serveur tournait déjà sur le port 8000, donc le jeu était déjà accessible.
