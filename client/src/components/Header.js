import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class Header extends React.Component{

	constructor( props ){
			super(props);
		  this.state={isShowingModal: false};
			this.handleClick = this.handleClick.bind( this );
			this.handleClose = this.handleClose.bind( this );
	}

	handleClick() {
		console.log( "this.cllick ");
		this.setState({isShowingModal: true})
	};

	handleClose() {this.setState({isShowingModal: false})};

	render(){
		var executionTime = this.props.time;

		return(
			<div>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header upfront" onClick={this.handleClick}>
						 <a className="navbar-brand">
						 	Bay Area Bike Share
					      {
					        this.state.isShowingModal &&
					        <ModalContainer onClose={this.handleClose}>
					          <ModalDialog onClose={this.handleClose}>
											<h2>About Bay Area Bike Share</h2>
											<p>Provide availability of bikes along the Bay Area biking route.</p>
											<br/>
											<h2>About the Creator</h2>
											<p>Website made by Arjun Rao. Visit www.arjunrao.co for more information</p>
					          </ModalDialog>
					        </ModalContainer>
					      }
						 </a>
					</div>
				  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
					 <ul className="nav navbar-nav navbar-right">
					 	<li><a href="/facebook"><i className="fa fa-facebook"></i></a></li>
					 	<li><a href="/twitter"><i className="fa fa-twitter"></i></a></li>
					  <li><a href="https://github.com/arjunrao87/bikeshare"><button title="Refreshed every 5 minutes">Last refreshed at {executionTime} PST</button></a></li>
					 </ul>
				  </div>
				 </div>
			 </nav>
			</div>
		);
	}
}

export default Header;
