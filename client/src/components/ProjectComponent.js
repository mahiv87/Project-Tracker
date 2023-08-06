import React from 'react';
import { Table } from 'flowbite-react';
import Auth from '../utils/auth';
import {
	removeProjectId,
	saveProjectIds,
	getSavedProjectIds
} from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT, REMOVE_PROJECT } from '../utils/mutations';

export default function ProjectComponent(props) {
	// console.log(props._id);
	const { loading, data } = useQuery(GET_ME);
	const [removeProject] = useMutation(REMOVE_PROJECT);

	const userData = data?.me || {};
	// console.log(userData);

	// if (!userData?.username) {
	// 	return <h4>You need to be logged in to see this page!</h4>;
	// }

	const handleRemoveProject = async (projectId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}
		// console.log(projectId);

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
			<Table.Row className="bg-white ">
				<Table.Cell className="whitespace-nowrap font-bold text-gray-900">
					{props.name}
				</Table.Cell>
				<Table.Cell className="font-bold">{props.type}</Table.Cell>
				<Table.Cell className="font-bold">${props.rate}</Table.Cell>
				<Table.Cell className="font-bold">{props.due}</Table.Cell>
				{/* <Table.Cell>1</Table.Cell>
				<Table.Cell>$4080</Table.Cell> */}
				<Table.Cell>
					<button
						onClick={() => handleRemoveProject(props._id)}
						className="relative inline-flex items-center justify-center px-5 py-1 mb-2 mr-2 overflow-hidden bg-secondary text-white font-bold rounded-full"
					>
						Remove
					</button>
				</Table.Cell>
			</Table.Row>
		</>
	);
}
