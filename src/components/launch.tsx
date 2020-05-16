import React from 'react';
// import { useQuery, gql } from '@apollo/client';
import { useParams, RouteComponentProps } from 'react-router-dom';
import Button from './button';

// import { LAUNCH_TILE_DATA } from './launches';
// import * as LaunchDetailsTypes from './__generated__/LaunchDetails';

// export const GET_LAUNCH_DETAILS = gql`
//   query LaunchDetails($launchId: ID!) {
//     launch(id: $launchId) {
//       isInCart @client
//       site
//       rocket {
//         type
//       }
//       ...LaunchTile
//     }
//   }
//   ${LAUNCH_TILE_DATA}
// `;

interface LaunchProps extends RouteComponentProps {
  launchId?: string;
}

const Launch: React.FC<LaunchProps> = () => {
  const { launchId } = useParams();
  // const { 
  //   data, 
  //   loading, 
  //   error 
  // } = useQuery<
  //   LaunchDetailsTypes.LaunchDetails, 
  //   LaunchDetailsTypes.LaunchDetailsVariables
  // >(GET_LAUNCH_DETAILS, 
  //   { variables: { launchId } }
  // );
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>ERROR: {error.message}</p>;
  // if (!data) return <p>Not found</p>;

  // console.log(data);

  console.log(launchId);

  return (
    <div className="container">
      <p>Launch Details for: {launchId}</p>
      <Button text="Back" path="/form" />
    </div>
  )
}

export default Launch;