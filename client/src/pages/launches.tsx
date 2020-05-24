import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LaunchList from '../components/launch-list';

type LaunchesProps = RouteComponentProps;

const Launches: React.FC<LaunchesProps> = () => {
  return <LaunchList />;
};

export default Launches;
