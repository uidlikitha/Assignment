import ApolloClient from 'apollo-boost';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = '6a62862890702730fe8d0302485ec33919010881 ';

const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    Authorization: `bearer ${REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

export default client;
