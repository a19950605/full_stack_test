import './card.css';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

const Card = (props) => {
	const { id, title, general, specialist, physiotherapy, extraOne, extraTwo } =
		props.cardBody;
	const index = props.index;

	const selectedPlan = props.selectedPlan;
	const setSelectedItem = props.setSelectedItem;

	return (
		<Grid item key={id} xs={12} md={4} className="card-body">
			<div className="card">
				<div className="card-wrapper">
					{index == selectedPlan ? (
						<div className="selected-color">
							<DoneIcon className="success-icon" />
							selected
						</div>
					) : (
						''
					)}
					<div className="button-center">
						<h3>{title} </h3>
					</div>
					<div className="option-item">
						{general == 1 ? (
							<DoneIcon className="success-icon" />
						) : (
							<CloseIcon className="fail-icon" />
						)}
						<span>General</span>
					</div>
					<div className="option-item">
						{specialist ? (
							<DoneIcon className="success-icon" />
						) : (
							<CloseIcon className="fail-icon" />
						)}
						<span>Specialist</span>
					</div>
					<div className="option-item">
						{physiotherapy ? (
							<DoneIcon className="success-icon" />
						) : (
							<CloseIcon className="fail-icon" />
						)}
						<span>Physiotherapy</span>
					</div>
					<div className="option-item">
						{extraOne ? (
							<DoneIcon className="success-icon" />
						) : (
							<CloseIcon className="fail-icon" />
						)}{' '}
						<span> extraOne</span>
					</div>
					<div className="option-item">
						{extraTwo ? (
							<DoneIcon className="success-icon" />
						) : (
							<CloseIcon className="fail-icon" />
						)}
						<span>extraTwo</span>
					</div>
					<div className="button-center">
						<button
							onClick={() => {
								setSelectedItem(index);
							}}
						>
							Choose Plan
						</button>
					</div>
				</div>
			</div>
		</Grid>
	);
};

export default Card;
