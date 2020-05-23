import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    launches(pageSize: Int, after: String): LaunchConnection!
    launch(id: ID): Launch
  }

  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type Launch {
    flight_number: String!
    mission_name: String!
    mission_id: [String!]!
    launch_year: String!
    launch_date_unix: String!
    launch_date_utc: String!
    launch_date_local: String!
    is_tentative: String!
    tentative_max_precision: String!
    tbd: String!
    launch_window: Int
    rocket: Rocket!
    ships: [String!]!
    telemetry: Telemetry!
    launch_site: LaunchSite!
    launch_success: Boolean
    links: Links!
    details: String
    upcoming: Boolean!
    static_fire_date_utc: String
    static_fire_date_unix: Int
    timeline: Timeline
    crew: Crew
  }

  type Rocket {
    rocket_id: ID!
    rocket_name: String!
    rocket_type: String!
    first_stage: FirstStage!
    second_stage: SecondStage!
  }

  type FirstStage {
    cores: [Core!]!
  }

  type Core {
    core_serial: String
    flight: Int!
    block: Int!
    gridfins: Boolean!
    legs: Boolean!
    reused: Boolean!
    land_success: Boolean!
    landing_intent: Boolean!
    landing_type: String!
    landing_vehicle: String!
  }

  type SecondStage {
    block: Int!
    payloads: [Payload!]!
    fairings: Fairings
  }

  type Payload {
    payload_id: String!
    norad_id: [String!]!
    cap_serial: String!
    reused: String!
    customers: [String!]!
    nationality: String!
    manufacturer: String!
    payload_type: String!
    payload_mass_kg: Int!
    payload_mass_lbs: Int!
    orbit: String!
    orbit_params: OrbitParams!
    mass_returned_kg: Int!
    mass_returned_lbs: Int!
    flight_time_sec: Int!
    cargo_manifest: String!
  }

  type OrbitParams {
    reference_system: String!
    regime: String!
    longitude: String
    semi_major_axis_km: Int!
    eccentricity: Int!
    periapsis_km: Int!
    apoapsis_km: Int!
    inclination_deg: Int!
    period_min: Int!
    lifespan_years: Int
    epoch: String!
    mean_motion: Int!
    raan: Int!
    arg_of_pericenter: Int!
    mean_anomaly: Int!
  }

  type Fairings {
    id: String
  }

  type Telemetry {
    flight_club: String
  }

  type LaunchSite {
    site_id: String!
    site_name: String!
    site_name_long: String!
  }

  type Links {
    mission_patch: String
    mission_patch_small: String
    reddit_campaign: String
    reddit_launch: String
    reddit_recovery: String
    reddit_media: String
    presskit: String
    article_link: String
    wikipedia: String
    video_link: String
    youtube_id: String
    flickr_images: [String!]
  }

  type Timeline {
    webcast_liftoff: Int!
    go_for_prop_loading: Int!
    rp1_loading: Int!
    stage1_lox_loading: Int!
    stage2_lox_loading: Int!
    engine_chill: Int!
    prelaunch_checks: Int!
    propellant_pressurization: Int!
    go_for_launch: Int!
    ignition: Int!
    liftoff: Int!
    maxq: Int!
    meco: Int!
    stage_sep: Int!
    second_stage_ignition: Int!
    first_stage_boostback_burn: Int!
    first_stage_entry_burn: Int!
    first_stage_landing: Int!
    seco: Int!
    dragon_separation: Int!
    dragon_solar_deploy: Int!
    dragon_bay_door_deploy: Int!
  }

  type Crew {
    members: [String]
  }

  type User {
    id: ID!
    email: String!
    profileImage: String
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatchSmall: String
    missionPatchLarge: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;
