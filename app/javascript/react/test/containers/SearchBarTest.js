import SearchBar from '../../src/containers/SearchBar';
import SearchField from '../../src/components/SearchField';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<SearchBar />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ errors: {}, query: '', lastKeyPressedTime: 0 });
  });

  it('should render an SearchField Component', () => {
    expect(wrapper.find(SearchField)).toBePresent();
  });

  it('should render the SearchField Component with specific props when SearchField is false', () => {
    expect(wrapper.find(SearchField).props()).toEqual({
      handlerFunction: jasmine.any(Function),
      placeholder: "Search GitHub repositories"
    });
  });

});