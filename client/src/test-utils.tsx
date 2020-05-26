import React from 'react';
import { render } from '@testing-library/react';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

type RenderApolloOptions = {
  mocks?: MockedResponse[];
  addTypename?: any;
  defaultOptions?: any;
  cache?: any;
  resolvers?: any;
  [st: string]: any;
};

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
  details: 'test details',
};

const renderApollo = (
  node: any,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: RenderApolloOptions = {},
): any => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options,
  );
};

export * from '@testing-library/react';
export { renderApollo, mockLaunch };
