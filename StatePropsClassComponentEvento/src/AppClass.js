import React, { Component } from 'react';


class Equipe extends Component{
	render(){
		return(
			<div>
				<Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
				<Social />
				<hr />
			</div>
		)
	}
}

class Sobre extends Component{
	render(){
		return(
			<div>
				<h1>Nome: {this.props.nome}</h1>
				<h1>Cargo:{this.props.cargo}</h1>
				<h1>Idade:{this.props.idade}</h1>
			</div>
		)
	}
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
			<Equipe nome="Oliveira" cargo="estagio" idade="22" />
		</div>
	);
}

export default App;