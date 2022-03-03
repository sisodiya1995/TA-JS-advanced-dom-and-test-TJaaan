const {getFullName ,getCircumfrence ,getArea} = require("./index");

test('get full name', () => {
    expect(getFullName("Akash", "Singh")).toBe("Akash Singh");
  });

  test('get circumfrence', () => {
    expect(getCircumfrence(5)).toBe("The circumference is 31.400000000000002");
  });

  test('get Area', () => {
    expect(getArea(5)).toBe('The area is 78.5');
  });