import fetch from 'isomorphic-fetch';
import { API_PATH } from 'app/utils/urls';

export const ENROL_STUDENT =  'ENROL_STUDENT';
export const EXPELL_STUDENT = 'EXPELL_STUDENT';
export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_ERROR = 'FETCH_STUDENTS_ERROR';

export const enrolStudent = (name) => {
  let action = { type: ENROL_STUDENT, name: name }
  if (name !== null) {
    return action;
  } else {
    return {type: ''}
  }
}

export const expellStudent = (name) => {
  return { type: EXPELL_STUDENT, name: name }
}

export const fetchStudentsBegin = () => {
  return {
    type: FETCH_STUDENTS
  }
}

export const fetchStudentsSuccess = (data) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    students: data.students
  }
}

export const fetchStudentsError = (data) => {
  return {
    type: FETCH_STUDENTS_ERROR,
    error: `${data.code}: ${data.statusText}`
  }
}

export const fetchStudents = () => {
  return function (dispatch) {
    dispatch(fetchStudentsBegin());

    return fetch(`${API_PATH}/api/harry_potter`, {
      method: 'GET',
      mode: 'cors',
      headers:{'Access-Control-Allow-Origin':'*'}
    }).then(response => {
      let json = response.json();
      if (response.ok) {
        return json;
      } else {
        // Reject the promise if the response is a 500
        return json.then(err => {throw err;});
      }
    })
    .then (json => dispatch(fetchStudentsSuccess(json)))
    .catch(json => dispatch(fetchStudentsError(json)));
  }
}
