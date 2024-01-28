import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Redux store
import { Provider } from 'react-redux';
import store from './store';

// Apollo client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//styling
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles';

// Apollo client setup
const isDev = import.meta.env.DEV;

const graphqlUri = isDev ? 'http://localhost:3001/graphql' : '/graphql';

const httpLink = createHttpLink({
  uri: graphqlUri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clothingByCategory: {
            // Cache clothing by category
            keyArgs: ['category'],
            merge(existing = { clothing: [], count: 0 }, incoming) {
              return {
                clothing: [...existing.clothing, ...incoming.clothing],
                count: incoming.count,
              };
            },
          },
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);
