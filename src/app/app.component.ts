import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character2Service } from './services';
import { Character } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // ZoneJS was deleted
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Onpush only detects changes when there are changes:
  //1. In Input parameters
  //2. By user interaction
  //3. By Async calls
  // Now that's why signals are used for almost everything (inputs, viewchild, etc). Signals do change detection only for components that use that signal.
})
export class AppComponent {
  title = 'angular-19-learning';
  characterService = inject(Character2Service);
  characters: Signal<Character[] | undefined> = computed(() =>
    this.characterService.getFormattedCharacters()
  );
  delete(id: number) {
    this.characterService.deleteCharacter(id);
  }
}
