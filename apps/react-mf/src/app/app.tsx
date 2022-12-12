import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import { SetForm, SetList } from '@nx-react-graphql-nestjs/feature-sets';
import styles from './app.module.scss';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <div className={styles.appContainer}>
      <h1>My Lego Setss</h1>
      <SetForm />
      <SetList />
    </div>
  </ApolloProvider>
);

export default App;
