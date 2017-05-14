import {
  ENROL_STUDENT,
  EXPELL_STUDENT,
  FETCH_STUDENTS,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_ERROR,
  enrolStudent,
  expellStudent,
  fetchStudents,
  fetchStudentsSuccess,
  fetchStudentsError
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
  });

  test('it returns an empty action if name is invalid', () => {
    let name = null;
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

describe('fetching the student list', () => {
  test('it returns an action', () => {
    let expectedResult = {type: FETCH_STUDENTS };

    expect(fetchStudents()).toEqual(expectedResult);
  });
});

describe('successfully fetched the student list', () => {
  test('it returns an action', () => {
    let data = { students: "Harry Potter" };
    let expectedResult = {
      type: FETCH_STUDENTS_SUCCESS,
      studentList: data.students
    };

    expect(fetchStudentsSuccess(data)).toEqual(expectedResult);
  });
});


describe('failed to fetch the student list', () => {
  test('it returns an action', () => {
    let data = { responseCode: 500 };
    let expectedResult = {
      type: FETCH_STUDENTS_ERROR,
      error: data.responseCode
    };

    expect(fetchStudentsError(data)).toEqual(expectedResult);
  });
});

