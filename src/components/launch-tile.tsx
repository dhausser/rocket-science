import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import * as LaunchTileTypes from './__generated__/LaunchTile';

interface LaunchTileProps {
  launch: LaunchTileTypes.LaunchTile;
}

const LaunchTile: React.FC<LaunchTileProps> = ({ launch }) => {
  const { id, mission, rocket } = launch;
  return (
    <Box>
      <Link to={`/launch/${id}`} style={{ textDecoration: 'none' }}>
        <h3>{mission?.name}</h3>
        <h5>{rocket?.name}</h5>
      </Link>
    </Box>
  );
}

export default LaunchTile;


const Box = styled.div`
  border: 1px solid var(--ifm-color-primary);
  border-radius: var(--ifm-border-radius);
  color: var(--ifm-color-primary);
  margin-bottom: 40px;
  transition: color var(--ifm-button-transition-duration)
      cubic-bezier(0.08, 0.52, 0.52, 1),
    background-color var(--ifm-button-transition-duration)
      cubic-bezier(0.08, 0.52, 0.52, 1),
    border-color var(--ifm-button-transition-duration)
      cubic-bezier(0.08, 0.52, 0.52, 1);

  a {
    color: white;
  }

  :hover {
    background-color: var(--ifm-color-primary);
    color: white;
  }
`;