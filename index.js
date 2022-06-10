const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

const epee = new Weapon("Épée", 10);
const bouclier = new Shield("Bouclier", 10)

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6, epee.damage, bouclier.protection );


/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  fighter1.fight(fighter2);
  fighter2.fight(fighter1);
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1,
  };
};


{
  let round = 0;

  while (heracles.isAlive() && boar.isAlive()) {
      console.log(`🕛 Round #${round}`);

      heracles.fight(boar);
      console.log(roundDisplay(heracles, boar));

      boar.fight(heracles);
      console.log(roundDisplay(boar, heracles));

      round++;
  }

  const result = score(heracles, boar);

  console.log(`💀 ${result.loser.name} is dead`);
  console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
}

heracles.fight(boar);