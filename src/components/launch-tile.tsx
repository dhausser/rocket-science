import React from 'react';
import { css } from '@emotion/core';
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
      <Link to={`/launch/${id}`}>
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
  text-decoration: none;

  a {
    color: white;
  }

  :hover {
    background-color: var(--ifm-color-primary);
    color: white;
  }
`;