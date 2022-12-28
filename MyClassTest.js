import MyClass, {foo} from './MyClass';

// console.log({ MyClass, foo})

jest.mock('./MyClass'); // this line tells Jest to mock the MyClass module

test('mock class', () => {
  const mock = new MyClass();
  expect(mock.getValue()).toBeUndefined();
});

