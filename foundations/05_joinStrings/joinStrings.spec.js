const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Tony', () => {
    expect(values.firstName).toEqual('Tony');
  });
  test('lastName is Stark', () => {
    expect(values.lastName).toEqual('Stark');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2007', () => {
    expect(values.birthYear).toEqual(2007);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Tony Stark and I am 18 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Tony Stark', () => {
    expect(values.fullName).toEqual('Tony Stark');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(18);
  });
});
