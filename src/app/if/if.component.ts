import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [NgIf],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss',
})
export class IfComponent {
  protected isVisible = true;
  changeStatus(){
    this.isVisible=!this.isVisible;
  }
}
