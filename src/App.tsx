import { ApolloProvider } from "@apollo/client";
import { client } from "@/apolloClient.ts";
import { MainScreen } from "@/components/screens/MainScreen";

function App() {
  return (
    <ApolloProvider client={client}>
      <MainScreen />
    </ApolloProvider>
  );
}

export default App;
