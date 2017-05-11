// Link.react-test.js
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

  const component = renderer.create(
    <HouseContainer {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
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
    <HouseContainer {...props} preferredWayToAddStudentClick={addStudentClick} />
  );

  const button = wrapper.ref('addStudent');
  button.simulate('click');
  expect(addStudentClick).toHaveBeenCalled();
});

