import Validate from '../src/utils/Validate/Validate.js';

describe('Validate class 테스트', () => {
  const validate = new Validate();

  describe('isValidUserName', () => {
    it('허용되지 않은 이름일 시 오류', () => {
      const invalidName = 'InvalidUserName';
      expect(() => validate.isValidUserName(invalidName)).toThrow('[ERROR]');
    });

    it('허용된 이름일 시', () => {
      const validName = 'Alice';
      expect(() => validate.isValidUserName(validName)).not.toThrow();
    });
  });

  describe('checkNameDuplication', () => {
    it('중복된 이름이 있을 때 오류', () => {
      const duplicatedNames = ['Alice', 'Bob', 'Alice'];
      expect(() => validate.checkNameDuplication(duplicatedNames)).toThrow('[ERROR]');
    });

    it('중복된 이름이 없을 때 통과', () => {
      const uniqueNames = ['Alice', 'Bob', 'Carol'];
      expect(() => validate.checkNameDuplication(uniqueNames)).not.toThrow();
    });
  });

  describe('isValidPlayTime', () => {
    it('허용되지 않은 시도 횟수에 오류', () => {
      const invalidTime = '0';
      expect(() => validate.isValidPlayTime(invalidTime)).toThrow('[ERROR]');
    });

    it('허용된 시도 횟수는 통과', () => {
      const validTime = '5';
      expect(() => validate.isValidPlayTime(validTime)).not.toThrow();
    });
  });
});
