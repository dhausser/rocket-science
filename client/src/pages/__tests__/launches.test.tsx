import React from 'react';
import { InMemoryCache } from '@apollo/client';

import { renderApollo, cleanup, waitFor, act } from '../../test-utils';
import { LaunchList, GET_LAUNCHES } from '../../components/launch-list';

const mockLaunch = {
  __typename: 'Launch',
  flight_number: '109',
  mission_name: 'test mission',
  rocket: {
    __typename: 'Rocket',
    rocket_name: 'Rocket name 1',
  },
  launch_site: {
    __typename: 'LaunchSite',
    site_id: 'Launch site id 1',
    site_name: 'Launch site name 1',
    site_name_long: 'Launch site name long 1',
  },
};
const cache = new InMemoryCache({ addTypename: false });
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

describe('Launches Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', async () => {
    await renderApollo(<LaunchList />, {
      mocks,
      cache,
    });
  });

  it('should render loading state initially', async () => {
    await act(async () => {
      const { getByText } = await renderApollo(<LaunchList />, {
        mocks,
        cache,
      });

      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('should render list of launches', async () => {
    await act(async () => {
      const { getByText } = await renderApollo(<LaunchList />, {
        mocks,
        cache,
      });

      await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response

      await waitFor(() => getByText(/test mission/i));
    });
  });

  it('renders launches', async () => {
    await act(async () => {
      const { getByText } = await renderApollo(<LaunchList />, {
        mocks,
        cache,
      });

      await waitFor(() => getByText(/test mission/i));
    });
  });
});
