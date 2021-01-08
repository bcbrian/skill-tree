/**
 * This file a place holder for all the api data
 */

interface Attribute {
  // name of the attribute
  name: string;
  // sort order for view... alphanewmeric? then not needed
  sortOrder: number;
  // values are summed up to get total attribute value
  value: number;
}

// Base Attributes
export const Attributes: Attribute[] = [
  {
    name: "stanima",
    sortOrder: 0,
    value: 0,
  },
  {
    name: "body",
    sortOrder: 1,
    value: 0,
  },
  {
    name: "mind",
    sortOrder: 2,
    value: 0,
  },
  {
    name: "charm",
    sortOrder: 3,
    value: 0,
  },
];
interface Skill {
  // id of the skill
  id: string; //unique
  // name of the skill
  name: string; //unique?
  // names of other skills that need to be purchased first
  prerequisites: string[];
  // the parent classifications that this skill belongs to
  classifications: string[];
  // description of the skill
  description: string;
  // how this skill effects attributes
  effects: Attribute[]; // name ... attributes maybe?
  // sprite card position
  activeSprite: Sprite;
  // deactive sprite
  deactiveSprite: Sprite;
}

export const Skills: Skill[] = [
  {
    id: "0",
    name: "laundry",
    description: "So good at doing laundry",
    prerequisites: [],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "1",
    name: "dishes",
    description: "So good at doing dishes",
    prerequisites: ["0"],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "2",
    name: "baking",
    description: "So good at doing baking",
    prerequisites: ["1"],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "3",
    name: "boss",
    description: "So good at being the boss",
    prerequisites: ["2"],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "4",
    name: "boating",
    description: "So good at boating",
    prerequisites: [],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "5",
    name: "diving",
    description: "So good at diving",
    prerequisites: ["4"],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "6",
    name: "meteorology",
    description: "So good at doing meteorology",
    prerequisites: ["5"],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
  {
    id: "7",
    name: "costumes",
    description: "So good at making costumes",
    prerequisites: ["6"],
    classifications: [],
    effects: [],
    activeSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 0,
      width: 64,
      height: 64,
    },
    deactiveSprite: {
      file: "assets/images/sprites/talent-icons-sprite.png",
      x: 0,
      y: 64,
      width: 64,
      height: 64,
    },
  },
];

interface Classification {
  // name of the classification
  name: string;
  // sort order for view... alphanewmeric? then not needed
  sortOrder: number;
  // base attributes for the classification
  baseAttributes: Attribute[];
}

export const Classifications: Classification[] = [
  {
    name: "Earth Pony",
    sortOrder: 0,
    baseAttributes: [
      {
        name: "stanima",
        sortOrder: 0,
        value: 12,
      },
      {
        name: "body",
        sortOrder: 1,
        value: 8,
      },
      {
        name: "mind",
        sortOrder: 2,
        value: 4,
      },
      {
        name: "charm",
        sortOrder: 3,
        value: 6,
      },
    ],
  },
  {
    name: "Pegasus",
    sortOrder: 0,
    baseAttributes: [
      {
        name: "stanima",
        sortOrder: 0,
        value: 10,
      },
      {
        name: "body",
        sortOrder: 1,
        value: 6,
      },
      {
        name: "mind",
        sortOrder: 2,
        value: 4,
      },
      {
        name: "charm",
        sortOrder: 3,
        value: 6,
      },
    ],
  },
  {
    name: "Unicorn",
    sortOrder: 0,
    baseAttributes: [
      {
        name: "stanima",
        sortOrder: 0,
        value: 10,
      },
      {
        name: "body",
        sortOrder: 1,
        value: 4,
      },
      {
        name: "mind",
        sortOrder: 2,
        value: 6,
      },
      {
        name: "charm",
        sortOrder: 3,
        value: 6,
      },
    ],
  },
];

interface User {
  // name of the user
  name: string; // only matter with auth?
  // skills
  skills: string[];
  // skill points for purchasing points
  skillPoints: number;
  // attributes
  // attributes: Attribute[];
  // classification of the user
  // classification: Classification;
}

export const Users: User[] = [
  {
    name: "Jim",
    skills: [],
    skillPoints: 6,
  },
  {
    name: "Jess",
    skills: ["0"],
    skillPoints: 6,
  },
  {
    name: "Jason",
    skills: ["0", "1", "2", "3", "4", "5"],
    skillPoints: 6,
  },
];

interface Sprite {
  // file location
  file: string;
  // position from the left
  x: number;
  // position from the top
  y: number;
  // width of sprite section
  width: number;
  // height
  height: number;
}
