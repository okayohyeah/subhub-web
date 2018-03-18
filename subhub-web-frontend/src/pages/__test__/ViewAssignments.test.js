import React from 'react';
import ReactDOM from 'react-dom';
import ViewAssignments from '../ViewAssignments';
import { mount } from 'enzyme';

it('View Assignments renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewAssignments />, div);
  ReactDOM.unmountComponentAtNode(div);
});