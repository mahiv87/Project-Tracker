import React from 'react';
import { Table } from 'flowbite-react';

export default function ProjectComponent(props) {
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
					<a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Remove
					</a>
				</Table.Cell>
			</Table.Row>
		</>
	);
}
