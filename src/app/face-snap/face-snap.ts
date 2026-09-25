import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snapsCounter!: number;
  imageUrl !: string;

  ngOnInit(): void {
      this.title = "xavier";
      this.description = "coucou les petits loups";
      this.createdAt = new Date();
      this.snapsCounter = 50;
      this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";  
  }

  onAddSnap():void {
    this.snapsCounter++;
  }
}
