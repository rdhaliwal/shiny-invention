import {
  ENROL_STUDENT,
  EXPELL_STUDENT,
  FETCH_STUDENTS,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_ERROR,
  enrolStudent,
  expellStudent,
  fetchStudents,
  fetchStudentsBegin,
  fetchStudentsSuccess,
  fetchStudentsError
} from './StudentActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
import nock from 'nock';

describe('enrolling a student', () => {
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

describe('begins fetching the student list', () => {
  test('it returns an action', () => {
    let expectedResult = {type: FETCH_STUDENTS };


    expect(fetchStudentsBegin()).toEqual(expectedResult);
  });
});

describe('successfully fetched the student list', () => {
  test('it returns an action', () => {
    let data = { students: "Harry Potter" };
    let expectedResult = {
      type: FETCH_STUDENTS_SUCCESS,
      students: data.students
    };

    expect(fetchStudentsSuccess(data)).toEqual(expectedResult);
  });
});


describe('failed to fetch the student list', () => {
  test('it returns an action', () => {
    let data = { code: 500, statusText: "Oh bother." };
    let expectedResult = {
      type: FETCH_STUDENTS_ERROR,
      error: `${data.code}: ${data.statusText}`
    };

    expect(fetchStudentsError(data)).toEqual(expectedResult);
  });
});


describe('fetch the student list', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  test('it dispatches a successful action', () => {
    let data = {students: ['Aberforth Dumbledore']};
    nock('http://localhost:3000/')
      .get('/api/harry_potter')
      .reply(200, data)

    const expectedActions = [
      fetchStudentsBegin(),
      fetchStudentsSuccess(data)
    ];
    const store = mockStore({});

    return store.dispatch(fetchStudents())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });

  test('it dispatches a failed action', () => {
    let data = {code: 500, statusText: 'Oh teh noes! Internal Server Error'};
    nock('http://localhost:3000/')
      .get('/api/harry_potter')
      .reply(500, data)

    const expectedActions = [
      fetchStudentsBegin(),
      fetchStudentsError(data)
    ];
    const store = mockStore({});

    return store.dispatch(fetchStudents())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });

});
