import express from 'express';
import Schema from './data/schema';
import Mocks from './data/mocks';
import Resolvers from './data/resolvers';
import bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
const GRAPHQL_PORT = 8080;

const graphQLServer = express();
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: false,
  printErrors: true,
});
graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
