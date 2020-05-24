import React from 'react';
import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Launch from '../components/launch-details';
import { mocks } from './mocks';

it('renders single launch without error', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Launch id="109" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]}>
      <Launch id="109" />
    </MockedProvider>,
  );

  expect(getByText('Loading...')).toBeInTheDocument();
});

// it("should render single launch", async () => {
//   await act(async () => {
//     const { container, getByText } = render(
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <Launch id="109" />
//       </MockedProvider>
//     );

//     await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response

//     // console.log(container, getByText);

//     // const p = component.root.findByType("header");
//     // expect(p.children).toContain("Mock mission name");
//   });
// });
