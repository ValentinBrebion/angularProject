// Runtime validation coverage for: FaceSnapsService data and snap behavior
import { describe, expect, it } from 'vitest';
import { FaceSnapsService } from './face-snaps.service';

describe('FaceSnapsService', () => {
  it('returns the available FaceSnaps without exposing its internal array', () => {
    const service = new FaceSnapsService();

    const faceSnaps = service.getFaceSnaps();

    expect(faceSnaps).toHaveLength(3);
    expect(faceSnaps.map(({ title }) => title)).toEqual([
      'xavier',
      'Sarah',
      'jake and sophie',
    ]);
    expect(service.getFaceSnaps()).not.toBe(faceSnaps);
  });

  it('finds a FaceSnap by its identifier', () => {
    const service = new FaceSnapsService();
    const [faceSnap] = service.getFaceSnaps();

    expect(service.getFaceSnapById(faceSnap.id)).toBe(faceSnap);
  });

  it('throws when a FaceSnap identifier does not exist', () => {
    const service = new FaceSnapsService();

    expect(() => service.getFaceSnapById('unknown')).toThrow('FaceSnap not found !');
  });

  it('updates the snap count for the requested FaceSnap', () => {
    const service = new FaceSnapsService();
    const [faceSnap] = service.getFaceSnaps();

    service.snapFaceSnapById(faceSnap.id, 'snap');
    expect(service.getFaceSnapById(faceSnap.id).snapsCounter).toBe(11);

    service.snapFaceSnapById(faceSnap.id, 'unsnap');
    expect(service.getFaceSnapById(faceSnap.id).snapsCounter).toBe(10);
  });
});
