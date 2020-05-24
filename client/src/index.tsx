import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { prodEndpoint, devEndpoint } from './config';

import './index.css';
import { Pages } from './pages';

const uri = process.env.NODE_ENV === 'production' ? prodEndpoint : devEndpoint;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
