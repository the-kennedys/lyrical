import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: "http://localhost:4000/graphql"}),
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter >
          <App />
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
