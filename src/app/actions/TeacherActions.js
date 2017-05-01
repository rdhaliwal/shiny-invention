/*
 * Action types
 */

export const HIRE_TEACHER = 'HIRE_TEACHER'
export const FIRE_TEACHER = 'FIRE_TEACHER'

/*
 * Action creators
 */

export const hireTeacher = (name) => {
  return { type: HIRE_TEACHER, name: name }
}

export const fireTeacher = (name) => {
  return { type: FIRE_TEACHER, name: name }
}
