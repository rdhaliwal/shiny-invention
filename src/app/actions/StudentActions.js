/*
 * Action types
 */

export const ENROL_STUDENT =  'ENROL_STUDENT'
export const EXPELL_STUDENT = 'EXPELL_STUDENT'

/*
 * Action creators
 */

export const enrolStudent = (name) => {
  let action = { type: ENROL_STUDENT, name: name }
  if (name !== null) { return action; }
}

export const expellStudent = (name) => {
  return { type: EXPELL_STUDENT, name: name }
}
