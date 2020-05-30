import 'dotenv/config';
import { createLocalServer } from './server';

const server = createLocalServer();

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
