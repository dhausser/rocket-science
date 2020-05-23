import React from 'react';
import { Link } from 'react-router-dom';

import * as LaunchTileTypes from './__generated__/LaunchTile';

interface LaunchTileProps {
  launch: LaunchTileTypes.LaunchTile;
}

const LaunchTile: React.FC<LaunchTileProps> = ({ launch }) => {
  const { id, mission, rocket, site } = launch;
  return (
    <div className="box-card-container">
      <div className="box-card">
        <div className="box-card-link">
          <Link to={`/launch/${id}`} style={{ textDecoration: 'none' }}>
            {mission?.name}
          </Link>
        </div>
        <div className="box-card-text">
          {rocket?.name}
        </div>
        <div className="box-card-tag">
          {site}
        </div>
      </div>
    </div>
  );
}

export default LaunchTile;

