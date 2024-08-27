import { describe, expect, it } from 'vitest';

describe('Timezones', () => {
  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });
});
