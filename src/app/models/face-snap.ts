export class FaceSnap {
  constructor(public title: string, public imageUrl: string, public description: string, public createdAt: Date, public snapsCounter: number) {}

  addSnap():void {
    this.snapsCounter++;
  }

  removeSnap(): void {
    this.snapsCounter--;
  }
}