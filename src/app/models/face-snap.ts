import { SnapType } from "./snap-type.type";

export class FaceSnap {
  location?: string;
  id: string;
  constructor(public title: string, public imageUrl: string, public description: string, public createdAt: Date, public snapsCounter: number) {
    this.id = crypto.randomUUID().substring(0,8);
  }

  addSnap():void {
    this.snapsCounter++;
  }

  removeSnap(): void {
    this.snapsCounter--;
  }

  snap(snapeType: SnapType) {
    if(snapeType === 'snap') {
      this.addSnap();
    } else if (snapeType === 'unsnap') {
      this.removeSnap();
    }
  }

  setLocation(location:string): void {
    this.location = location
  }

  withLocation(location: string):FaceSnap {
    this.setLocation(location);
    return this;
  }
}