// Runtime validation coverage for: FaceSnap card navigation
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from './face-snap.component';

describe('FaceSnapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('displays the FaceSnap title in title case', () => {
    const fixture = TestBed.createComponent(FaceSnapComponent);
    fixture.componentRef.setInput(
      'faceSnap',
      new FaceSnap('a sunny day', 'image.jpg', 'Description', new Date(), 2),
    );
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toBe('A Sunny Day');
  });

  it('navigates to the selected FaceSnap when its card is opened', () => {
    const router = TestBed.inject(Router);
    const navigateByUrl = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const faceSnap = new FaceSnap('Title', 'image.jpg', 'Description', new Date(), 2);
    const fixture = TestBed.createComponent(FaceSnapComponent);
    fixture.componentRef.setInput('faceSnap', faceSnap);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('button').click();

    expect(navigateByUrl).toHaveBeenCalledWith(`facesnaps/${faceSnap.id}`);
  });
});
