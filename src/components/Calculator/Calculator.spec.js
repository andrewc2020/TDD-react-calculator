import React from 'react';
import { mount, shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render the Display and Keypad Components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Display displayValue={wrapper.instance().state.displayValue} />,
      <Keypad
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    ])).toEqual(true);
  }); 



  describe('setOperator', () => {
    let wrapper;
  
    beforeEach(() => wrapper = shallow(<Calculator />));
  
    it('updates the value of selectedOperator', () => {
      wrapper.instance().setOperator('+');
      expect(wrapper.state('selectedOperator')).toEqual('+');
      wrapper.instance().setOperator('/');
      expect(wrapper.state('selectedOperator')).toEqual('/');
    });
  
    it('updates the value of storedValue to the value of displayValue', () => {
      wrapper.setState({ displayValue: '5' });
      wrapper.instance().setOperator('+');
      expect(wrapper.state('storedValue')).toEqual('5');
    });
  
    // it('updates the value of displayValue to "0"', () => {
    //   wrapper.setState({ displayValue: '5' });
    //   wrapper.instance().setOperator('+');
    //   expect(wrapper.state('displayValue')).toEqual('0');
    // });

    it('updates the value of displayValue to "5"', () => {
      wrapper.setState({ displayValue: '5' });
      wrapper.instance().setOperator('+');
      expect(wrapper.state('displayValue')).toEqual('5');
    });

    
  
    it('selectedOperator is not an empty string, does not update storedValue', () => {
      wrapper.setState({ displayValue: '5' });
      wrapper.instance().setOperator('+');
      expect(wrapper.state('storedValue')).toEqual('5');
      wrapper.instance().setOperator('-');
      expect(wrapper.state('storedValue')).toEqual('5');
    });
  });
  describe('callOperator', () => {
    let wrapper;
  
    beforeEach(() => wrapper = shallow(<Calculator />));
  
    it('updates displayValue to the sum of storedValue and displayValue', () => {
      wrapper.setState({ storedValue: '3' });
      wrapper.setState({ displayValue: '2' });
      wrapper.setState({ selectedOperator: '+' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('5');
    });
  
    it('updates displayValue to the difference of storedValue and displayValue', () => {
      wrapper.setState({ storedValue: '3' });
      wrapper.setState({ displayValue: '2' });
      wrapper.setState({ selectedOperator: '-' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('1');
    });
  
    it('updates displayValue to the product of storedValue and displayValue', () => {
      wrapper.setState({ storedValue: '3' });
      wrapper.setState({ displayValue: '2' });
      wrapper.setState({ selectedOperator: 'x' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('6');
    });

    it('should display the storedValue when the operator is pressed ', () => {
      wrapper.setState({ storedValue: '6' });
      
      wrapper.setState({ selectedOperator: 'x' });
     
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('6');
    });
  
    it('updates displayValue to the quotient of storedValue and displayValue', () => {
      wrapper.setState({ storedValue: '3' });
      wrapper.setState({ displayValue: '2' });
      wrapper.setState({ selectedOperator: '/' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('1.5');
    });

    it('updates displayValue to the quotient of storedValue and displayValue to the correct decimal places and remainder', () => {
      wrapper.setState({ storedValue: '3.25' });
      wrapper.setState({ displayValue: '2' });
      wrapper.setState({ selectedOperator: '/' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('1.625');
    });
  
    it('updates displayValue to "0" if operation results in "NaN"', () => {
      wrapper.setState({ storedValue: '3' });
      wrapper.setState({ displayValue: 'string' });
      wrapper.setState({ selectedOperator: '/' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('0');
    });
  
    it('updates displayValue to "0" if operation results in "Infinity"', () => {
      wrapper.setState({ storedValue: '7' });
      wrapper.setState({ displayValue: '0' });
      wrapper.setState({ selectedOperator: '/' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('0');
    });
  
    it('updates displayValue to "0" if selectedOperator does not match cases', () => {
      wrapper.setState({ storedValue: '7' });
      wrapper.setState({ displayValue: '10' });
      wrapper.setState({ selectedOperator: 'string' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('0');
    });
  
    it('updates displayValue to "0" if called with no value for storedValue or selectedOperator', () => {
      wrapper.setState({ storedValue: '' });
      wrapper.setState({ displayValue: '10' });
      wrapper.setState({ selectedOperator: '' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('0');
    });

    it('updates displayValue to "0" if called with . and there is no storedValue',()=>{
      wrapper.setState({ storedValue: '' });
      wrapper.setState({ displayValue: '.' });
      wrapper.setState({ selectedOperator: '' });
      wrapper.instance().callOperator();
      expect(wrapper.state('displayValue')).toEqual('0');
    })

    
  }); //end of describe callOperator
}); //end of describe calculator
describe('mounted Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<Calculator />));

  it('calls updateDisplay when a number key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.number-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls setOperator when an operator key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'setOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.operator-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls callOperator when the submit key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'callOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.submit-key').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  }); 
}); // end of describe mounted Calculator