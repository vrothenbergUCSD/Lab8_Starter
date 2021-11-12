// unit.test.js

const { expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2



test('isPhoneNumber - Check without parens only dashes accepted', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - Check with parens and space accepted', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - Check no parens and only space not accepted', () => {
  expect(functions.isPhoneNumber('123 456 7890')).toBe(false);
});

test('isPhoneNumber - Check letters not accepted', () => {
  expect(functions.isPhoneNumber('abc-def-ghik')).toBe(false);
});

test('isEmail - Check name @ domain.com', () => {
  expect(functions.isEmail('test@test.com')).toBe(true);
});

test('isEmail - Check underscore in name @ .co', () => {
  expect(functions.isEmail('test_name@test.co')).toBe(true);
});

test('isEmail - Check two @ symbols', () => {
  expect(functions.isEmail('@test@.gov')).toBe(false);
});

test('isEmail - Check question mark in name @ .gov', () => {
  expect(functions.isEmail('test?name@test.gov')).toBe(false);
});

test('isPassword - Check starts with letter and at least 4 chars', () => {
  expect(functions.isStrongPassword('abcd')).toBe(true);
});

test('isPassword - Check starts with letter, has numbers, underscore, and at most 15 chars', () => {
  expect(functions.isStrongPassword('abcd123456789_')).toBe(true);
});

test('isPassword - Check starts with letter', () => {
  expect(functions.isStrongPassword('1abcd123456789_')).toBe(false);
});

test('isPassword - Check only allowed chars', () => {
  expect(functions.isStrongPassword('abcd1234_!')).toBe(false);
});

test('isDate - Check day and month 2 digits, year 4', () => {
  expect(functions.isDate('12/12/2012')).toBe(true);
});

test('isDate - Check day and month 1 digits, year 4', () => {
  expect(functions.isDate('1/1/1000')).toBe(true);
});

test('isDate - Check not letters', () => {
  expect(functions.isDate('ab/cd/efgh')).toBe(false);
});

test('isDate - Check 3 digits', () => {
  expect(functions.isDate('999/999/999')).toBe(false);
});

test('isHexColor - Check 6 letters', () => {
  expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('isHexColor - Check 3 numbers', () => {
  expect(functions.isHexColor('#111')).toBe(true);
});

test('isHexColor - Check 7 numbers', () => {
  expect(functions.isHexColor('#1234567')).toBe(false);
});

test('isHexColor - Check invalid letters', () => {
  expect(functions.isHexColor('#GG12AB')).toBe(false);
});
