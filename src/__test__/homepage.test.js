import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Homepage from '../components/Homepage';

describe('Testing Home page component', () => {
  it('should render correctly Home page component', () => {
    const element = render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage itemsPerPage={24} />
        </BrowserRouter>
      </Provider>,
    );
    expect(element).toBeTruthy();
  });
});
