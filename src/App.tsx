import NameInput from "./components/NameInput";
import logo from "./logo.svg";
import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GetPosts } from "./components/GetPosts";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error: ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <NameInput />
        <ListOfUsers />
        <GetPosts />
      </div>
    </ApolloProvider>
  );
}

export default App;
