/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LaunchTile
// ====================================================

export interface LaunchTile_rocket_first_stage_cores {
  __typename: "Core";
  core_serial: string | null;
}

export interface LaunchTile_rocket_first_stage {
  __typename: "FirstStage";
  cores: LaunchTile_rocket_first_stage_cores[];
}

export interface LaunchTile_rocket_second_stage_payloads {
  __typename: "Payload";
  payload_id: string;
}

export interface LaunchTile_rocket_second_stage {
  __typename: "SecondStage";
  payloads: LaunchTile_rocket_second_stage_payloads[];
}

export interface LaunchTile_rocket {
  __typename: "Rocket";
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: LaunchTile_rocket_first_stage;
  second_stage: LaunchTile_rocket_second_stage;
}

export interface LaunchTile_telemetry {
  __typename: "Telemetry";
  flight_club: string | null;
}

export interface LaunchTile_launch_site {
  __typename: "LaunchSite";
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LaunchTile_links {
  __typename: "Links";
  mission_patch: string;
  mission_patch_small: string;
}

export interface LaunchTile_timeline {
  __typename: "Timeline";
  webcast_liftoff: number;
}

export interface LaunchTile_crew {
  __typename: "Crew";
  members: (string | null)[] | null;
}

export interface LaunchTile {
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
  rocket: LaunchTile_rocket;
  ships: string[];
  telemetry: LaunchTile_telemetry;
  launch_site: LaunchTile_launch_site;
  launch_success: boolean;
  links: LaunchTile_links;
  details: string;
  upcoming: boolean;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: LaunchTile_timeline | null;
  crew: LaunchTile_crew | null;
}
