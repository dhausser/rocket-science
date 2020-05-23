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

/**
 * Simple wrapper around our list of launches that contains a cursor to the
 * last item in the list. Pass this cursor to the launches query to fetch results
 * after these.
 */
export type LaunchConnection = {
  __typename?: 'LaunchConnection';
  cursor: Scalars['String'];
  hasMore: Scalars['Boolean'];
  launches: Array<Maybe<Launch>>;
};

export type Launch = {
  __typename?: 'Launch';
  id: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  mission?: Maybe<Mission>;
  rocket?: Maybe<Rocket>;
  isBooked: Scalars['Boolean'];
};

export type Rocket = {
  __typename?: 'Rocket';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
  trips: Array<Maybe<Launch>>;
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

export enum PatchSize {
  Small = 'SMALL',
  Large = 'LARGE'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




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
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  LaunchConnection: ResolverTypeWrapper<LaunchConnection>;
  Launch: ResolverTypeWrapper<Launch>;
  Rocket: ResolverTypeWrapper<Rocket>;
  User: ResolverTypeWrapper<User>;
  Mission: ResolverTypeWrapper<Mission>;
  PatchSize: PatchSize;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  Int: Scalars['Int'];
  ID: Scalars['ID'];
  LaunchConnection: LaunchConnection;
  Launch: Launch;
  Rocket: Rocket;
  User: User;
  Mission: Mission;
  PatchSize: PatchSize;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  launches?: Resolver<ResolversTypes['LaunchConnection'], ParentType, ContextType, RequireFields<QueryLaunchesArgs, never>>;
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, never>>;
};

export type LaunchConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchConnection'] = ResolversParentTypes['LaunchConnection']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  launches?: Resolver<Array<Maybe<ResolversTypes['Launch']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LaunchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  isBooked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type RocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trips?: Resolver<Array<Maybe<ResolversTypes['Launch']>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatchSmall?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatchLarge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missionPatch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MissionMissionPatchArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  LaunchConnection?: LaunchConnectionResolvers<ContextType>;
  Launch?: LaunchResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
