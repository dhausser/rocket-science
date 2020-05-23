import React from "react";
import { gql } from "@apollo/client";
import { Link } from "react-router-dom";

import * as LaunchTileTypes from "../pages/__generated__/LaunchTile";

interface LaunchTileProps {
  launch: LaunchTileTypes.LaunchTile;
}

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    flight_number
    mission_name
    rocket {
      rocket_name
    }
    launch_site {
      site_id
      site_name
      site_name_long
    }
  }
`;

const LaunchTile: React.FC<LaunchTileProps> = ({ launch }) => {
  const { flight_number, mission_name, rocket, launch_site } = launch;
  return (
    <div className="box-card-container">
      <div className="box-card">
        <div className="box-card-link">
          <Link
            to={`/launch/${flight_number}`}
            style={{ textDecoration: "none" }}
          >
            {mission_name}
          </Link>
        </div>
        <div className="box-card-text">{rocket?.rocket_name}</div>
        <div className="box-card-tag">{launch_site.site_name_long}</div>
      </div>
    </div>
  );
};

export default LaunchTile;
