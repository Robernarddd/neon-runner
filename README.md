# 🚀 Neon Runner

Un **runner en 3D** qui tourne directement dans le navigateur. Tu files vers l'avant
à toute vitesse à bord d'un vaisseau, tu esquives des astéroïdes, tu ramasses des
cristaux néon… et plus le temps passe, plus ça accélère.

Fait avec [Three.js](https://threejs.org) — pas d'installation, ça marche d'un simple lien.

## 🎮 Jouer tout de suite

👉 **[Clique ici pour jouer](https://robernarddd.github.io/neon-runner/)**

(Ça marche sur ordinateur, dans n'importe quel navigateur récent.)

## 🕹️ Les commandes

| Touche | Action |
|---|---|
| **N'importe quelle touche** (ou un clic) | Démarrer la partie |
| **← Flèche gauche** | Se déplacer à gauche |
| **→ Flèche droite** | Se déplacer à droite |
| Bouton **Rejouer** | Relancer après un game over |

## 🎯 Le but

- **Esquive les astéroïdes** : en toucher un, c'est *game over*.
- **Ramasse les cristaux** : chacun rapporte des points.
- **Tiens le plus longtemps possible** : la vitesse monte avec le temps, c'est de plus en plus dur.
- Ton **meilleur score** est gardé en mémoire entre deux parties.

## ✨ Ce qui fait le « waou »

- De la vraie **3D** avec une caméra qui suit le vaisseau.
- Un **effet néon (bloom)** : les objets lumineux brillent pour de vrai.
- Une **sensation de vitesse** : le décor défile et accélère.
- Du **« juice »** : particules quand on ramasse un cristal, secousse d'écran au crash, et des sons.
- De **vrais modèles 3D** importés du web (voir [CREDITS.md](CREDITS.md)).

## 💻 Lancer le jeu sur ta machine

Le jeu est fait de **modules JavaScript**. Les navigateurs refusent de les charger
si on ouvre juste le fichier en double-cliquant : il faut un petit **serveur local**.

Dans le dossier du projet, lance :

```bash
python3 -m http.server
```

Puis ouvre l'adresse affichée dans le terminal (en général **http://localhost:8000**).

## 🗂️ Le projet en bref

| Fichier | Rôle |
|---|---|
| `index.html` | Tout le jeu : la page, le style et le code |
| `theme.js` | Les **thèmes** (couleurs, vitesses) — on change l'ambiance sans toucher au moteur |
| `models/` | Les modèles 3D (vaisseau, cristaux, astéroïdes) |
| `CREDITS.md` | Les auteurs des modèles 3D et leurs licences |

Le projet a été construit ticket par ticket : le déroulé est dans `BACKLOG.md`.

---

*Fait par Gaël pendant son stage de seconde, accompagné par Claude Code.* 🛸
