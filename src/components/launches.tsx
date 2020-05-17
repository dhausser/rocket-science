import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { RouteComponentProps } from "react-router-dom";

import LaunchTile from "./launch-tile";
import * as GetLaunchListTypes from "./__generated__/GetLaunchList";

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

interface LaunchesProps extends RouteComponentProps {}

const Launches: React.FC<LaunchesProps> = () => {
  const [loadingMore, setLoadingMore] = useState(false);
  const { data, loading, error, fetchMore } = useQuery<
    GetLaunchListTypes.GetLaunchList,
    GetLaunchListTypes.GetLaunchListVariables
  >(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>ERROR</p>;

  return (
    <>
      <div className="grid">
        {data.launches &&
          data.launches.launches &&
          data.launches.launches.map((launch: any) => (
            <LaunchTile key={launch.id} launch={launch} />
          ))}
      </div>
      {data.launches && data.launches.hasMore && (
        <div
          className="button"
          style={{ width: "100px" }}
          onClick={() => {
              setLoadingMore(true);
              fetchMore({
                variables: {
                  after: data.launches.cursor,
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
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
              })
            }
          }
        >
          {loadingMore ? 'Loading...' : 'Load More'}
        </div>
      )}
    </>
  );
};

export default Launches;
