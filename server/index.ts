import { ApolloServer } from 'apollo-server';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

import LaunchAPI from './datasources/launch';

// const dataSources = () => ({
//   launchAPI: new LaunchAPI(),
// });

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }: { req: any }) => {
  // simple auth check on every request
  const auth = (req.headers && req.headers.authorization) || '';
  return { auth };
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // dataSources,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
  }),
  context,
});

// The `listen` method launches a web server.
server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
