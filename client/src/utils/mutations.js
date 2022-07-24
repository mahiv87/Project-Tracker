import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				email
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($email: String!, $password: String!) {
		addUser(email: $email, password: $password) {
			token
			user {
				_id
				email
			}
		}
	}
`;

export const SAVE_PROJECT = gql`
	mutation saveProject($project: inputProject!) {
		saveProject(project: $project) {
			email
			projectCount
			savedProjects {
				projectId
				projectName
				projectType
				due
				rate
			}
		}
	}
`;

export const REMOVE_PROJECT = gql`
	mutation removeProject($projectId: Int!) {
		removeProject(projectId: $projectId) {
			email
			projectCount
			savedProjects {
				projectId
				projectName
				projectType
				due
				rate
			}
		}
	}
`;
