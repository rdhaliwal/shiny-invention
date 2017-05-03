// Link.react-test.js
import React from 'react';
import House from './House';
import renderer from 'react-test-renderer';

test('It renders the Gryffindor House Component', () => {
  let props =  {
    match : {params:{houseName: "Gryffindor"}}
  }
  const component = renderer.create(
    <House {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('It renders the default House Component when no props are given', () => {
  const component = renderer.create(
    <House />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
