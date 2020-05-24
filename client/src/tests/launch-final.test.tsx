import React from 'react';
import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { LaunchDetails } from '../components/launch-details';
import { mocks } from './mocks';

it('should render single launch', async () => {
  await act(async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LaunchDetails id="109" />
      </MockedProvider>,
    );

    await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response

    // console.log(container, getByText);
  });
});
