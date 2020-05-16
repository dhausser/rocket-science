/** @jsx jsx */
import { useQuery, gql } from '@apollo/client';
import { css, jsx } from "@emotion/core"

// import { RouteComponentProps } from 'react-router-dom';
import LaunchTile from './launch-tile';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    site
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

// interface LaunchesProps extends RouteComponentProps {}

// const Launches: React.FC<LaunchesProps> = () => {
const Launches: React.FC = () => {
  const { 
    data, 
    loading, 
    error, 
  } = useQuery<
    GetLaunchListTypes.GetLaunchList, 
    GetLaunchListTypes.GetLaunchListVariables
  >(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>ERROR</p>;

  console.log(data);

  return (
    <ul>
      {data.launches &&
        data.launches.launches &&
        data.launches.launches.map((launch: any) => (
          <LaunchTile key={launch.id} launch={launch} />
        ))}
    </ul>
  );
}

export default Launches;