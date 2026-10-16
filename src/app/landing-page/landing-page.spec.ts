// Runtime validation coverage for: landing page navigation
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('shows the Snapface logo and continues to the FaceSnap list', () => {
    const router = TestBed.inject(Router);
    const navigateByUrl = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const fixture = TestBed.createComponent(LandingPage);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img').alt).toBe('Snapface logo');
    fixture.nativeElement.querySelector('button').click();

    expect(navigateByUrl).toHaveBeenCalledWith('facesnaps');
  });
});
