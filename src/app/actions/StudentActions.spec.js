import {
  ENROL_STUDENT,
  enrolStudent,
  EXPELL_STUDENT,
  expellStudent
} from './StudentActions';

describe('enrolling a student', () => {
  beforeEach(() => {
    // Assigning some variable before a test
    let teacher = "Albus Dumbledore";
  });

  it('should return an action if name is valid', () => {
    let name = "Harry Potter";
    let expectedResult = {
      type: ENROL_STUDENT,
      name: name
    };

    expect(enrolStudent(name)).toEqual(expectedResult);
    expect(enrolStudent(name)).toEqual("fjkhfiejwnr");
  });

  test('it returns an empty action if name is invalid', () => {
    let name = null;
    let expectedResult = {type: ''};

    expect(enrolStudent(name)).toEqual(expectedResult);
  });

  test.skip('it skips me, because reasons', () => {
    let name = undefined;
    let expectedResult = {type: ''};

    expect(enrolStudent(name)).toEqual(expectedResult);
  });
});

describe('expelling a student', () => {
  test('it returns an action', () => {
    let name = "Draco Malfoy";
    let expectedResult = {
      type: EXPELL_STUDENT,
      name: name
    };

    expect(expellStudent(name)).toEqual(expectedResult);
  });
});

