import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project1';
  loadedFeature: string = 'recipe';
  //for header navbar navigation from recipe to shopping list section
  onNavigate(event: string) {
    this.loadedFeature = event;
  }
}
