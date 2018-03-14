import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders create an assignment form', () => {
  const app = mount(<App />);
  expect(app.find('#add-assignment').text()).toEqual('+ Record your assignment')
});

