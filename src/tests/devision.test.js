import devision from "../utils/devision";

describe("Devision Tests", () => {
  it("Should return Not applicable when b is 0", () => {
      const actual = devision(2, 0);
      const expectation = "Not applicable";
      expect(actual).toBe(expectation);
  });

  it("Should return 0 when a is 0", () => {
      const actual = devision(0, 2);
      const expectation = 0;
      expect(actual).toBe(expectation)
  });

  it("should return quotient when a != 0 & b != 0", () => {
    const actual = devision(6, 2);
    const expectation = 3;
    expect(actual).toBe(expectation)
  })
})