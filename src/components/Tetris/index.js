import React, { useState } from "react";

import StartPage from "../StartPage";
import Game from "../Game";

const Tetris = () => {
	const [runing, setRuning] = useState(false);
	const [bombMode, setBombMode] = useState(false);

	const toggleBombMode = () => {
		setBombMode(prev => !prev);
	};

	return runing ? (
		<Game stopClick={() => setRuning(false)} bombMode={bombMode} />
	) : (
		<StartPage
			startClick={() => setRuning(true)}
			bombMode={bombMode}
			toggleBombMode={toggleBombMode}
		/>
	);
};

export default Tetris;
