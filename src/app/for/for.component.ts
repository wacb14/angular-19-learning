import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
})
export class ForComponent {
  people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
}
