import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBarDetail from '../components/NavBarDetail';

describe('Testing Card page component', () => {
  it('should render correctly Card page component', () => {
    const tree = render(
      <BrowserRouter>
        <NavBarDetail />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
