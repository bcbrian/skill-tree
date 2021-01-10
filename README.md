![Tests](https://github.com/bcbrian/skill-tree/workflows/node.js.yml/badge.svg)

# Rune Mastery Loadout Talent Calculator 9000

##### It's over 9000

## Process

1. Define data sctructures
1. Use Create React App temple with Typescript and Sass compatibility
1. Write UAC test based on document
1. Fleshout initial requirements
   1. Component, styles, theme arcitecture
   2. Some fake api data
   3. Get the concept working
      1. Update tests
      2. Setup app state
      3. Tweak data
      4. Build ux pieces
   4. Make it look good
2. Go Big! -- If I have time I will add some more featrures.

## Data structures

> Hopefully this can someday be stored in a db. For now it will live on the front end.

```ts
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

interface Classification {
  // name of the classification
  name: string;
  // sort order for view... alphanewmeric? then not needed
  sortOrder: number;
  // base attributes for the classification
  baseAttributes: Attribute[];
}

interface Attribute {
  // name of the attribute
  name: string;
  // sort order for view... alphanewmeric? then not needed
  sortOrder: number;
  // values are summed up to get total attribute value
  value: number;
}

interface User {
  // name of the user
  name: string; // only matter with auth?
  // skills
  skills: Skills[];
  // skill points for purchasing points
  skillPoints: number;
  // attributes
  attributes: Attribute[];
  // classification of the user
  classification: Classification;
}

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
```
