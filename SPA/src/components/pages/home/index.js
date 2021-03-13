import React from 'react';
import Contato from '../contato';
import Inicio from '../inicio';
import Sobre from '../sobre';
import '../../style/style.css';

function Home() {
	return (
		<div className="App">
			<Inicio/>
            <Sobre />
            <Contato />
		</div>
	);
}

export default Home;
