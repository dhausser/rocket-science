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
    id: ID!
    cursor: String!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
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
