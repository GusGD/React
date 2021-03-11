import React, {Component} from 'react';

class Feed extends Component {
    render(){
        return(
            <div>
                <div key={this.props.key}>
                    <h3>{this.props.username}</h3>
                    <h4>{this.props.curtidas > 1 
                    ? this.props.curtidas + ' curtidas' : 
                    this.props.curtidas + ' curtida'} / 
                    {this.props.comentarios > 1 
                    ? this.props.comentarios + ' comentarios' : 
                    this.props.comentarios + ' comentario'}
                    </h4> 
                </div>
                <hr />
            </div>
        );
    }
}

export default Feed;