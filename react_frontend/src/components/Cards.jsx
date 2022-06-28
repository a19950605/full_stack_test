import React, { useState } from 'react';
import Card from './Card';
import Grid from '@mui/material/Grid';

const Cards = (props) => {
	const [selected, setSelected] = useState();

	const setSelectedItem = (id) => {
		setSelected(id);
	};
	return (
		<Grid
			container
			spacing={2}
			className="row"
			Style={{
				Margin: 0,
				Width: '100%',
			}}
		>
			{props.data.map((card, id) => {
				console.log(id);
				return (
					<Card
						cardBody={card}
						selectedPlan={selected != '' ? selected : -1}
						index={id + 1}
						key={id + 1}
						setSelectedItem={setSelectedItem}
					/>
				);
			})}
		</Grid>
	);
};

export default Cards;
