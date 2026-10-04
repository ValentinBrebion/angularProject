import { Component, signal } from '@angular/core';
import { FaceSnapList } from '../app/face-snap-list/face-snap-list';
import { Header } from '../app/header/header';
@Component({
  selector: 'app-root',
  imports: [FaceSnapList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snapface');
  
}
