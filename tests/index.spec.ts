import main from '../src';

describe('Main test', () => {
  test('It should return hello word', () => {
    expect(main()).toBe('Hello world');
  });
});
