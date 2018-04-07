import React from 'react';
import ReactDOM from 'react-dom';
import AddAssignment from '../AddAssignment';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddAssignment />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a school name input', () =>{
  const component = mount(<AddAssignment />);
  expect(component.find('#school').text()).toBe('School Name');
});

it('has a teacher name input', () =>{
  const component = mount(<AddAssignment />);
  expect(component.find('#teacher').text()).toBe('Teacher Name');
});

it('has a grade level input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#grade').text()).toBe('Grade Level');
});

it('has a date of assignment input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#date').text()).toBe('Date of Assignment');
});

it('has an admin rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#adminRate').text()).toBe('Rate the School Administration');
});


it('has a lesson plans rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#lessonPlansRate').text()).toBe('Rate the Lesson Plans');
});

it('has a students rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#studentsRate').text()).toBe('Rate the Students in Your Classes');
});

it('has a school culture rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#schoolCultureRate').text()).toBe('Rate the School Culture');
});

it('has an overall rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#overallRate').text()).toBe('Rate the Assignment Overall');
});

it('has a gold list input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#goldList').text()).toBe('The Gold ListI would go back in a heartbeat. Add it to my favorites.');
});

it('has a red list input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#redList').text()).toBe('The Red ListIt was a difficult assignment. Add it to the Red List. I want to remember to avoid this assignment in the future.');
});

it('has a notes input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#notes').text()).toBe('Notes about the Assignment');
});

it('calls submitHandler on submit', ()=>{
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  component.find('button#submit').simulate('click', {button: 0});
  expect(mockSubmitHandler.mock.calls.length).toBe(1);
});

it('passes values on submit', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  component.find('input[name="school"]').simulate('change', {target: {value: 'Juniper Elementary School', name: 'school'}});
  component.find('input[name="teacher"]').simulate('change', {target: {value: 'John Miller', name: 'teacher'}});
  component.find('select[name="grade"]').simulate('change', {target: {value: '3', name: 'grade'}});
  component.find('input[name="date"]').simulate('change', {target: {value: '04-11-2016', name: 'date'}});
  component.find('input[name="goldList"]').simulate('change', {target: {value: 'on', name: 'goldList'}});  
  component.find('input[name="redList"]').simulate('change', {target: {value: 'off', name: 'redList'}});  
  component.find('textarea[name="notes"]').simulate('change', {target: {value: 'Good class. Stayed on task mostly. Good plans, easy to follow.', name: 'notes'}});
  component.find('button#submit').simulate('click', {button: 0});

  const submittedValues = mockSubmitHandler.mock.calls[0][0];

  expect(submittedValues['school']).toBe('Juniper Elementary School');
  expect(submittedValues['teacher']).toBe('John Miller');
  expect(submittedValues['grade']).toBe('3');
  expect(submittedValues['date']).toBe('04-11-2016');

  expect(submittedValues['goldList']).toBe('on');
  expect(submittedValues['redList']).toBe('off');
  expect(submittedValues['notes']).toBe('Good class. Stayed on task mostly. Good plans, easy to follow.');
});



