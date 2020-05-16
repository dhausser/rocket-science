import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link, RouteComponentProps } from "react-router-dom";

import { LAUNCH_TILE_DATA } from "./launches";
import * as LaunchDetailsTypes from "./__generated__/LaunchDetails";

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
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

const Launch: React.FC<LaunchProps> = () => {
  const { launchId } = useParams();
  const { data, loading, error } = useQuery<
    LaunchDetailsTypes.LaunchDetails,
    LaunchDetailsTypes.LaunchDetailsVariables
  >(GET_LAUNCH_DETAILS, {
    variables: { launchId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  if (data.launch?.rocket && data.launch?.site) {
    const { rocket, site } = data.launch;
    return (
      <>
        <div className="wrapper box" style={{ width: "100%" }}>
          <h3>
            {rocket && rocket.name} ({rocket && rocket.type})
          </h3>
          <h5>{site}</h5>
        </div>
        <Link to="/launches" className="button">
          Back
        </Link>
      </>
    );
  }
  return null;
};

export default Launch;
