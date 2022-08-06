import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { removeProjectId, saveProjectIds, getSavedProjectIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT } from '../utils/mutations';
import { Table } from 'flowbite-react';
import ProjectComponent from '../components/ProjectComponent';
import dayjs from 'dayjs';

const SavedProjects = () => {
	// const projects = [
	// 	{
	// 		projectId: 1,
	// 		name: 'Coffee Shop',
	// 		type: 'Full Stack Web App',
	// 		rate: 34,
	// 		due: '9/9/99'
	// 	},
	// 	{
	// 		projectId: 2,
	// 		name: 'Coffee Shop',
	// 		type: 'Full Stack Web App',
	// 		rate: 34,
	// 		due: '9/9/99'
	// 	},
	// 	{
	// 		projectId: 3,
	// 		name: 'Coffee Shop',
	// 		type: 'Full Stack Web App',
	// 		rate: 34,
	// 		due: '9/9/99'
	// 	},
	// 	{
	// 		projectId: 4,
	// 		name: 'Coffee Shop',
	// 		type: 'Full Stack Web App',
	// 		rate: 34,
	// 		due: '9/9/99'
	// 	},
	// 	{
	// 		projectId: 5,
	// 		name: 'Coffee Shop',
	// 		type: 'Full Stack Web App',
	// 		rate: 34,
	// 		due: '9/9/99'
	// 	}
	// ];

	const [currentTime, setCurrentTime] = useState(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));

	useEffect(() => {
		setInterval(() => setCurrentTime(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')), 1000);
	});

	const { loading, data } = useQuery(GET_ME);

	const userData = data?.me || {};
	// console.log(userData);

	const [showModal, setShowModal] = useState(false);
	const [projectName, setProjectName] = useState('');
	const [projectType, setProjectType] = useState('');
	const [hourlyRate, setHourlyRate] = useState(0);
	const [dueDate, setDueDate] = useState('');

	const [saveProject] = useMutation(SAVE_PROJECT);

	const handleSaveProject = async (event) => {
		event.preventDefault();

		const projectData = {
			projectName: projectName,
			projectType: projectType,
			due: dueDate,
			rate: hourlyRate
		};

		try {
			const { data } = await saveProject({
				variables: {
					project: projectData
				}
			});
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === 'projectName') {
			setProjectName(value);
		}
		if (name === 'projectType') {
			setProjectType(value);
		}
		if (name === 'rate') {
			setHourlyRate(value);
		}
		if (name === 'due') {
			setDueDate(value);
		}
	};

	return (
		<>
			<div className="w-screen h-24 bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500">
				<h1 className="text-center text-white font-bold text-2xl">Current Time &amp; Date:</h1>
				<p className="text-center text-white">{currentTime}</p>
			</div>
			<div className="container w-fit mx-auto mt-6">
				<button
					onClick={() => setShowModal(true)}
					className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-800"
				>
					<span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
						Add Project
					</span>
				</button>
			</div>

			{/* <!-- modal --> */}
			<div
				className={
					showModal
						? 'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex backdrop-blur-lg'
						: 'hidden'
				}
			>
				<div className="relative p-4 w-full max-w-md h-full md:h-auto">
					{/* <!-- Modal content --> */}
					<div className="flex justify-end">
						<button className="" onClick={() => setShowModal(false)}>
							<i className="fa-solid fa-xmark text-neutral-500 hover:text-purple-900"></i>
						</button>
					</div>
					<div
						className="modal fade custom-modal"
						id="project-modal"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="project-modal-form"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-lg modal-dialog-centered">
							<div className="modal-content">
								<form onSubmit={handleSaveProject} id="project-form">
									<div className="modal-body">
										<div className="relative z-0 mb-6 w-full group">
											<label htmlFor="project-name-input">Project Name</label>
											<input
												name="projectName"
												type="text"
												id="project-name-input"
												className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder="Enter the project's name"
												onChange={handleChange}
												required
											/>
										</div>

										<div className="relative z-0 mb-6 w-full group">
											<label htmlFor="project-type-input">Project Type</label>
											<select
												className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												id="project-type-input"
												name="projectType"
												onChange={handleChange}
											>
												<option value="Pick one..." disabled>
													Pick one...
												</option>
												<option value="Web Application (Front End)">
													Web Application (Front End)
												</option>
												<option value="Web Application (Back End)">
													Web Application (Back End)
												</option>
												<option value="Web Application (Full Stack)">
													Web Application (Full Stack)
												</option>
												<option value="Mobile Application">Mobile Application</option>
											</select>
										</div>

										<div className="relative z-0 mb-6 w-full group">
											<label htmlFor="hourly-rate-input">Hourly Rate ($)</label>
											<input
												name="rate"
												type="number"
												id="hourly-rate-input"
												className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder="$"
												onChange={handleChange}
												min="0"
												required
											/>
										</div>

										<div className="relative z-0 mb-6 w-full group">
											<label htmlFor="due-date-input">Due Date</label>
											<input
												name="due"
												datepicker=""
												datepicker-autohide=""
												type="text"
												// min="1"
												id="due-date-input"
												className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
												placeholder="When is the project due?"
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="modal-footer">
										<button
											// onClick={() => handleSaveProject()}
											type="submit"
											className="flex mx-auto p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
										>
											<span className="justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
												Submit
											</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Modal */}
			<div className="container w-fit mx-auto mt-2">
				{userData.savedProjects.length < 1 ? (
					<h1 className="text-2xl italic opacity-70 font-thin">You have no projects</h1>
				) : (
					<div></div>
				)}
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
						{userData.savedProjects.map((project) => {
							return (
								<ProjectComponent
									_id={project._id}
									name={project.projectName}
									type={project.projectType}
									rate={project.rate}
									due={project.due}
								/>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</>
	);
};

export default SavedProjects;
