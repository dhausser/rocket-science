/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestLaunchDetails
// ====================================================

export interface LatestLaunchDetails_launch_rocket {
  __typename: "Rocket";
  type: string | null;
  id: string;
  name: string | null;
}

export interface LatestLaunchDetails_launch_mission {
  __typename: "Mission";
  name: string | null;
  missionPatch: string | null;
}

export interface LatestLaunchDetails_launch {
  __typename: "Launch";
  site: string | null;
  rocket: LatestLaunchDetails_launch_rocket | null;
  id: string;
  mission: LatestLaunchDetails_launch_mission | null;
}

export interface LatestLaunchDetails {
  launch: LatestLaunchDetails_launch | null;
}
