# BACKLOG.md — Le tableau de bord du projet

Ta liste de tâches, organisée comme dans une vraie équipe. Chaque tâche = un **ticket**.

## Comment ça marche

Trois colonnes : **À faire**, **En cours**, **Fait**. La boucle, pour chaque ticket :

1. Prends le **prochain ticket** de « À faire » → mets-le dans « En cours ». **Un seul à la fois.**
2. Travaille dessus avec Claude Code.
3. Quand tu penses avoir fini : lance **`/code-review`** et corrige.
4. Vérifie la **« Définition de fini »**.
5. **Commite** (git).
6. Déplace le ticket dans **« Fait »**.
7. Fais **`/clear`** pour repartir d'un contexte neuf, et prends le suivant.

> Une idée en cours de route ? Ne la code pas tout de suite : note-la dans le **parking à idées** en bas.

L'ordre est pensé pour avoir **toujours un truc jouable**, puis ajouter le « waou » par couches.

---

## 🟦 À faire

### T01 — La scène 3D s'affiche
**Fini quand :** une forme 3D (un cube ou un sol) apparaît à l'écran dans le navigateur, avec une caméra. Premier « waou : c'est en 3D ! »

### T02 — La boucle de jeu et la vitesse
**Fini quand :** le décor (un sol/des lignes) défile en continu grâce à `requestAnimationFrame`, donnant une sensation d'avancer.

### T03 — Le joueur et ses déplacements
**Fini quand :** un objet « joueur » est à l'écran et se déplace à gauche/droite au clavier.

### T04 — Les obstacles et la collision
**Fini quand :** des obstacles arrivent vers le joueur ; en toucher un déclenche un **game over**.

### T05 — Les orbes et le score
**Fini quand :** des orbes à ramasser rapportent des points ; le score s'affiche ; le **meilleur score** est conservé entre deux parties.

### T06 — La montée en difficulté
**Fini quand :** la vitesse augmente progressivement avec le temps.

### T07 — L'effet WAOU #1 : le néon (bloom)
**Fini quand :** les objets lumineux « brillent » grâce au post-traitement (bloom). C'est le moment où le jeu devient beau.

### T08 — L'effet WAOU #2 : le juice
**Fini quand :** particules à la collecte d'un orbe, secousse d'écran au crash, et au moins un son court. Le jeu devient « satisfaisant ».

### T09 — Les écrans et l'interface
**Fini quand :** un écran de départ (« Appuie pour jouer ») et un écran de game over (« Rejouer ») encadrent la partie ; le score est lisible.

### T10 — Le publier sur le web
**Fini quand :** le jeu est en ligne via GitHub Pages et accessible par un **lien** qu'on peut envoyer à un pote.

### T11 — Un deuxième thème visuel
**Fini quand :** un nouveau thème (couleurs/vitesse) est jouable **en ne modifiant que le fichier de configuration**, sans toucher au moteur.

### T12 — README + démo
**Fini quand :** un `README.md` explique le jeu et comment y jouer, et le jeu tourne pour une démo avec les potes.

---

## 🟨 En cours

*(vide — un seul ticket à la fois)*

---

## 🟩 Fait

*(rien encore — ça va se remplir vite !)*

---

## 💡 Parking à idées (pour plus tard)

- Classement en ligne (comparer les scores entre potes).
- Skins / vaisseaux et environnements différents.
- Musique et sons plus riches.
- Version tactile pour jouer sur téléphone.
- Bonus temporaires (bouclier, ralenti, aimant à orbes).
