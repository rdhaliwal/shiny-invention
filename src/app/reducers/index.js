import { combineReducers } from 'redux';
import {
  ENROL_STUDENT,
  EXPELL_STUDENT,
  FETCH_STUDENTS,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_ERROR
} from 'app/actions/StudentActions';
import { HIRE_TEACHER, FIRE_TEACHER } from 'app/actions/TeacherActions';

let initialState = {
  students: [ "Harry Potter" ],
  teachers: [ "Albus Dumbledore" ],
  isFetching: false
}

export function students(state=initialState.students, action={}) {
  switch (action.type) {
    case ENROL_STUDENT:
      return [...state, action.name];
    case EXPELL_STUDENT:
      return state.filter(n => n !== action.name);
    case FETCH_STUDENTS:
      return state;
    case FETCH_STUDENTS_SUCCESS:
      return action.students;
    case FETCH_STUDENTS_ERROR:
      return state;
    default:
      return state;
  }
}

export function teachers(state=initialState.teachers, action={}) {
  switch (action.type) {
    case HIRE_TEACHER:
      return [...state, action.name];
    case FIRE_TEACHER:
      return state.filter(n => n !== action.name);
    default:
      return state;
  }
}

const hogwartsApp = combineReducers({
  students,
  teachers
})

export default hogwartsApp;


