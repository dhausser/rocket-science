import React from 'react';

import { renderApollo, cleanup, waitFor, mockLaunch } from '../../test-utils';
import { GET_LAUNCH_DETAILS, LaunchDetails } from '../launch-details';

const mocks = [
  {
    request: { query: GET_LAUNCH_DETAILS, variables: { id: '109' } },
    result: { data: { launch: mockLaunch } },
  },
];

afterEach(cleanup);

it('renders single launch without error', async () => {
  await renderApollo(<LaunchDetails id="109" />, { mocks });
});

it('should render loading state initially', async () => {
  const { getByText } = await renderApollo(<LaunchDetails id="109" />, {
    mocks,
  });
  waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
});

it('should render single launch', async () => {
  const { container } = await renderApollo(<LaunchDetails id="109" />, {
    mocks,
  });
  waitFor(() => expect(container).toMatchSnapshot());
});
