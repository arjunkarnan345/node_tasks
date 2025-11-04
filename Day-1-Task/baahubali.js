

const baahubali = {
  introScene(hero) {
    console.log("Scene 1 :");
    console.log(`${hero} climbs the great waterfall to find his destiny.`);
  },

  kingdomScene(hero, kingdom) {
    console.log("Scene 2 :");
    console.log(`${hero} enters the mighty kingdom of ${kingdom}.`);
  },

  waterfallScene(hero, heroine, place) {
    console.log("Scene 3 :");
    console.log(`${hero} meets ${heroine} near the ${place}, where destiny begins!`);
  },

  battleScene(hero, villain, weapon) {
    console.log("Scene 4 :");
    console.log(`${hero} defeats ${villain} using his ${weapon}.`);
  },
};


export default baahubali;
