import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card';

describe('Testing Card page component', () => {
  it('should render correctly Card page component', () => {
    const game = {
      id: 1,
      name: 'god of war',
      image: 'https://image.jpg',
      description: 'best game',
      genre: 'Action',
      platform: 'Windows',

    };

    const tree = render(
      <BrowserRouter>
        <Card game={game} />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
