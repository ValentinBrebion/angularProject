import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe } from '@angular/common';
@Component({
  selector: 'app-face-snap',
  imports: [ NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

  snapButtonText !: string;
  userHasSnapped !: boolean;

  ngOnInit(): void {
      this.snapButtonText = "Oh Snap";
      this.userHasSnapped = false;
  }

  onSnap():void {
    if(this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(): void {
    this.faceSnap.removeSnap();
      this.snapButtonText = "Oh Snap";
      this.userHasSnapped = false;
  }

  snap(): void {
     this.faceSnap.addSnap();
      this.snapButtonText = "Ooups Unsnapped";
      this.userHasSnapped = true;
  }
}
