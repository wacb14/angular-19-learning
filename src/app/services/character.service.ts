import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { characterAdapter } from '@app/adapters';
import { Character } from '@app/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Difference between a promise and an observable.
// Promise => Promises that something will happen for good or bad.
// Observable => It is a communication channel and subscribers watch what happens in the channel.
export class CharacterService {
  private apiUrl = 'https://api.example.com/characters';
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl).pipe(
      map((characters) => {
        characterAdapter(characters);
      })
    );
  }
  updateCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(this.apiUrl, character);
  }
  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
