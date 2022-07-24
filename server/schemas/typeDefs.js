const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		email: String
		password: String
		savedProjects: [Project]
	}

	type Project {
		projectId: Int
		name: String
		type: String
		due: String
		rate: Int
	}

	input inputProject {
		projectId: Int
		name: String
		type: String
		due: String
		rate: Int
	}

	type Auth {
		token: ID
		user: User
	}

	type Query {
		me: User
	}

	type Mutation {
		addUser(email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
