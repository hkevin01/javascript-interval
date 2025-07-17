import { startRefresh, stopRefresh } from '../src/interval.js';

describe('Interval Utilities', () => {
  it('should start and stop an interval', (done) => {
    let called = false;
    const intervalId = startRefresh(() => {
      called = true;
      stopRefresh(intervalId);
      expect(called).toBe(true);
      done();
    }, 10);
  });
});
