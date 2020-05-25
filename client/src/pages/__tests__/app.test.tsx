import React from 'react';
import { renderApollo } from '../../test-utils';
import { Pages } from '..';

test('full app rendering/navigating', () => {
  // const history = createMemoryHistory();
  renderApollo(<Pages />, {});

  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  // expect(container.innerHTML).toMatch("You are home");

  // fireEvent.click(getByText(/about/i))

  // check that the content changed to the new page
  // expect(container.innerHTML).toMatch('You are on the about page')
});
