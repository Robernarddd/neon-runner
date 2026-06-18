// theme.js — LE FICHIER DE CONFIGURATION (les "réglages" du jeu)
// ------------------------------------------------------------------
// Ce fichier ne contient QUE des réglages : des couleurs et des vitesses.
// Le moteur du jeu (dans index.html) vient LIRE ces valeurs ; il n'a pas
// besoin de les connaître à l'avance. Du coup, pour changer toute l'ambiance
// du jeu, tu modifies UNIQUEMENT ce fichier. Le moteur, on n'y touche pas. 🎨
//
// 👉 Les couleurs s'écrivent en "hexadécimal" : 0x suivi de 6 chiffres.
//    Les 2 premiers = rouge, les 2 du milieu = vert, les 2 derniers = bleu.
//    Exemples : 0xff0000 = rouge vif, 0x00ff00 = vert vif, 0x000000 = noir.
//    (Tu peux piocher des couleurs sur un "color picker" en ligne.)

// 📚 LE CATALOGUE DES THÈMES. Chaque thème est une "fiche" de réglages.
const themes = {
  // 🌃 THÈME 1 — "neon" : l'ambiance d'origine (cyan / magenta / néon).
  neon: {
    couleurFond: 0x000000,        // le fond : noir profond
    couleurSolCentre: 0x00ffff,   // la ligne du milieu du sol : cyan
    couleurSolLignes: 0xff00ff,   // les autres lignes du sol : magenta
    couleurJoueur: 0x00ff88,      // le cube du joueur : vert
    couleurObstacle: 0xff0033,    // les obstacles : rouge (danger !)
    couleurOrbe: 0xffdd00,        // les orbes à ramasser : jaune doré
    couleurParticule: 0xffdd00,   // les étincelles : jaune doré aussi

    vitesseSol: 0.05,             // à quelle vitesse le sol défile
    vitesseObstacle: 0.15,        // à quelle vitesse arrivent obstacles/orbes
    accelerationVitesse: 0.0001,  // de combien le jeu accélère à chaque image
  },

  // 🌅 THÈME 2 — "coucherDeSoleil" : une ambiance chaude (orange / rose / violet).
  //    👉 C'EST TON TERRAIN DE JEU : change les valeurs ci-dessous comme tu veux !
  coucherDeSoleil: {
    couleurFond: 0x1a0033,        // le fond : violet nuit (sombre, sinon ça brille trop)
    couleurSolCentre: 0xff6600,   // ligne du milieu : orange
    couleurSolLignes: 0xff0099,   // autres lignes : rose
    couleurJoueur: 0x00ffcc,      // le joueur : turquoise
    couleurObstacle: 0xaa00ff,    // les obstacles : violet
    couleurOrbe: 0xffee66,        // les orbes : jaune clair
    couleurParticule: 0xffee66,   // les étincelles : jaune clair

    vitesseSol: 0.05,
    vitesseObstacle: 0.18,        // un poil plus rapide que le thème neon
    accelerationVitesse: 0.0001,
  },

  // 👽 THÈME 3 — "halo" : l'énergie Covenant (plasma violet / rose / vert).
  //    Inspiré des armes plasma de Halo : le fond sombre fait ressortir le néon.
  halo: {
    couleurFond: 0x0a0014,        // le fond : violet quasi noir
    couleurSolCentre: 0xbe00ff,   // ligne du milieu : violet plasma
    couleurSolLignes: 0xff00aa,   // autres lignes : rose Covenant
    couleurJoueur: 0x66ff33,      // le joueur : vert plasma (armes Covenant)
    couleurObstacle: 0xff0066,    // les obstacles : rose vif (danger)
    couleurOrbe: 0x33ccff,        // les orbes : bleu plasma brillant
    couleurParticule: 0x33ccff,   // les étincelles : bleu plasma

    vitesseSol: 0.05,
    vitesseObstacle: 0.16,
    accelerationVitesse: 0.0001,
  },

  // 🪖 THÈME 4 — "haloChief" : les couleurs du Master Chief (vert/bleu militaire).
  haloChief: {
    couleurFond: 0x001022,        // le fond : bleu nuit très sombre
    couleurSolCentre: 0x2ecc40,   // ligne du milieu : vert militaire
    couleurSolLignes: 0x0088aa,   // autres lignes : cyan-bleu
    couleurJoueur: 0x66cc33,      // le joueur : vert Master Chief
    couleurObstacle: 0xff7700,    // les obstacles : orange Covenant
    couleurOrbe: 0x33aaff,        // les orbes : bleu Forerunner
    couleurParticule: 0x33aaff,   // les étincelles : bleu Forerunner

    vitesseSol: 0.05,
    vitesseObstacle: 0.16,
    accelerationVitesse: 0.0001,
  },

  // 🛸 THÈME 5 — "haloForerunner" : les structures Forerunner (bleu/cyan tech).
  haloForerunner: {
    couleurFond: 0x000814,        // le fond : noir bleuté
    couleurSolCentre: 0x00ffff,   // ligne du milieu : cyan
    couleurSolLignes: 0x0066ff,   // autres lignes : bleu électrique
    couleurJoueur: 0x33ffff,      // le joueur : cyan brillant
    couleurObstacle: 0xff3333,    // les obstacles : rouge Sentinelle
    couleurOrbe: 0xcceeff,        // les orbes : blanc-bleu lumineux
    couleurParticule: 0xcceeff,   // les étincelles : blanc-bleu

    vitesseSol: 0.05,
    vitesseObstacle: 0.16,
    accelerationVitesse: 0.0001,
  },
};

// 🎚️ LE SÉLECTEUR : c'est ICI qu'on choisit le thème actif.
//    Pour changer toute l'ambiance, remplace "neon" par "coucherDeSoleil"
//    (ou l'inverse) — et c'est tout, rien d'autre à toucher !
export const theme = themes.haloForerunner;
