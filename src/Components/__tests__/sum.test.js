import { sum } from "../sum";

test('should give sum of 2 nums', () => {
    const result = sum(3, 4);
  
    // Assertion (fixed)
    expect(result).toBe(7);
  });
  
