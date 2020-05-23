/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchDetails
// ====================================================

export interface LaunchDetails_launch_rocket_first_stage_cores {
  __typename: "Core";
  core_serial: string | null;
}

export interface LaunchDetails_launch_rocket_first_stage {
  __typename: "FirstStage";
  cores: LaunchDetails_launch_rocket_first_stage_cores[];
}

export interface LaunchDetails_launch_rocket_second_stage_payloads {
  __typename: "Payload";
  payload_id: string;
}

export interface LaunchDetails_launch_rocket_second_stage {
  __typename: "SecondStage";
  payloads: LaunchDetails_launch_rocket_second_stage_payloads[];
}

export interface LaunchDetails_launch_rocket {
  __typename: "Rocket";
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: LaunchDetails_launch_rocket_first_stage;
  second_stage: LaunchDetails_launch_rocket_second_stage;
}

export interface LaunchDetails_launch_telemetry {
  __typename: "Telemetry";
  flight_club: string | null;
}

export interface LaunchDetails_launch_launch_site {
  __typename: "LaunchSite";
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LaunchDetails_launch_links {
  __typename: "Links";
  mission_patch: string | null;
  mission_patch_small: string | null;
}

export interface LaunchDetails_launch_timeline {
  __typename: "Timeline";
  webcast_liftoff: number;
}

export interface LaunchDetails_launch_crew {
  __typename: "Crew";
  members: (string | null)[] | null;
}

export interface LaunchDetails_launch {
  __typename: "Launch";
  flight_number: string;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: string;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: string;
  tentative_max_precision: string;
  tbd: string;
  launch_window: number | null;
  rocket: LaunchDetails_launch_rocket;
  ships: string[];
  telemetry: LaunchDetails_launch_telemetry;
  launch_site: LaunchDetails_launch_launch_site;
  launch_success: boolean | null;
  links: LaunchDetails_launch_links;
  details: string | null;
  upcoming: boolean;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  timeline: LaunchDetails_launch_timeline | null;
  crew: LaunchDetails_launch_crew | null;
}

export interface LaunchDetails {
  launch: LaunchDetails_launch | null;
}

export interface LaunchDetailsVariables {
  id: string;
}
