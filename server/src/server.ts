import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { LaunchAPI, LaunchAPITypes } from "./datasources/launch";

export type Context = {
  auth: string;
  env: string;
  dataSources: {
    launchAPI: LaunchAPITypes;
  };
};

const dataSources = () => ({
  launchAPI: new LaunchAPI(),
});

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }: { req: any }) => {
  // simple auth check on every request
  const auth = (req.headers && req.headers.authorization) || "";
  const env = process.env.NODE_ENV;

  return { auth, env };
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
export function createLocalServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
    introspection: true,
    playground: true,
  });
}
