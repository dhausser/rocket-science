import { ApolloServer } from 'apollo-server';
import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { LaunchAPI } from './datasources/launch';

interface Context {
  auth: string;
  env: string;
}

interface RestDataSources {
  launchAPI: LaunchAPI;
}

interface Request {
  req: {
    headers: {
      authorization: string;
    };
  };
}

const dataSources = (): DataSources<RestDataSources> => ({
  launchAPI: new LaunchAPI(),
});

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }: Request): Promise<Context> => {
  // simple auth check on every request
  const auth = (req.headers && req.headers.authorization) || '';
  const env = process.env.NODE_ENV;

  return { auth, env };
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
export function createLocalServer(): ApolloServer {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
    introspection: true,
    playground: true,
  });
}
