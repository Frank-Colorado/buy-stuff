require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const session = require('express-session');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const main = async () => {
  const PORT = process.env.PORT || 3001;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  const app = express();

  app.use(
    cors({
      origin:
        process.env.NODE_ENV === 'production'
          ? process.env.PRODUCTION_ORIGIN
          : 'http://localhost:5173',

      credentials: true,
    })
  );

  const sess = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  };

  app.use(session(sess));

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  }

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

  await server.start();
  server.applyMiddleware({ app, cors: false });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
      console.log(
        `GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

main().catch((err) => {
  console.error(err);
});
