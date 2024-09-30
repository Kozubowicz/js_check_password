'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeDefined();
  });

  it(`should return boolean`, () => {
    expect(checkPassword).toBeTruthy();
  });

  it(`should return 'true' for the valid password`, () => {
    expect(checkPassword('sam1@Zqwer')).toBeTruthy();
    expect(checkPassword('jACK1__lol')).toBeTruthy();
  });

  it(`should return 'false' for password bellow 8 characters`, () => {
    expect(checkPassword('sam1@Z')).toBeFalsy();
  });

  it(`should return 'false' for password abowe 16 characters`, () => {
    expect(checkPassword('sam1@Zqwertyuiopasd')).toBeFalsy();
  });

  it(`should return 'false' for password not containing at least
     1 digit, 1 special character, 1 uppercase letter`, () => {
    expect(checkPassword('sam1#asdfgh')).toBeFalsy();
    expect(checkPassword('samAs#dfghj')).toBeFalsy();
    expect(checkPassword('samA123asdf')).toBeFalsy();
  });
});
