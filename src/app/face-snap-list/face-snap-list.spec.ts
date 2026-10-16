// Runtime validation coverage for: FaceSnap list rendering
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { FaceSnapList } from './face-snap-list';

describe('FaceSnapList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapList],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders every FaceSnap provided by the service', () => {
    const fixture = TestBed.createComponent(FaceSnapList);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-face-snap')).toHaveLength(3);
    expect(
      Array.from(fixture.nativeElement.querySelectorAll('h2'), (heading: Element) =>
        heading.textContent?.trim(),
      ),
    ).toEqual(['Xavier', 'Sarah', 'Jake And Sophie']);
  });
});
