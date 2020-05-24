import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Core = {
  __typename?: 'Core';
  core_serial?: Maybe<Scalars['String']>;
  flight: Scalars['Int'];
  block: Scalars['Int'];
  gridfins: Scalars['Boolean'];
  legs: Scalars['Boolean'];
  reused: Scalars['Boolean'];
  land_success: Scalars['Boolean'];
  landing_intent: Scalars['Boolean'];
  landing_type: Scalars['String'];
  landing_vehicle: Scalars['String'];
};

export type Crew = {
  __typename?: 'Crew';
  members?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Fairings = {
  __typename?: 'Fairings';
  id?: Maybe<Scalars['String']>;
};

export type FirstStage = {
  __typename?: 'FirstStage';
  cores: Array<Core>;
};

export type Launch = {
  __typename?: 'Launch';
  flight_number: Scalars['String'];
  mission_name: Scalars['String'];
  mission_id: Array<Scalars['String']>;
  launch_year: Scalars['String'];
  launch_date_unix: Scalars['String'];
  launch_date_utc: Scalars['String'];
  launch_date_local: Scalars['String'];
  is_tentative: Scalars['String'];
  tentative_max_precision: Scalars['String'];
  tbd: Scalars['String'];
  launch_window?: Maybe<Scalars['Int']>;
  rocket: Rocket;
  ships: Array<Scalars['String']>;
  telemetry: Telemetry;
  launch_site: LaunchSite;
  launch_success?: Maybe<Scalars['Boolean']>;
  links: Links;
  details?: Maybe<Scalars['String']>;
  upcoming: Scalars['Boolean'];
  static_fire_date_utc?: Maybe<Scalars['String']>;
  static_fire_date_unix?: Maybe<Scalars['Int']>;
  timeline?: Maybe<Timeline>;
  crew?: Maybe<Crew>;
};

export type LaunchConnection = {
  __typename?: 'LaunchConnection';
  cursor: Scalars['String'];
  hasMore: Scalars['Boolean'];
  launches: Array<Maybe<Launch>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id: Scalars['String'];
  site_name: Scalars['String'];
  site_name_long: Scalars['String'];
};

export type Links = {
  __typename?: 'Links';
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  article_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  youtube_id?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Scalars['String']>>;
};

export type Mission = {
  __typename?: 'Mission';
  name?: Maybe<Scalars['String']>;
  missionPatchSmall?: Maybe<Scalars['String']>;
  missionPatchLarge?: Maybe<Scalars['String']>;
  missionPatch?: Maybe<Scalars['String']>;
};


export type MissionMissionPatchArgs = {
  size?: Maybe<PatchSize>;
};

export type OrbitParams = {
  __typename?: 'OrbitParams';
  reference_system: Scalars['String'];
  regime: Scalars['String'];
  longitude?: Maybe<Scalars['String']>;
  semi_major_axis_km: Scalars['Int'];
  eccentricity: Scalars['Int'];
  periapsis_km: Scalars['Int'];
  apoapsis_km: Scalars['Int'];
  inclination_deg: Scalars['Int'];
  period_min: Scalars['Int'];
  lifespan_years?: Maybe<Scalars['Int']>;
  epoch: Scalars['String'];
  mean_motion: Scalars['Int'];
  raan: Scalars['Int'];
  arg_of_pericenter: Scalars['Int'];
  mean_anomaly: Scalars['Int'];
};

export enum PatchSize {
  Small = 'SMALL',
  Large = 'LARGE'
}

export type Payload = {
  __typename?: 'Payload';
  payload_id: Scalars['String'];
  norad_id: Array<Scalars['String']>;
  cap_serial: Scalars['String'];
  reused: Scalars['String'];
  customers: Array<Scalars['String']>;
  nationality: Scalars['String'];
  manufacturer: Scalars['String'];
  payload_type: Scalars['String'];
  payload_mass_kg: Scalars['Int'];
  payload_mass_lbs: Scalars['Int'];
  orbit: Scalars['String'];
  orbit_params: OrbitParams;
  mass_returned_kg: Scalars['Int'];
  mass_returned_lbs: Scalars['Int'];
  flight_time_sec: Scalars['Int'];
  cargo_manifest: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  launches: LaunchConnection;
  launch?: Maybe<Launch>;
};


export type QueryLaunchesArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryLaunchArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  rocket_id: Scalars['ID'];
  rocket_name: Scalars['String'];
  rocket_type: Scalars['String'];
  first_stage: FirstStage;
  second_stage: SecondStage;
};

export type SecondStage = {
  __typename?: 'SecondStage';
  block: Scalars['Int'];
  payloads: Array<Payload>;
  fairings?: Maybe<Fairings>;
};

export type Telemetry = {
  __typename?: 'Telemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type Timeline = {
  __typename?: 'Timeline';
  webcast_liftoff: Scalars['Int'];
  go_for_prop_loading: Scalars['Int'];
  rp1_loading: Scalars['Int'];
  stage1_lox_loading: Scalars['Int'];
  stage2_lox_loading: Scalars['Int'];
  engine_chill: Scalars['Int'];
  prelaunch_checks: Scalars['Int'];
  propellant_pressurization: Scalars['Int'];
  go_for_launch: Scalars['Int'];
  ignition: Scalars['Int'];
  liftoff: Scalars['Int'];
  maxq: Scalars['Int'];
  meco: Scalars['Int'];
  stage_sep: Scalars['Int'];
  second_stage_ignition: Scalars['Int'];
  first_stage_boostback_burn: Scalars['Int'];
  first_stage_entry_burn: Scalars['Int'];
  first_stage_landing: Scalars['Int'];
  seco: Scalars['Int'];
  dragon_separation: Scalars['Int'];
  dragon_solar_deploy: Scalars['Int'];
  dragon_bay_door_deploy: Scalars['Int'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
  trips: Array<Maybe<Launch>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  LaunchConnection: ResolverTypeWrapper<LaunchConnection>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Launch: ResolverTypeWrapper<Launch>;
  Rocket: ResolverTypeWrapper<Rocket>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  FirstStage: ResolverTypeWrapper<FirstStage>;
  Core: ResolverTypeWrapper<Core>;
  SecondStage: ResolverTypeWrapper<SecondStage>;
  Payload: ResolverTypeWrapper<Payload>;
  OrbitParams: ResolverTypeWrapper<OrbitParams>;
  Fairings: ResolverTypeWrapper<Fairings>;
  Telemetry: ResolverTypeWrapper<Telemetry>;
  LaunchSite: ResolverTypeWrapper<LaunchSite>;
  Links: ResolverTypeWrapper<Links>;
  Timeline: ResolverTypeWrapper<Timeline>;
  Crew: ResolverTypeWrapper<Crew>;
  User: ResolverTypeWrapper<User>;
  Mission: ResolverTypeWrapper<Mission>;
  PatchSize: PatchSize;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  String: Scalars['String'];
  LaunchConnection: LaunchConnection;
  Boolean: Scalars['Boolean'];
  Launch: Launch;
  Rocket: Rocket;
  ID: Scalars['ID'];
  FirstStage: FirstStage;
  Core: Core;
  SecondStage: SecondStage;
  Payload: Payload;
  OrbitParams: OrbitParams;
  Fairings: Fairings;
  Telemetry: Telemetry;
  LaunchSite: LaunchSite;
  Links: Links;
  Timeline: Timeline;
  Crew: Crew;
  User: User;
  Mission: Mission;
  PatchSize: PatchSize;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
};

export type CoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Core'] = ResolversParentTypes['Core']> = {
  core_serial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gridfins?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  legs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reused?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  land_success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  landing_intent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  landing_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  landing_vehicle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CrewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Crew'] = ResolversParentTypes['Crew']> = {
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type FairingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fairings'] = ResolversParentTypes['Fairings']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type FirstStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FirstStage'] = ResolversParentTypes['FirstStage']> = {
  cores?: Resolver<Array<ResolversTypes['Core']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LaunchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = {
  flight_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mission_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mission_id?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  launch_year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  launch_date_unix?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  launch_date_utc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  launch_date_local?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_tentative?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tentative_max_precision?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tbd?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  launch_window?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rocket?: Resolver<ResolversTypes['Rocket'], ParentType, ContextType>;
  ships?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  telemetry?: Resolver<ResolversTypes['Telemetry'], ParentType, ContextType>;
  launch_site?: Resolver<ResolversTypes['LaunchSite'], ParentType, ContextType>;
  launch_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['Links'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upcoming?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  static_fire_date_utc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  static_fire_date_unix?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['Crew']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LaunchConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchConnection'] = ResolversParentTypes['LaunchConnection']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  launches?: Resolver<Array<Maybe<ResolversTypes['Launch']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LaunchSiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchSite'] = ResolversParentTypes['LaunchSite']> = {
  site_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  site_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  site_name_long?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Links'] = ResolversParentTypes['Links']> = {
  mission_patch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mission_patch_small?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_campaign?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_launch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_recovery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presskit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  article_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flickr_images?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatchSmall?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatchLarge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MissionMissionPatchArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type OrbitParamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrbitParams'] = ResolversParentTypes['OrbitParams']> = {
  reference_system?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  semi_major_axis_km?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eccentricity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  periapsis_km?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  apoapsis_km?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inclination_deg?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period_min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lifespan_years?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  epoch?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mean_motion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  raan?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  arg_of_pericenter?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mean_anomaly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = {
  payload_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  norad_id?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  cap_serial?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reused?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customers?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload_mass_kg?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payload_mass_lbs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orbit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orbit_params?: Resolver<ResolversTypes['OrbitParams'], ParentType, ContextType>;
  mass_returned_kg?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mass_returned_lbs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  flight_time_sec?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cargo_manifest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  launches?: Resolver<ResolversTypes['LaunchConnection'], ParentType, ContextType, RequireFields<QueryLaunchesArgs, never>>;
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, never>>;
};

export type RocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = {
  rocket_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rocket_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rocket_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_stage?: Resolver<ResolversTypes['FirstStage'], ParentType, ContextType>;
  second_stage?: Resolver<ResolversTypes['SecondStage'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type SecondStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SecondStage'] = ResolversParentTypes['SecondStage']> = {
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payloads?: Resolver<Array<ResolversTypes['Payload']>, ParentType, ContextType>;
  fairings?: Resolver<Maybe<ResolversTypes['Fairings']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type TelemetryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Telemetry'] = ResolversParentTypes['Telemetry']> = {
  flight_club?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type TimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timeline'] = ResolversParentTypes['Timeline']> = {
  webcast_liftoff?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  go_for_prop_loading?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rp1_loading?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage1_lox_loading?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage2_lox_loading?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  engine_chill?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prelaunch_checks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  propellant_pressurization?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  go_for_launch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ignition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  liftoff?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxq?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meco?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage_sep?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  second_stage_ignition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  first_stage_boostback_burn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  first_stage_entry_burn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  first_stage_landing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seco?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dragon_separation?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dragon_solar_deploy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dragon_bay_door_deploy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trips?: Resolver<Array<Maybe<ResolversTypes['Launch']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Core?: CoreResolvers<ContextType>;
  Crew?: CrewResolvers<ContextType>;
  Fairings?: FairingsResolvers<ContextType>;
  FirstStage?: FirstStageResolvers<ContextType>;
  Launch?: LaunchResolvers<ContextType>;
  LaunchConnection?: LaunchConnectionResolvers<ContextType>;
  LaunchSite?: LaunchSiteResolvers<ContextType>;
  Links?: LinksResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  OrbitParams?: OrbitParamsResolvers<ContextType>;
  Payload?: PayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  SecondStage?: SecondStageResolvers<ContextType>;
  Telemetry?: TelemetryResolvers<ContextType>;
  Timeline?: TimelineResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
