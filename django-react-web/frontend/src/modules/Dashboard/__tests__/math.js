import { sum, mul, sub, div } from '../math';

beforeAll(() => {
  // To do something once before all the tests run, use the beforeAll() function:
});

beforeEach(() => {
  // To perform something before each test runs, use beforeEach():
})

/* Grouping Tests */

describe('first set', () => {
  beforeEach(() => {
    //do something
  });
  afterAll(() => {
    //do something
  })
  test("Adding 1 + 1 equals 2", () => {
    expect(sum(1, 1)).toBe(2)
  });
  
  test("Adding 1 + 1 equals 2", () => {
    expect(sum(1, 1)).toBe(2)
  });
});

/* Testing Values */
test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2)
})
test("Multiplying 1 * 1 equals 1", () => {
  expect(mul(1, 1)).toBe(1)
})
test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0)
})
test("Dividing 1 / 1 equals 1", () => {
  expect(div(1, 1)).toBe(1)
})