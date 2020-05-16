import React from 'react';
import { Link } from 'react-router-dom';

import * as LaunchTileTypes from './__generated__/LaunchTile';

interface LaunchTileProps {
  launch: LaunchTileTypes.LaunchTile;
}

const LaunchTile: React.FC<LaunchTileProps> = ({ launch }) => {
  const { id, mission, rocket } = launch;
  return (
    <div className="box-link">
      <Link to={`/launch/${id}`} style={{ textDecoration: 'none' }}>
        <h3>{mission?.name}</h3>
        <h5>{rocket?.name}</h5>
      </Link>
    </div>
  );
}

export default LaunchTile;

