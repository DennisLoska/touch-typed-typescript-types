type MaterialPlane = {
  x: number;
  y: number;
  z: number;
};

type EtherealPlane = {
  x: number;
  y: number;
  z: number;
  t: typeof Infinity;
};

type HeavenlyPlane = {
  h: number;
};

type Reality = MaterialPlane & EtherealPlane & HeavenlyPlane;

// The whole thing!
const world: Reality = {
  x: 120,
  y: 42,
  z: 77,
  t: Infinity,
  h: 777,
};

interface Earth {
  earth: string;
  water: string;
  fire: string;
  air: string;
}

interface Heaven {
  ether: string;
  sheol: string;
  throne: string;
}

interface Creation extends Earth, Heaven {}

// There it is!
const creation: Creation = {
  earth: "Adamah!",
  water: "Mayim, Chayim - oh drink freely!",
  fire: "Consume and transmute through the spirit!",
  air: "Breath in the heaven and drain the ocean!",
  ether: "The place of frequencies and mysteries.",
  sheol: "Don't gaze too long into the abyss!",
  throne: "The seat of the Most High!",
};
