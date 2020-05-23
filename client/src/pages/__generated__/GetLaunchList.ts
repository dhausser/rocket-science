/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunchList
// ====================================================

export interface GetLaunchList_launches_launches_rocket {
  __typename: "Rocket";
  rocket_name: string;
}

export interface GetLaunchList_launches_launches_launch_site {
  __typename: "LaunchSite";
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface GetLaunchList_launches_launches {
  __typename: "Launch";
  flight_number: string;
  mission_name: string;
  rocket: GetLaunchList_launches_launches_rocket;
  launch_site: GetLaunchList_launches_launches_launch_site;
}

export interface GetLaunchList_launches {
  __typename: "LaunchConnection";
  cursor: string;
  hasMore: boolean;
  launches: (GetLaunchList_launches_launches | null)[];
}

export interface GetLaunchList {
  launches: GetLaunchList_launches;
}

export interface GetLaunchListVariables {
  after?: string | null;
}
