import React, { useState } from "react";

import StartPage from "../StartPage";
import Game from "../Game";

const Tetris = () => {
	const [runing, setRuning] = useState(false);
	const [bombMode, setBombMode] = useState(false);

	const startGame = (isBombMode) => {
		setBombMode(isBombMode);
		setRuning(true);
	};

	return runing ? (
		<Game stopClick={() => setRuning(false)} bombMode={bombMode} />
	) : (
		<StartPage startClick={startGame} />
	);
};

export default Tetris;
