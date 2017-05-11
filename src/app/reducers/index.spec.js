import { students, teachers } from './index';
import { ENROL_STUDENT, EXPELL_STUDENT } from 'app/actions/StudentActions';
import { HIRE_TEACHER, FIRE_TEACHER } from 'app/actions/TeacherActions';

describe('students reducer', () => {
  // Scopes are stupid. But wrapping this in a beforeEach
  // means the variable is scoped to that, and not the tests
  let initialState = ["Harry Potter"];

  it('should return the initial state', () => {
    let result = students(initialState);

    expect(result).toEqual(initialState);
  })

  it('should enrol a student', () => {
    let result = students(initialState, {
      type: ENROL_STUDENT,
      name: "Hermione Granger"
    });

    expect(result).toEqual([...initialState, "Hermione Granger"]);
  })


  it('should expel a student', () => {
    let result = students(["Draco Malfoy"], {
      type: EXPELL_STUDENT,
      name: "Draco Malfoy"
    });

    expect(result).toEqual([]);
  })
});

describe('teachers reducer', () => {
  // Before
  let initialState = ["Albus Dumbledore"];

  it('should return the initial state', () => {
    let result = teachers();

    expect(result).toEqual(initialState);
  })

  it('should hire a teacher', () => {
    let result = teachers(initialState, {
      type: HIRE_TEACHER,
      name: "Remus Lupin"
    });

    expect(result).toEqual(["Albus Dumbledore", "Remus Lupin"]);
  })


  it('should fire a teacher', () => {
    let result = teachers(["Quirinus Quirrel"], {
      type: FIRE_TEACHER,
      name: "Quirinus Quirrel"
    });

    expect(result).toEqual([]);
  })
});
