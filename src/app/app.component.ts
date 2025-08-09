import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestHomeComponent } from './rest-home/rest-home.component';

@Component({
  selector: 'app-root',
  imports: [RestHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies_ai';
}
