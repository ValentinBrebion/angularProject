// Runtime validation coverage for: FaceSnap details and snap interactions
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { FaceSnapsService } from '../services/face-snaps.service';
import { SingleFaceSnap } from './single-face-snap';

describe('SingleFaceSnap', () => {
  beforeEach(async () => {
    const faceSnapsService = new FaceSnapsService();
    const faceSnapId = faceSnapsService.getFaceSnaps()[0].id;

    await TestBed.configureTestingModule({
      imports: [SingleFaceSnap],
      providers: [
        { provide: FaceSnapsService, useValue: faceSnapsService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: faceSnapId } } },
        },
      ],
    }).compileComponents();
  });

  it('loads and displays the FaceSnap selected by the route', () => {
    const fixture = TestBed.createComponent(SingleFaceSnap);
    fixture.detectChanges();

    expect(fixture.componentInstance.faceSnap?.title).toBe('xavier');
    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toBe('Xavier');
    expect(fixture.nativeElement.querySelector('button').textContent.trim()).toBe('Oh Snap');
  });

  it('toggles the snap state and count when the user clicks the button', () => {
    const fixture = TestBed.createComponent(SingleFaceSnap);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');

    button.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.faceSnap?.snapsCounter).toBe(11);
    expect(button.textContent.trim()).toBe('Ooups Unsnapped');

    button.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.faceSnap?.snapsCounter).toBe(10);
    expect(button.textContent.trim()).toBe('Oh Snap');
  });
});
