import { User, Users, Skill, Skills } from "./";

export function user(): User {
  return Users[0];
}

export function skills(): Skill[] {
  return Skills;
}
