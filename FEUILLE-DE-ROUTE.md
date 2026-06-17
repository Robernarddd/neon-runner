# Feuille de route — Neon Runner (jeu 3D dans le navigateur)

**Objectif :** créer, en ~8 jours, un jeu 3D qui tourne dans le navigateur, jouable d'un lien, avec un vrai effet « waou ».

Chaque journée a un **jalon** : « à la fin, je peux voir/faire X ». Si le jalon n'est pas atteint, on simplifie le lendemain plutôt que d'accumuler.

> Tu vas vite ? Tant mieux : une fois la base solide, pioche dans le **parking à idées** du backlog plutôt que de bâcler les effets.

---

## Jour 1 — Outils + première scène 3D
La mise en route, puis le premier « waou ».
- Vérifier les outils : un navigateur, un terminal, Claude Code installé.
- Comprendre comment **servir** le jeu en local : `python3 -m http.server` dans le dossier, puis ouvrir l'adresse affichée.
- Créer le dépôt git ; premier `index.html`.
- **T01** : afficher une scène 3D (un cube qui tourne, une lumière, une caméra).
- **Jalon : une forme 3D s'affiche et bouge dans le navigateur.** 🎉

## Jour 2 — La sensation de vitesse
- **T02** : la boucle de jeu (`requestAnimationFrame`), un sol/des lignes qui défilent.
- **Jalon : on a l'impression d'avancer à toute vitesse.**

## Jour 3 — Le joueur
- **T03** : un objet joueur, déplacements gauche/droite au clavier.
- **Jalon : je pilote quelque chose à l'écran.**

## Jour 4 — Le danger
- **T04** : des obstacles qui arrivent, détection de collision, game over.
- **Jalon : je peux perdre — donc c'est devenu un jeu.**

## Jour 5 — Le score et la difficulté
- **T05** : orbes à ramasser, score affiché, meilleur score conservé.
- **T06** : la vitesse augmente avec le temps.
- **Jalon : je veux battre mon record.**

## Jour 6 — L'effet WAOU #1 : le néon
- **T07** : le bloom (post-traitement) qui fait briller les objets.
- **T09** (début) : un écran de départ et de game over.
- **Jalon : le jeu est devenu beau, ça claque à l'écran.**

## Jour 7 — L'effet WAOU #2 : le juice
- **T08** : particules à la collecte, secousse d'écran au crash, sons.
- **Jalon : chaque action est satisfaisante.**

## Jour 8 — Publier et présenter
- **T10** : mise en ligne sur GitHub Pages → le lien à envoyer aux potes.
- **T11** : un deuxième thème visuel (en ne touchant qu'à la configuration).
- **T12** : README + démo, et préparer 5 minutes pour raconter ce qu'il a appris.
- **Jalon : mes potes jouent à mon jeu depuis un lien.** 🚀

---

## Bien utiliser Claude Code (rappel)

- Une demande = une petite fonctionnalité.
- Fais-toi expliquer chaque morceau ; teste dans le navigateur tout de suite (console ouverte).
- Commite après chaque fonctionnalité qui marche.
- Un ticket = une session = un contexte neuf (`/clear` entre deux tickets).
- Tiens ton journal : 3 lignes par jour.

## Checklist pour le Jour 1

- [ ] Un navigateur récent (Chrome, Firefox…) installé
- [ ] Le terminal accessible ; `python3 --version` répond
- [ ] Claude Code installé et lancé **depuis le dossier du projet**
- [ ] Dépôt git initialisé
- [ ] `index.html` créé et servi via `python3 -m http.server`
- [ ] Une scène 3D qui s'affiche et bouge 🎉
