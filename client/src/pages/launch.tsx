import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, RouteComponentProps } from "react-router-dom";

import LaunchDetails, { LAUNCH_DATA } from "../components/launch-details";
import * as LaunchDetailsTypes from "./__generated__/LaunchDetails";

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($id: ID!) {
    launch(id: $id) {
      ...LaunchDetails
    }
  }
  ${LAUNCH_DATA}
`;

interface LaunchProps extends RouteComponentProps {
  id: string;
}

const Launch: React.FC<LaunchProps> = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<
    LaunchDetailsTypes.LaunchDetails,
    LaunchDetailsTypes.LaunchDetailsVariables
  >(GET_LAUNCH_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  if (data.launch?.rocket && data.launch?.launch_site.site_name_long) {
    return (
      <>
        <header>{data.launch.mission_name}</header>
        <p>{data.launch.launch_site.site_name_long}</p>
        <p>{data.launch.details}</p>
        <LaunchDetails launch={data.launch} />
        <div className="button" onClick={() => window.history.back()}>
          Back
        </div>
      </>
    );
  }
  return null;
};

export default Launch;
