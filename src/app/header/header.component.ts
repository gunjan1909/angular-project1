//header component
import { Component, EventEmitter, Output } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed: boolean = false;
  onSelect(arg: string) {
    this.featureSelected.emit(arg);
  }
}
