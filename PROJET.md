# PROJET.md — Le jeu à construire

> Ce fichier décrit **quoi** on construit et **comment c'est organisé**.
> La façon d'enseigner est dans `CLAUDE.md`. Le déroulé jour par jour est dans `FEUILLE-DE-ROUTE.md`.

---

## Le projet en une phrase

Un **runner en 3D** qui tourne dans le **navigateur** (fait avec **Three.js**) : on file vers l'avant à toute vitesse, on esquive des obstacles néon, on ramasse des orbes, et la vitesse augmente. Jouable d'un **simple lien** à envoyer aux potes.

Nom de travail : **Neon Runner** (Gaël peut le rebaptiser).

---

## L'objectif assumé : l'effet « waou »

Ce projet doit en mettre plein la vue. Le « waou » vient de quatre ingrédients, à viser progressivement :

1. **La 3D** — une vraie perspective, une caméra qui suit le joueur, de la profondeur.
2. **Le rendu néon (bloom)** — un effet de post-traitement qui fait « briller » les objets lumineux. C'est l'effet le plus spectaculaire pour le moins d'efforts : c'est le moment où le jeu devient beau.
3. **La sensation de vitesse** — décor qui défile, accélération progressive, légère secousse de caméra.
4. **Le « juice »** — petits effets qui rendent tout satisfaisant : particules quand on ramasse un orbe, secousse d'écran (screen shake) au crash, sons courts.

---

## L'idée d'architecture (réutilisée du premier projet)

On sépare strictement deux choses :

- **Le moteur** = le code du jeu : la boucle de rendu, les déplacements, les collisions, le score. Il ne connaît pas les valeurs précises.
- **Le contenu / la configuration** = un fichier de données (`config.js` ou un JSON) : couleurs, vitesses, paliers de difficulté, types d'obstacles, thèmes visuels.

**Règle d'or de l'architecture :** changer l'ambiance du jeu (un nouveau thème de couleurs, une difficulté différente) = modifier le fichier de configuration, **sans toucher au moteur**. C'est la preuve d'une bonne conception (data-driven), et ça permettra d'ajouter un 2e thème facilement.

---

## La stack

- **HTML / CSS / JavaScript** (modules ES) — pas de langage exotique, tout tourne dans le navigateur.
- **Three.js** pour la 3D, chargé depuis un CDN via un « importmap » (pas de build au début).
- Pour le rendu néon : le **post-traitement de Three.js** (EffectComposer + bloom), disponible dans les addons de Three.js.
- Servi en local avec **`python3 -m http.server`** pendant le développement.
- **git** + **GitHub** pour l'historique, et **GitHub Pages** pour publier le jeu et obtenir le lien partageable.
- Ce projet n'a **pas de secret** (tout tourne côté navigateur). Le `.gitignore` reste utile (dépendances, fichiers système). Si un jour on ajoute un classement en ligne, les secrets reviendront — on verra à ce moment-là.

---

## Organisation des fichiers (cible — on y arrive progressivement)

```
neon-runner/
├── CLAUDE.md
├── PROJET.md
├── BACKLOG.md
├── FEUILLE-DE-ROUTE.md
├── README.md            ← écrit en fin de projet
├── .gitignore
├── index.html           ← la page : importmap Three.js + le canvas
├── style.css            ← l'apparence (plein écran, UI du score)
├── .claude/commands/code-review.md
└── src/
    ├── main.js          ← point d'entrée : crée scène, caméra, renderer, lance la boucle
    ├── game.js          ← la logique : état de partie, mise à jour, collisions
    ├── player.js        ← le joueur et ses déplacements
    ├── obstacles.js     ← apparition et défilement des obstacles / orbes
    ├── effects.js       ← bloom, particules, screen shake, sons
    └── config.js        ← couleurs, vitesses, difficulté, thèmes (le « contenu »)
```

Note pour Claude Code : ne crée pas tout d'un coup. On commence par un seul fichier qui affiche une scène, et on découpe en modules quand ça devient utile, en expliquant pourquoi.

---

## Le gameplay (boucle principale)

1. Le joueur avance en continu (ou le décor vient vers lui), vue 3D, caméra qui suit.
2. Il se déplace **gauche / droite** (entre des voies, ou librement) pour éviter les obstacles.
3. Toucher un obstacle = **game over**. Ramasser un orbe = **points**.
4. La **vitesse augmente** avec le temps → difficulté croissante.
5. **Score** affiché en continu, **meilleur score** conservé (via `localStorage` du navigateur).
6. Un **écran de départ** (« Appuie pour jouer ») et un **écran de game over** (« Rejouer »).

---

## Conventions

- **Noms clairs en français** pour la logique de jeu (`joueur`, `obstacle`, `vitesse`, `score`).
- **Petites fonctions** qui font une seule chose.
- **Tester dans le navigateur après chaque changement**, console ouverte.
- Garder un bon **framerate** : viser une sensation fluide, ne pas créer des milliers d'objets inutiles.

---

## Pour plus tard (si la base est solide)

- Un **classement en ligne** (les potes comparent leurs scores).
- Des **skins** / vaisseaux différents, des **environnements** variés (data-driven).
- Une **musique** et des sons plus riches.
- Une **version tactile** pour jouer sur téléphone.
