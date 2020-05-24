import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import LaunchTile, { LAUNCH_TILE_DATA } from './launch-tile';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';

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

const LaunchList: React.FC = () => {
  const [loadingMore, setLoadingMore] = useState(false);
  const { data, loading, error, fetchMore } = useQuery<
    GetLaunchListTypes.GetLaunchList,
    GetLaunchListTypes.GetLaunchListVariables
  >(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
  if (!data) return <p>Not Found</p>;

  return (
    <>
      <div className="grid">
        {data.launches &&
          data.launches.launches &&
          data.launches.launches.map((launch: any) => (
            <LaunchTile key={launch.flight_number || 0} launch={launch} />
          ))}
      </div>
      {data.launches && data.launches.hasMore && (
        <div
          className="button"
          onClick={() => {
            setLoadingMore(true);
            fetchMore({
              variables: {
                after: data.launches.cursor,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                setLoadingMore(false);
                if (!fetchMoreResult) return prev;
                return {
                  ...fetchMoreResult,
                  launches: {
                    ...fetchMoreResult.launches,
                    launches: [
                      ...prev.launches.launches,
                      ...fetchMoreResult.launches.launches,
                    ],
                  },
                };
              },
            });
          }}
        >
          {loadingMore ? 'Loading...' : 'Load More'}
        </div>
      )}
    </>
  );
};

export { LaunchList };
