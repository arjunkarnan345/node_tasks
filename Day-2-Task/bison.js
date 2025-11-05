const scenes = [
  "In the heart of a dense jungle, a massive bison stands tall — the undisputed ruler of his territory. His strength commands respect, and every creature around knows his presence.",
  "But when humans enter his land with machines, greed, and weapons, the balance of nature begins to crumble. The bison’s instincts sense danger, and the jungle’s silence turns tense.",
  "One tragic night, chaos erupts. Hunters invade, trees fall, and the bison’s herd is scattered. With fire lighting the forest, the mighty beast charges through smoke and fear — fighting not for dominance, but survival.",
  "Wounded but unbroken, he finds himself alone — the king without a kingdom. The once peaceful jungle now echoes with the sounds of human conquest. Yet within him burns a primal rage... a spark of rebellion.",
  "As he regains his strength, the bison becomes a symbol — a force of nature that refuses to bow down. Each step he takes is a roar against destruction, a reminder that nature always fights back.",
  "The climax unfolds with man and beast face to face — not as enemies, but as consequences of each other’s choices. The bison’s final stand is not about victory... but restoring respect between life and nature."
];

let index = 0;

const playScene = () => {
  if (index < scenes.length) {
    console.log(`Scene ${index + 1}`);
    console.log(scenes[index]);
    console.log("--------------------------------------------------------");
    index++;
    setTimeout(playScene, 5000); 
  }
};

console.log("🎬 BISON – The Story Begins...\n");
setTimeout(playScene, 2000);