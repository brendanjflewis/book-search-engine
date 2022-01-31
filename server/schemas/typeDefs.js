// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql `
    type Query {
        me: User
    }

    typer User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input SavedBook {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    types Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SavedBook): User
        removeBook(bookId: String!): User
    }

`;

module.exports = typeDefs;