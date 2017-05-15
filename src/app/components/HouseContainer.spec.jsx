// Link.react-test-renderert.js
import React from 'react';
import { HouseContainer } from './HouseContainer';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

jest.mock('react-router-dom');
jest.mock('app/components/House', () => require('mockComponent'));

// Snapshot test
test('It renders the HouseContainer', () => {
  let props = {
    houseNames: ["one", "two", "three"],
    students: ["Harry"],
    location: {pathname: "/app/three"},
    match: {url : "/app/"}
  }

  const addStudentClick = jest.fn();
  const component = renderer.create(
    <HouseContainer {...props} refreshStudentList={addStudentClick} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


// Functionality Tests
test('It makes an action call to initialise the store', () => {
  let props = {houseNames: ["one", "two", "three"],
    students: ["Harry"],
    location: {pathname: "/app/three"},
    match: {url : "/app/"}
  }
  const addStudentClick = jest.fn();
  const wrapper = mount(
    <HouseContainer {...props} refreshStudentList={addStudentClick} />
  );

  expect(addStudentClick).toHaveBeenCalled();
});

// Functionality Tests
test('It fires an action when clicked', () => {
  let props = {houseNames: ["one", "two", "three"],
    students: ["Harry"],
    location: {pathname: "/app/three"},
    match: {url : "/app/"}
  }
  const addStudentClick = jest.fn();
  const wrapper = mount(
    <HouseContainer {...props} refreshStudentList={addStudentClick} />
  );

  expect(addStudentClick).toHaveBeenCalled();
  const button = wrapper.ref('fetchStudents');
  button.simulate('click');
  expect(addStudentClick).toHaveBeenCalled();
});

