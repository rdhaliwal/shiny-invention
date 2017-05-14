/*
 * Action types
 */

export const ENROL_STUDENT =  'ENROL_STUDENT';
export const EXPELL_STUDENT = 'EXPELL_STUDENT';

export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_ERROR = 'FETCH_STUDENTS_ERROR';

/*
 * Action creators
 */

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

export const fetchStudents = () => {
  return {
    type: FETCH_STUDENTS
  }
}

export const fetchStudentsSuccess = (data) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    studentList: data.students
  }
}

export const fetchStudentsError = (data) => {
  return {
    type: FETCH_STUDENTS_ERROR,
    error: data.responseCode
  }
}
