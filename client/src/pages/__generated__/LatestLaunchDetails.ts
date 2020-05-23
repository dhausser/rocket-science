/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestLaunchDetails
// ====================================================

export interface LatestLaunchDetails_launch_rocket {
  __typename: "Rocket";
  rocket_name: string;
}

export interface LatestLaunchDetails_launch_launch_site {
  __typename: "LaunchSite";
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LatestLaunchDetails_launch {
  __typename: "Launch";
  flight_number: string;
  mission_name: string;
  rocket: LatestLaunchDetails_launch_rocket;
  launch_site: LatestLaunchDetails_launch_launch_site;
}

export interface LatestLaunchDetails {
  launch: LatestLaunchDetails_launch | null;
}
