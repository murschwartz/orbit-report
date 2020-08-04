import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("sample", "sample", "sample", "sample", true)).toBeTruthy();
  });
});
