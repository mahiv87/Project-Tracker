import React from 'react';
import { Table } from 'flowbite-react';
import Auth from '../utils/auth';
import { removeProjectId, saveProjectIds, getSavedProjectIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT, REMOVE_PROJECT } from '../utils/mutations';

export default function ProjectComponent(props) {
	const { loading, data } = useQuery(GET_ME);
	const [removeProject] = useMutation(REMOVE_PROJECT);

	const userData = data?.me || {};
	// console.log(userData);

	if (!userData?.username) {
		return <h4>You need to be logged in to see this page!</h4>;
	}

	const handleRemoveProject = async (projectId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			await removeProject({
				variables: { projectId },
				update(cache, { data: { removeProject } }) {
					try {
						cache.writeQuery({
							query: GET_ME,
							data: { me: removeProject }
						});
					} catch (err) {
						console.error(err);
					}
				}
			});

			// upon success, remove book's id from localStorage
			removeProjectId(projectId);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
				<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
					{props.name}
				</Table.Cell>
				<Table.Cell>{props.type}</Table.Cell>
				<Table.Cell>${props.rate}</Table.Cell>
				<Table.Cell>{props.due}</Table.Cell>
				{/* <Table.Cell>1</Table.Cell>
				<Table.Cell>$4080</Table.Cell> */}
				<Table.Cell>
					<button
						onClick={handleRemoveProject}
						className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-800"
					>
						<span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
							Remove
						</span>
					</button>
				</Table.Cell>
			</Table.Row>
		</>
	);
}
