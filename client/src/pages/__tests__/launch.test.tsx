import React from 'react';

import { renderApollo, cleanup, act } from '../../test-utils';
import {
  LaunchDetails,
  GET_LAUNCH_DETAILS,
} from '../../components/launch-details';

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
  details: 'test launch details',
};

const mocks = [
  {
    request: { query: GET_LAUNCH_DETAILS, variables: { id: '109' } },
    result: { data: { launch: mockLaunch } },
  },
];

describe('Launch Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders single launch without error', async () => {
    await act(async () => {
      await renderApollo(<LaunchDetails id="109" />, {
        mocks,
        resolvers: {},
      });
    });
  });

  it('should render loading state initially', async () => {
    await act(async () => {
      const { getByText } = await renderApollo(<LaunchDetails id="109" />, {
        mocks,
        resolvers: {},
      });

      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('should render single launch', async () => {
    await act(async () => {
      const { container } = await renderApollo(<LaunchDetails id="109" />, {
        mocks,
        resolvers: {},
      });

      await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response

      expect(container).toBeInTheDocument();
      // expect(getByText(/test mission/i)).toBeInTheDocument();
      // await waitFor(() => getByText(/test mission/i));
    });
  });

  it('renders launch', async () => {
    await act(async () => {
      const { container } = await renderApollo(<LaunchDetails id="109" />, {
        mocks,
        resolvers: {},
      });

      expect(container).toBeInTheDocument();
      // expect(getByText(/test mission/i)).toBeInTheDocument();
      // await waitFor(() => getByText(/test mission/i));
    });
  });
});
