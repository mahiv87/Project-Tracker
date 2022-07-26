import React, { useState } from 'react';
import Auth from '../utils/auth';
import { removeProjectId, saveProjectIds, getSavedProjectIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT, REMOVE_PROJECT } from '../utils/mutations';
import { Table } from 'flowbite-react';

const SavedProjects = () => {
	return (
		<>
			<header className="h-40  flex justify-center items-end bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500">
				<div className="container text-center">
					<h1 className="text-white text-2xl font-light pb-6">
						Current Time &amp; Date: <br /> <span id="time-display">00:00:00</span>
					</h1>
				</div>
			</header>

			<div className="container mx-auto mt-4">
				<Table>
					<Table.Head className="">
						<Table.HeadCell>Project Name</Table.HeadCell>
						<Table.HeadCell>Project Type</Table.HeadCell>
						<Table.HeadCell>Hourly Rate</Table.HeadCell>
						<Table.HeadCell>Due Date</Table.HeadCell>
						<Table.HeadCell>Days Remaining</Table.HeadCell>
						<Table.HeadCell>Potential Earnings</Table.HeadCell>
						<Table.HeadCell>
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Coffee shop
							</Table.Cell>
							<Table.Cell>Full Stack</Table.Cell>
							<Table.Cell>$34</Table.Cell>
							<Table.Cell>9/14/2022</Table.Cell>
							<Table.Cell>1</Table.Cell>
							<Table.Cell>$4080</Table.Cell>
							<Table.Cell>
								<a
									href="/tables"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Remove
								</a>
							</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Pokemon API
							</Table.Cell>
							<Table.Cell>Back End</Table.Cell>
							<Table.Cell>$20</Table.Cell>
							<Table.Cell>12/25/2022</Table.Cell>
							<Table.Cell>1</Table.Cell>
							<Table.Cell>$2000</Table.Cell>
							<Table.Cell>
								<a
									href="/tables"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Remove
								</a>
							</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Project 3
							</Table.Cell>
							<Table.Cell>Full Stack</Table.Cell>
							<Table.Cell>$0</Table.Cell>
							<Table.Cell>8/4/2022</Table.Cell>
							<Table.Cell>1</Table.Cell>
							<Table.Cell>$0</Table.Cell>
							<Table.Cell>
								<a
									href="/tables"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Remove
								</a>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		</>
	);
};

export default SavedProjects;
