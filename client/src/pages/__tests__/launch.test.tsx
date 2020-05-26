import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { renderApollo, cleanup, waitFor, mockLaunch } from '../../test-utils';
import { GET_LAUNCH_DETAILS } from '../../components/launch-details';
import { Launch } from '../launch';

const mocks = [
  {
    request: { query: GET_LAUNCH_DETAILS, variables: { id: '109' } },
    result: { data: { launch: mockLaunch } },
  },
];

afterEach(cleanup);

it('renders single launch without error', async () => {
  await renderApollo(
    <MemoryRouter initialEntries={['/launch/109']}>
      <Route path="/launch/:id" component={Launch} />
    </MemoryRouter>,
    { mocks },
  );
});

it('should render loading state initially', async () => {
  const { getByText } = await renderApollo(
    <MemoryRouter initialEntries={['/launch/109']}>
      <Route path="/launch/:id" component={Launch} />
    </MemoryRouter>,
    { mocks },
  );
  waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
});

it('should render single launch', async () => {
  const { container } = await renderApollo(
    <MemoryRouter initialEntries={['/launch/109']}>
      <Route path="/launch/:id" component={Launch} />
    </MemoryRouter>,
    { mocks },
  );
  waitFor(() => expect(container).toMatchSnapshot());
});
