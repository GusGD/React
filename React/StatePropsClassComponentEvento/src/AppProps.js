import React from 'react';
const Equipe = (props) => {
	return(
		<div>
			<Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
			<Social />
			<hr />
		</div>
	)
}
const Sobre = (props) => {
	return(
		<div>
			<h2> Nome:  {props.nome} </h2>
			<h2> Cargo: {props.cargo}  </h2>
			<h2> Idade: {props.idade} anos</h2>
		</div>
	)
}
const Social =() =>{
	return(
		<div>
			<ul>
				<li>
					<a href="https://www.facebook.com/">Facebook</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/">Linkedin</a>
				</li>
				<li>
					<a href="https://www.twitter.com">Twiter</a>
				</li>
			</ul>
			
			
			
		</div>
	)
}

function App() {
	return (
		<div>
			<h1>Conheça nossa equipe:</h1>
			<Equipe nome="Gustavo" cargo="Programador" idade="22" />
			<Equipe nome="Gustavo" cargo="Gerente de Software" idade="22" />
		</div>
	);
}

export default App;
