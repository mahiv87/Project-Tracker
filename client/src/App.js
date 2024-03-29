import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavedProjects from './pages/SavedProjects';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import { useTheme } from './utils/ThemeContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
	uri: '/graphql'
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

function App() {
	const { theme } = useTheme();

	return (
		<ApolloProvider client={client}>
			<div className={`app`} data-theme={theme}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<SavedProjects />} />
						<Route
							path="*"
							element={<h1 className="display-2">Wrong page!</h1>}
						/>
					</Routes>
					{/* <Footer /> */}
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
