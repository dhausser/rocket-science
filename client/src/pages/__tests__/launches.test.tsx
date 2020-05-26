import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { renderApollo, cleanup, waitFor, mockLaunch } from '../../test-utils';
import { GET_LAUNCHES, LaunchList } from '../../components/launch-list';

const mocks = [
  {
    request: { query: GET_LAUNCHES },
    result: {
      data: {
        launches: {
          cursor: '123',
          hasMore: true,
          launches: [mockLaunch],
        },
      },
    },
  },
];

afterEach(cleanup);

it('renders without error', async () => {
  await renderApollo(<LaunchList />, { mocks, wrapper: MemoryRouter });
});

it('should render loading state initially', async () => {
  const { getByText } = await renderApollo(<LaunchList />, {
    mocks,
    wrapper: MemoryRouter,
  });
  waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
});

it('should render list of launches', async () => {
  const { getByText } = await renderApollo(<LaunchList />, {
    mocks,
    wrapper: MemoryRouter,
  });
  waitFor(() => expect(getByText(/test mission/i).toBeInTheDocument()));
});
