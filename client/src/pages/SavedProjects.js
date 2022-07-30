import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { removeProjectId, saveProjectIds, getSavedProjectIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT, REMOVE_PROJECT } from '../utils/mutations';
import { Table } from 'flowbite-react';
import ProjectComponent from '../components/ProjectComponent';
import dayjs from 'dayjs';

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

	const [currentTime, setCurrentTime] = useState(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));

	useEffect(() => {
		setInterval(() => setCurrentTime(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')), 1000);
	});

	return (
		<>
			<div className="w-screen h-24 bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500">
				<h1 className="text-center text-white font-bold text-2xl">Current Time &amp; Date:</h1>
				<p className="text-center text-white">{currentTime}</p>
			</div>
			<div className="container w-fit mx-auto mt-6">
				<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-800">
					<span class="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
						Add Project
					</span>
				</button>
			</div>
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
