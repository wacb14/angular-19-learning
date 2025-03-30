import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
})
export class PlaceholderComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    },4000);
  }
}
