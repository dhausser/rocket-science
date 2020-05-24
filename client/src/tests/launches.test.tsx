import React from 'react';
import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import LaunchList from '../components/launch-list';
import { mocks } from './mocks';

it('renders without error', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <LaunchList />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]}>
      <LaunchList />
    </MockedProvider>,
  );

  expect(getByText('Loading...')).toBeInTheDocument();
});

// it("should render list of launches", async () => {
//   await act(async () => {
//     const { container, getByText } = render(
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <LaunchList />
//       </MockedProvider>
//     );

//     await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response

//     console.log(container, getByText);

//     // const p = component.root.findByType("p");
//     // expect(p.children).toContain("Loading...");
//   });
// });
