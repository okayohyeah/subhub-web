import React from 'react';
import ReactDOM from 'react-dom';
import AddAssignment from '../AddAssignment';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddAssignment />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//inputs - headers
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

//submitHandler
it('calls submitHandler on submit', ()=>{
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  component.find('button#submit').simulate('click', {button: 0});
  expect(mockSubmitHandler.mock.calls.length).toBe(1);
});

//values on submit
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

//*** VALIDATIONS ***
// alert message
it('shows flash message when there is an error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'school',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('.alert-danger').length).toBe(1);
});

it('does not show flash message when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component =  mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('.alert-danger').length).toBe(0);
});

//school input validations
it('highlights school input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'school',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#school-form-group.has-error').length).toBe(1);
});

it('no help message for school when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#school-help-block').length).toBe(0);
});

it('shows help message for school when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'school',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#school-help-block').length).toBe(1);
});

//teacher input validations
it('highlights teacher input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'teacher',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#teacher-form-group.has-error').length).toBe(1);
});

it('no help message for teacher when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#teacher-help-block').length).toBe(0);
});

it('shows help message for teacher when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'teacher',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#teacher-help-block').length).toBe(1);
});

//grade input validations
it('highlights grade input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'grade',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#grade-form-group.has-error').length).toBe(1);
});

it('no help message for grade when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#grade-help-block').length).toBe(0);
});

it('shows help message for grade when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'grade',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#grade-help-block').length).toBe(1);
});

//date input validations
it('highlights date input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'date',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#date-form-group.has-error').length).toBe(1);
});

it('no help message for date when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#date-help-block').length).toBe(0);
});

it('shows help message for date when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'date',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#date-help-block').length).toBe(1);
});

//adminRate input validations 
it('highlights adminRate input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'adminRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#adminRate-form-group.has-error').length).toBe(1);
});

it('no help message for adminRate when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#adminRate-help-block').length).toBe(0);
});

it('shows help message for adminRate when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'adminRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#adminRate-help-block').length).toBe(1);
});

//lessonPlansRate input validations
it('highlights lessonPlansRate input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'lessonPlansRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#lessonPlansRate-form-group.has-error').length).toBe(1);
});

it('no help message for lessonPlansRate when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#lessonPlansRate-help-block').length).toBe(0);
});

it('shows help message for lessonPlansRate when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'lessonPlansRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#lessonPlansRate-help-block').length).toBe(1);
});

//studentsRate input validations
it('highlights studentsRate input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'studentsRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#studentsRate-form-group.has-error').length).toBe(1);
});

it('no help message for studentsRate when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#studentsRate-help-block').length).toBe(0);
});

it('shows help message for studentsRate when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'studentsRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#studentsRate-help-block').length).toBe(1);
});

//schoolCultureRate input validations
it('highlights schoolCultureRate input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'schoolCultureRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#schoolCultureRate-form-group.has-error').length).toBe(1);
});

it('no help message for schoolCultureRate when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#schoolCultureRate-help-block').length).toBe(0);
});

it('shows help message for schoolCultureRate when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'schoolCultureRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#schoolCultureRate-help-block').length).toBe(1);
});

//overallRate input validations
it('highlights overallRate input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'overallRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#overallRate-form-group.has-error').length).toBe(1);
});

it('no help message for overallRate when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#overallRate-help-block').length).toBe(0);
});

it('shows help message for overallRate when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'overallRate',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#overallRate-help-block').length).toBe(1);
});

//goldList input validations
it('highlights goldList input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'goldList',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#goldList-form-group.has-error').length).toBe(1);
});

it('no help message for goldList when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#goldList-help-block').length).toBe(0);
});

it('shows help message for goldList when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'goldList',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#goldList-help-block').length).toBe(1);
});

//redList input validations
it('highlights redList input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'redList',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#redList-form-group.has-error').length).toBe(1);
});

it('no help message for redList when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#redList-help-block').length).toBe(0);
});

it('shows help message for redList when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'redList',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#redList-help-block').length).toBe(1);
});

//notes input validations
it('highlights notes input when there is an error', ()=> {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'notes',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#notes-form-group.has-error').length).toBe(1);
});

it('no help message for notes when there is no error', () => {
  const mockSubmitHandler = jest.fn();
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} />);
  expect(component.find('#notes-help-block').length).toBe(0);
});

it('shows help message for notes when there is error', () => {
  const mockSubmitHandler = jest.fn();
  const validationErrors = [
    {
      param: 'notes',
      msg: 'Is required.'
    }
  ];
  const component = mount(<AddAssignment onSubmit={mockSubmitHandler} errors={validationErrors} />);
  expect(component.find('#notes-help-block').length).toBe(1);
});



