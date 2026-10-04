import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap';
@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
private faceSnaps: FaceSnap[] = [
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
        ).withLocation('Vendée'),
        new FaceSnap(
          "jake and sophie",
          "https://cdn.pixabay.com/photo/2026/08/24/08/37/08-37-20-507_1280.jpg",
          "haha so funny",
          new Date(),
          85000
        )
      ];

      getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps]; 
      }
}