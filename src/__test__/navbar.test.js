import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Testing Card page component', () => {
  it('should render correctly Card page component', () => {
    const tree = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
