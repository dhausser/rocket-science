import { createLocalServer } from './server';

const server = createLocalServer();

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }: { url: string }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀  Server ready at ${url}`);
  });
