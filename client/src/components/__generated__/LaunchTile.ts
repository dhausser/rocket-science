/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LaunchTile
// ====================================================

export interface LaunchTile_rocket {
  __typename: "Rocket";
  rocket_name: string;
}

export interface LaunchTile_launch_site {
  __typename: "LaunchSite";
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LaunchTile {
  __typename: "Launch";
  flight_number: string;
  mission_name: string;
  rocket: LaunchTile_rocket;
  launch_site: LaunchTile_launch_site;
}
