import {
  ApolloServer,
  ApolloServerPluginStopHapiServer,
} from "apollo-server-hapi";
import Hapi from "@hapi/hapi";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { DocumentNode } from "graphql";

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
  const app = Hapi.server({ port: 4002 });
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })],
  });

  await server.start();
  await server.applyMiddleware({ app });
  await app.start();
  console.log("GraphQL Server running at http://localhost:4002/graphql");
}

startApolloServer(typeDefs, resolvers);
console.log("Starting....");
