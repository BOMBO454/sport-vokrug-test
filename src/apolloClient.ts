import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://beta.sosportom.ru/graphql/",
  }),
  cache: new InMemoryCache(),
});
