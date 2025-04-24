import { Injectable, signal } from '@angular/core';
import { Character } from '@app/models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Single Source of Truth architecture
export class Character2Service {
  state = signal({ characters: new Map<number, Character>() });
  constructor() {
    this.getCharacters();
  }

  getFormattedCharacters() {
    return Array.from(this.state().characters.values());
  }
  getCharacterById(id: number) {
    return this.state().characters.get(id);
  }
  getCharacters(): void {
    const mockCharacters: Character[] = [
      { id: 1, name: 'John', lastName: 'Doe', age: 30 },
      { id: 2, name: 'Joao', lastName: 'Gomez', age: 23 },
      { id: 3, name: 'Alice', lastName: 'Roman', age: 33 },
      { id: 4, name: 'Enrique', lastName: 'Bunbury', age: 50 },
    ];
    of(mockCharacters).subscribe((result) => {
      result.forEach((character) =>
        this.state().characters.set(character.id, character)
      );
    });
  }
  updateCharacter(character: Character): void {
    const updatedCharacter = { ...character };
    of(updatedCharacter).subscribe((result) => {
      this.state.update((state) => {
        state.characters.set(result.id, result);
        return { characters: state.characters };
      });
    });
  }
  deleteCharacter(id: number): void {
    of({ status: 200 }).subscribe(() => {
      this.state.update((state) => {
        state.characters.delete(id);
        return { characters: state.characters };
      });
    });
  }
}
