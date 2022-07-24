const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		email: String
		password: String
    projectCount: Int
		savedProjects: [Project]
	}

	type Project {
		projectId: Int
		projectName: String
		projectType: String
		due: String
		rate: Int
	}

	input inputProject {
		projectId: Int
		projectName: String
		projectType: String
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
    saveProject(project: inputProject!) User
    removeProject(projectId: Int!): User
	}
`;

module.exports = typeDefs;
