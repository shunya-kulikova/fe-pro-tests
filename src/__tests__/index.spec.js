import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  it('Return correct value. String to upper or lowercase', () => {
    expect(changeStringCase('HELLO WORLD', 'lowercase')).toEqual(
      'hello world'
    );
    expect(changeStringCase('hello world', 'uppercase')).toEqual(
      'HELLO WORLD'
    );
    expect(changeStringCase('Hello world')).toEqual(
      'Hello world'
    );
  });
}); 

describe('sumOfArray()', () => {
  describe('If type of values is number', () => {
    const array = [1, 2, 3, 4, 5];
    it('Func will return sum', () => {
      expect(sumOfArray(array)).toEqual(15);
    });
  });
  describe('If type of value is string, func will ignore it', () => {
    const secondArray = [1, 'some str', 2, 3, 'nice', 4, 5];
    it('Func will return sum only of number-elements', () => {
      expect(sumOfArray(secondArray)).toEqual(15);
    });
  });
  describe('If type of values are only string or NaN', () => {
    const thirdArray = ['first', true, 'third', 'false'];
    it('Func will return 0', () => {
      expect(sumOfArray(thirdArray)).toEqual(0);
    });
  });
});

describe('divisibleBy()', () => {
  describe('If the array contains only numbers', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Func must return num % number === 0', () => {
      expect(divisibleBy(array, 3)).toEqual([3, 6, 9]);
    });
  });
  describe('If the array contains only strings', () => {
    it('Func must return only an emply array[]', () => {
      const secondArray = ['str1', 'str2', 'str3'];
      expect(divisibleBy(secondArray, 3)).toEqual([]);
    });
  });
  describe('If the second argument is 0', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Func must return an empty array', () => {
      expect(divisibleBy(array, 0)).toEqual([]);
    });
  });
  describe('If the second arg is string', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Func must return an empty array', () => {
      expect(divisibleBy(array, 'any string')).toEqual([]);
    });
  });
});

describe('addDotsToString()', () => {
  describe('If the str > second argument', () => {
    const str = 'Hello world';
    it('Func must return sliced string from 0 to 2arg - 3 + dots', () => {
      expect(addDotsToString(str, 7)).toEqual('Hell...');
    });
  });
  describe('If the str < second argument', () => {
    const str = 'Hello world';
    it('Func must return original string', () => {
      expect(addDotsToString(str, 30)).toEqual(str);
    });
  });
  describe('If the second argument is 0', () => {
    const str = 'Hello world';
    it('Func must return original string - 3 chars + dots', () => {
      expect(addDotsToString(str, 0)).toEqual('Hello wo...');
    });
  });
  describe('If the second argument does`nt exist', () => {
    const str = 'Hello world';
    it('Func must return original string', () => {
      expect(addDotsToString(str)).toEqual(str);
    });
  });
});

describe('objectEntries()', () => {
  describe('If the object contains key and value', () => {
    const obj = {
      name: 'Lika',
      age: 21,
    };
    it('Func must return array with obj.key-value', () => {
      expect(objectEntries(obj)).toEqual([
        ['name', 'Lika'],
        ['age', 21],
      ]);
    });
  });
  describe("If the object is empty", () => {
    const object = {};
    it('Func must return array', () => {
      expect(objectEntries(object)).toEqual([]);
    });
  });
});