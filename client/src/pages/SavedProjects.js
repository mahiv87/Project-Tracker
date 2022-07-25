import React, { useState } from 'react';
import Auth from '../utils/auth';
import { removeProjectId, saveProjectIds, getSavedProjectIds } from '../utils/localStorage';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { SAVE_PROJECT, REMOVE_PROJECT } from '../utils/mutations';

const SavedProjects = () => {
	return (
		<>
			<h1>Hello World</h1>
		</>
	);
};

export default SavedProjects;
