---
description: Relire ensemble le code récent, en mode pédagogique
argument-hint: [fichier optionnel]
---

Tu vas faire une **revue de code pédagogique** avec un lycéen débutant (14 ans). Ce n'est pas une correction automatique : c'est un moment d'apprentissage. Reste bienveillant, simple, et en français.

Si `$ARGUMENTS` est fourni, concentre-toi sur ce(s) fichier(s). Sinon, regarde les changements récents (`git diff`) et le code de la fonctionnalité qu'on vient de terminer.

Déroule la revue dans cet ordre :

1. **Commence par le positif.** Dis sincèrement ce qui est bien fait.

2. **Vérifie les règles du projet** (voir `PROJET.md`) :
   - Le **moteur** (logique du jeu) est séparé du **contenu/config** (couleurs, vitesses, difficulté dans `config.js`). Pas de valeurs « en dur » dispersées dans le moteur.
   - Le **code tourne dans le navigateur sans erreur** : demande-lui d'ouvrir la console (F12) et de vérifier qu'il n'y a pas d'erreur rouge.
   - Les **noms** sont clairs et les **fonctions** font une seule chose.
   - **Performance** : pas de création massive d'objets à chaque image (ça ferait ramer le jeu).

3. **Repère 1 à 3 améliorations**, de la plus importante à la moins importante. Pour chacune : explique le problème simplement, explique **pourquoi** ça compte, et montre la direction — mais **ne corrige pas tout toi-même**.

4. **Vérifie la compréhension.** Pose-lui une petite question, et propose-lui de faire **lui-même** la correction (guidé si besoin).

5. **Termine par la suite logique.** Rappelle : une fois corrigé et testé dans le navigateur, on commite, on déplace le ticket en « Fait », puis `/clear` pour repartir d'un contexte neuf.

Une revue de code, ce n'est pas un jugement : c'est comme un coach qui regarde la rediffusion du match pour aider à progresser.
