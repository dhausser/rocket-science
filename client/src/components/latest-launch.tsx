import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, RouteComponentProps } from "react-router-dom";

import LaunchTile from "./launch-tile";
import { LAUNCH_TILE_DATA } from "./launches";
import * as LaunchDetailsTypes from "./__generated__/LaunchDetails";

export const GET_LAUNCH_DETAILS = gql`
  query LatestLaunchDetails {
    launch {
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface LaunchProps extends RouteComponentProps {
  launchId?: string;
}

function replacer(key: string, value: string) {
  // Filtering out properties
  if (key === "__typename") {
    return undefined;
  }
  return value;
}

const Launch: React.FC<LaunchProps> = () => {
  const { launchId } = useParams();
  const { data, loading, error } = useQuery<
    LaunchDetailsTypes.LaunchDetails,
    LaunchDetailsTypes.LaunchDetailsVariables
  >(GET_LAUNCH_DETAILS, {
    variables: { launchId },
  });

  if (loading) return <div className="wrapper">Loading...</div>;
  if (error) return <div className="wrapper">ERROR: {error.message}</div>;
  if (!data) return <div className="wrapper">Not found</div>;

  if (data.launch?.rocket && data.launch?.site) {
    const { launch } = data;
    return (
      <div className="wrapper">
        <LaunchTile key={launch.id} launch={launch} />
        <code>
          <pre>{JSON.stringify(launch, replacer, 2)}</pre>
        </code>
        <div className="button" onClick={() => window.history.back()}>
          Back
        </div>
      </div>
    );
  }
  return null;
};

export default Launch;
