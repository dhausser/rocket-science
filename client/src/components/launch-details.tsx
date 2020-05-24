import React from 'react';
import { useQuery, gql } from '@apollo/client';

import * as LaunchDetailsTypes from './__generated__/LaunchDetails';

interface LaunchDetailsProps {
  id: string;
}

interface LaunchDetails {
  launch: LaunchDetailsTypes.LaunchDetails;
}

export const LAUNCH_DATA = gql`
  fragment LaunchDetails on Launch {
    __typename
    flight_number
    mission_name
    mission_id
    launch_year
    launch_date_unix
    launch_date_utc
    launch_date_local
    is_tentative
    tentative_max_precision
    tbd
    launch_window
    rocket {
      rocket_id
      rocket_name
      rocket_type
      first_stage {
        cores {
          core_serial
        }
      }
      second_stage {
        payloads {
          payload_id
        }
      }
    }
    ships
    telemetry {
      flight_club
    }
    launch_site {
      site_id
      site_name
      site_name_long
    }
    launch_success
    links {
      mission_patch
      mission_patch_small
    }
    details
    upcoming
    static_fire_date_utc
    static_fire_date_unix
    timeline {
      webcast_liftoff
    }
    crew {
      members
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($id: ID!) {
    launch(id: $id) {
      ...LaunchDetails
    }
  }
  ${LAUNCH_DATA}
`;

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ id }) => {
  const { data, loading, error } = useQuery<LaunchDetails>(GET_LAUNCH_DETAILS, {
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
        <pre>{JSON.stringify(data.launch, null, 2)}</pre>
        <div className="button" onClick={() => window.history.back()}>
          Back
        </div>
      </>
    );
  }
  return null;
};

export default LaunchDetails;
