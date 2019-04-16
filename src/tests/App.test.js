import React from 'react';
import { Adapter } from '../setupTest';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Catalog from '../components/Catalog';

describe('App component', () => {
  it('cta reads "hide sold items"', () => {
    const wrapper = shallow(<Catalog />)
    const text = wrapper.find('button').text();
    expect(text).toEqual('Hide sold items');
  });
});


it('matches the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

