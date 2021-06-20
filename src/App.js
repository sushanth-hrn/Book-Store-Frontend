import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Learning GraphQL</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
