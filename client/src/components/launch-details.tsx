import React from "react";
import { gql } from "@apollo/client";

import * as LaunchDetailsTypes from "../pages/__generated__/LaunchDetails";

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

const LaunchDetails: React.FC<LaunchDetailsTypes.LaunchDetails> = ({
  launch,
}) => {
  return <pre>{JSON.stringify(launch, null, 2)}</pre>;
};

export default LaunchDetails;
