import React from "react";
import { RouteComponentProps } from "react-router-dom";
import LaunchList from "../components/launch-list";

interface LaunchesProps extends RouteComponentProps {}

const Launches: React.FC<LaunchesProps> = () => {
  return <LaunchList />;
};

export default Launches;
