import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { prodEndpoint, devEndpoint } from "./config";

import "./index.css";
import Pages from "./pages";
import * as serviceWorker from "./serviceWorker";

const uri = process.env.NODE_ENV === "production" ? prodEndpoint : devEndpoint;

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
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
