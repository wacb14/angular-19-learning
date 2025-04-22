import { Character } from '@app/models';

export function characterAdapter(characters: Character[]) {
  return characters.map((c) => ({ ...c, name: c.name.toUpperCase() }));
}
