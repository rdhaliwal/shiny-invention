import {
  HIRE_TEACHER,
  hireTeacher,
  FIRE_TEACHER,
  fireTeacher
} from './TeacherActions';

describe('hiring a teacher', () => {
  test('it return an action', () => {
    let name = "Remus Lupin";
    let expectedResult = {type: HIRE_TEACHER, name: name};

    expect(hireTeacher(name)).toEqual(expectedResult);
  });
});

describe('firing a teacher', () => {
  test('it returns an action', () => {
    let name = "Quirinus Quirrel";
    let expectedResult = {type: FIRE_TEACHER, name: name };

    expect(fireTeacher(name)).toEqual(expectedResult);
  });
});

