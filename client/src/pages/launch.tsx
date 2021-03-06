import React from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom';

import { LaunchDetails } from '../components/launch-details';

interface LaunchProps extends RouteComponentProps {
  id: string;
}

const Launch: React.FC<LaunchProps> = () => {
  const { id } = useParams<{ id: string }>();
  return <LaunchDetails id={id} />;
};

export { Launch };
