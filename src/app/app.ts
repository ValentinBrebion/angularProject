import { Component, OnInit, signal } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('snapface');
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap
  myOtherSnap!: FaceSnap
  myLastSnap!: FaceSnap

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        "xavier",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        "Coucou les petits loups",
        new Date(),
        10
      ),
      new FaceSnap(
        "Sarah",
        "https://cdn.pixabay.com/photo/2025/08/15/07/56/portraid-9776420_1280.jpg",
        "me at destination",
        new Date(),
        70
      ),
      new FaceSnap(
        "jake and sophie",
        "https://cdn.pixabay.com/photo/2026/08/24/08/37/08-37-20-507_1280.jpg",
        "haha so funny",
        new Date(),
        85000
      )
    ];
      this.faceSnaps[1].setLocation("Vendée");
  }
}
