import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { NgStyle, NgClass,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  imports: [ RouterLink,NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,DecimalPipe, PercentPipe, CurrencyPipe ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap {
  faceSnap?: FaceSnap

  snapButtonText !: string;
  userHasSnapped !: boolean;
  myLargeNumber: number = 1542132.56;
  myPercentNumber: number = 0.3367;
  myMoney: number = 336.75;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.snapButtonText = "Oh Snap";
      this.userHasSnapped = false;
      const faceSnapId = this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap():void {
    if(this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(): void {
    if (!this.faceSnap) return;
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = "Oh Snap";
      this.userHasSnapped = false;
  }

  snap(): void {
    if (!this.faceSnap) return;
     this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = "Ooups Unsnapped";
      this.userHasSnapped = true;
  }
}
