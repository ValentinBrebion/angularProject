export class FaceSnap {
  location?: string;
  constructor(public title: string, public imageUrl: string, public description: string, public createdAt: Date, public snapsCounter: number) {}

  addSnap():void {
    this.snapsCounter++;
  }

  removeSnap(): void {
    this.snapsCounter--;
  }

  setLocation(location:string): void {
    this.location = location
  }
}