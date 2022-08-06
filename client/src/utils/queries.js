import { gql } from '@apollo/client';

export const GET_ME = gql`
	query me {
		me {
			_id
			email
			projectCount
			savedProjects {
				_id
				projectName
				projectType
				due
				rate
			}
		}
	}
`;

export const GET_USER = gql`
	query user {
		_id
		email
		projectCount
		savedProjects {
			_id
			projectName
			projectType
			due
			rate
		}
	}
`;
