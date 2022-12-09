import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>My Lego Sets</h1>
  </ApolloProvider>
);

export default App;
