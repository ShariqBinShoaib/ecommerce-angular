import { NumberFormatterPipe } from './number-formatter.pipe';

describe('NumberFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
