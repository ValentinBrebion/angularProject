// Runtime validation coverage for: FaceSnap model behavior
import { describe, expect, it } from 'vitest';
import { FaceSnap } from './face-snap';

describe('FaceSnap', () => {
  it('creates an identifier and keeps the provided details', () => {
    const createdAt = new Date('2024-01-15T12:00:00Z');
    const faceSnap = new FaceSnap(
      'A sunny day',
      '/assets/sunny-day.jpg',
      'Enjoying the sun',
      createdAt,
      3,
    );

    expect(faceSnap.id).toMatch(/^[0-9a-f]{8}$/);
    expect(faceSnap.title).toBe('A sunny day');
    expect(faceSnap.imageUrl).toBe('/assets/sunny-day.jpg');
    expect(faceSnap.description).toBe('Enjoying the sun');
    expect(faceSnap.createdAt).toBe(createdAt);
    expect(faceSnap.snapsCounter).toBe(3);
  });

  it('increments and decrements the snap count', () => {
    const faceSnap = new FaceSnap('Title', 'image.jpg', 'Description', new Date(), 0);

    faceSnap.snap('snap');
    expect(faceSnap.snapsCounter).toBe(1);

    faceSnap.snap('unsnap');
    expect(faceSnap.snapsCounter).toBe(0);
  });

  it('sets a location fluently', () => {
    const faceSnap = new FaceSnap('Title', 'image.jpg', 'Description', new Date(), 0);

    expect(faceSnap.withLocation('Paris')).toBe(faceSnap);
    expect(faceSnap.location).toBe('Paris');
  });
});
