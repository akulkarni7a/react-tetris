import React from "react";
import styled from "styled-components";

const StyledStartPage = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: #e3b505;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	font-size: 2.2em;
	font-family: "ZCOOL QingKe HuangYou", cursive;
	border: none;
	padding: 30px 100px;
	background-color: #fff;
	vertical-align: middle;
	text-decoration: none;
	transition: all 0.5s;
	color: #95190c;
	border-right: 1px solid #eee;
	border-radius: 2px;
	border-bottom: 1px solid #ccc;
	margin: 20px;
	position: relative;

	:focus {
		outline: 0;
	}

	:hover {
		margin-left: 25px;
		margin-top: 25px;
		&::after {
			right: -5px;
			top: 2px;
			width: 5px;
		}
		&::before {
			right: -3px;
			height: 5px;
		}
	}

	&::after {
		content: "";
		height: 100%;
		width: 10px;
		background-color: #eee;
		right: -10px;
		top: 5px;
		transform: skewY(45deg);
		position: absolute;
		transition: all 0.5s;
	}

	&::before {
		content: "";
		height: 10px;
		width: 100%;
		background-color: #ccc;
		right: -5px;
		bottom: -10px;
		transform: skewX(45deg);
		position: absolute;
		transition: all 0.5s;
	}
`;

const StartButton = styled(Button)``;

const BombModeButton = styled(Button)`
	background-color: ${props => (props.bombMode ? "#95190c" : "#fff")};
	color: ${props => (props.bombMode ? "#fff" : "#95190c")};
`;

const StartPage = ({ startClick, bombMode, toggleBombMode }) => {
	return (
		<StyledStartPage>
			<StartButton onClick={startClick}>Start</StartButton>
			<BombModeButton onClick={toggleBombMode} bombMode={bombMode}>
				Bomb Mode: {bombMode ? "ON" : "OFF"}
			</BombModeButton>
		</StyledStartPage>
	);
};
export default StartPage;
