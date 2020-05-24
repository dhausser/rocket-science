import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pages from '../pages';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <MockedProvider>
      <Router history={history}>
        <Pages />
      </Router>
    </MockedProvider>,
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  // expect(container.innerHTML).toMatch("You are home");

  // fireEvent.click(getByText(/about/i))

  // check that the content changed to the new page
  // expect(container.innerHTML).toMatch('You are on the about page')
});
