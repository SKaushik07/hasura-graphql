import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'qrZinZA7lgaf5AmonyL1ENPtMQOzBN8QELGNAv4TKZQ='
  }
});

export default client;
