import React from 'react';
import ReactDOM from 'react-dom';
import ViewAssignments from '../ViewAssignments';
import { mount } from 'enzyme';

const assignments = [
  {
    id: 1,
    school: 'Oak Hill Elementary School',
    teacher: 'John Blum',
    grade: '2',
    date: '2018-02-12', 
    adminRate: 4,
    lessonPlansRate: 5,
    studentsRate: 5,
    schoolCultureRate: 4,
    overallRate: 5,
    goldList: 'Yes',
    redList: 'No',
    notes: 'Best assignment ever. Solid!'
  },
  {
    id: 2,
    school: 'LR Green Elementary School',
    teacher: 'Amanda Rouse',
    grade: 'TK',
    date: '2018-02-12', 
    adminRate: 3,
    lessonPlansRate: 4,
    studentsRate: 4,
    schoolCultureRate: 3,
    overallRate: 4,
    goldList: 'No',
    redList: 'No',
    notes: 'Just another day with some kids.'
  },
  {
    id: 3,
    school: 'Rose Elementary School',
    teacher: 'Armando Lopez',
    grade: '4/5',
    date: '2017-11-22', 
    adminRate: 1,
    lessonPlansRate: 3,
    studentsRate: 1,
    schoolCultureRate: 2,
    overallRate: 1,
    goldList: 'No',
    redList: 'Yes',
    notes: 'Never Again! Worst school, class, students. Felt bad when I walked in.'
  }
]

it('View Assignments renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewAssignments assignments={assignments} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders the assignments', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const headings = component.find('h4 > .school');
  expect(headings.length).toBe(3);  
});

it('Renders the school name', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const school = component.find('h4 > .school').first();
  expect(school.text()).toBe('Oak Hill Elementary School');
});

it('Renders the teacher name', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const teacher = component.find('h4 > .teacher').first();
  expect(teacher.text()).toBe('John Blum');
});

it('Renders the grade', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const grade = component.find('h4 > .grade').first();
  expect(grade.text()).toBe('Grade: 2');
});

it('Renders the date', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const date = component.find('h4 > .date').first();
  expect(date.text()).toBe('2018-02-12');
});

it('Renders the admin rating', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const adminRate = component.find('h4 > .adminRate').first();
  expect(adminRate.text()).toBe('Admin Rating: 4');
});

it('Renders the admin rating', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const adminRate = component.find('h4 > .adminRate').first();
  expect(adminRate.text()).toBe('Admin Rating: 4');
});

it('Renders the lesson plans rating rating', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const lessonPlansRate = component.find('h4 > .lessonPlansRate').first();
  expect(lessonPlansRate.text()).toBe('Lesson Plans Rating: 5');
});

it('Renders the students rating rating', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const studentsRate = component.find('h4 > .studentsRate').first();
  expect(studentsRate.text()).toBe('Students Rating: 5');
});

it('Renders the school culture rating', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const schoolCultureRate = component.find('h4 > .schoolCultureRate').first();
  expect(schoolCultureRate.text()).toBe('School Culture Rating: 4');
});

it('Renders the overall rating', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const overallRate = component.find('h4 > .overallRate').first();
  expect(overallRate.text()).toBe('Overall Rating: 5');
});

it('Renders the gold list', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const goldList = component.find('h4 > .goldList').first();
  expect(goldList.text()).toBe('Gold List: Yes');
});

it('Renders the red list', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const redList = component.find('h4 > .redList').first();
  expect(redList.text()).toBe('Red List: No');
});

it('Renders the notes', () => {
  const component = mount(<ViewAssignments assignments={assignments} />);
  const notes = component.find('h4 > .notes').first();
  expect(notes.text()).toBe('Notes: Best assignment ever. Solid!');
});
