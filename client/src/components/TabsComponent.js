import * as React from 'react';
import {
	Box,
	createTheme,
	Tab,
	Tabs,
	ThemeProvider,
	Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const theme = createTheme({
	palette: {
		primary: {
			main: '#e98659'
		},
		secondary: {
			main: '#5bc7a5'
		}
	}
});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Login" {...a11yProps(0)} />
						<Tab label="Signup" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<LoginForm />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SignupForm />
				</TabPanel>
			</Box>
		</ThemeProvider>
	);
}
