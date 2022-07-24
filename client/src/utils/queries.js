import { gql } from '@apollo/client';

export const GET_ME = gql`
	query me {
		me {
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
