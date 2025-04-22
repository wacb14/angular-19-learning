import { Component, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './services';
import { Character } from './models';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-19-learning';
  characterService = inject(CharacterService);
  characters: Signal<Character[] | undefined> = toSignal(
    this.characterService.getCharacters()
  );
}
