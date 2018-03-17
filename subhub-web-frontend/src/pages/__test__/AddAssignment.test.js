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
  expect(component.find('#adminRate').text()).toBe('Rate the School Administration1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome');
});


it('has a lesson plans rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#lessonPlansRate').text()).toBe('Rate the Lesson Plans1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome');
});

it('has a students rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#studentsRate').text()).toBe('Rate the Students in Your Classes1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome');
});

it('has a school culture rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#schoolCultureRate').text()).toBe('Rate the School Culture1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome');
});

it('has an overall rating input', () => {
  const component = mount(<AddAssignment />);
  expect(component.find('#overallRate').text()).toBe('Rate the Assignment Overall1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome');
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
