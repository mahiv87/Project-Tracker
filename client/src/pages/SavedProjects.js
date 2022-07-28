import React, { useState } from 'react';
import Auth from '../utils/auth';
import { removeProjectId, saveProjectIds, getSavedProjectIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT, REMOVE_PROJECT } from '../utils/mutations';
import { Table } from 'flowbite-react';
import ProjectComponent from '../components/ProjectComponent';

const SavedProjects = () => {
	const projects = [
		{
			name: 'Coffee Shop',
			type: 'Full Stack Web App',
			rate: 34,
			due: '9/9/99'
		},
		{
			name: 'Coffee Shop',
			type: 'Full Stack Web App',
			rate: 34,
			due: '9/9/99'
		},
		{
			name: 'Coffee Shop',
			type: 'Full Stack Web App',
			rate: 34,
			due: '9/9/99'
		},
		{
			name: 'Coffee Shop',
			type: 'Full Stack Web App',
			rate: 34,
			due: '9/9/99'
		},
		{
			name: 'Coffee Shop',
			type: 'Full Stack Web App',
			rate: 34,
			due: '9/9/99'
		}
	];
	return (
		<>
			<div className="container mx-auto mt-6">
				<Table>
					<Table.Head className="h-20 bg-gradient-to-br from-purple-600 to-blue-500 font-thasadith">
						<Table.HeadCell className="text-white text-lg">Project Name</Table.HeadCell>
						<Table.HeadCell className="text-white text-lg">Project Type</Table.HeadCell>
						<Table.HeadCell className="text-white text-lg">Hourly Rate</Table.HeadCell>
						<Table.HeadCell className="text-white text-lg">Due Date</Table.HeadCell>
						{/* <Table.HeadCell className="text-white text-lg">Days Remaining</Table.HeadCell>
						<Table.HeadCell className="text-white text-lg">Potential Earnings</Table.HeadCell> */}
						<Table.HeadCell>
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{projects &&
							projects.map((project) => (
								<ProjectComponent
									name={project.name}
									type={project.type}
									rate={project.rate}
									due={project.due}
								/>
							))}
					</Table.Body>
				</Table>
			</div>
		</>
	);
};

export default SavedProjects;
