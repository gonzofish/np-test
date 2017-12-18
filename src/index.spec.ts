import { hello } from './index';

describe('A quick test', () => {
  it('should return "Hello, ${name}!"', () => {
    const value = hello('gonzofish');
    // expect(hello('gonzofish')).toBe('Hello, gonzofish!');
    expect(hello('gonzofish')).toBe('Hello, gonzofish!');
  });
});
