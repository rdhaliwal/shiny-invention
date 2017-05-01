import { combineReducers } from 'redux'
import { ENROL_STUDENT, EXPELL_STUDENT } from './StudentActions'
import { HIRE_TEACHER, FIRE_TEACHER } from './TeacherActions'


function students(state = [], action) {
  switch (action.type) {
    case ENROL_STUDENT:
      return [...state, action.name]
    case EXPELL_STUDENT:
      return state.filter(n => n !== action.name)
    default:
      return state
  }
}

function teachers(state = [], action) {
  switch (action.type) {
    case HIRE_TEACHER:
      return [...state, action.name]
    case FIRE_TEACHER:
      return state.filter(n => n !== action.name)
    default:
      return state
  }
}

const hogwartsApp = combineReducers({
  students,
  teachers
})

export default hogwartsApp;


