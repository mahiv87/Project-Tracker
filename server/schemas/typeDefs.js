const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		email: String
		password: String
		projectCount: Int
		savedProjects: [Project]!
	}

	type Project {
		_id: ID
		projectName: String
		projectType: String
		due: String
		rate: String
	}

	input inputProject {
		_id: ID
		projectName: String
		projectType: String
		due: String
		rate: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		me: User
	}

	type Mutation {
		addUser(email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveProject(project: inputProject!): User
		removeProject(projectId: ID!): User
	}
`;

module.exports = typeDefs;
