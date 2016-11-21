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
		this.setState({isShowingModal: true})
	};

	handleClose() {this.setState({isShowingModal: false})};

	twitterModal(){
		var quote = encodeURIComponent("Use Bay Area Bikeshare! http://bit.ly/1VbaN8Z");
		var h=550;
		var w=700;
		var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
  	var wTop = window.screenTop ? window.screenTop : window.screenY;
		var left = wLeft + (window.innerWidth / 2) - (w / 2);
		var top = wTop + (window.innerHeight / 2) - (h / 2);
		var url = "https://twitter.com/home?status="+quote;
		var newwindow = window.open(url, "Tweet!", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
		if (window.focus) {newwindow.focus()}
			return false;
	}

	facebookModal(){
		var quote = encodeURIComponent("http://bit.ly/1VbaN8Z");
		var h=550;
		var w=700;
		var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
		var wTop = window.screenTop ? window.screenTop : window.screenY;
		var left = wLeft + (window.innerWidth / 2) - (w / 2);
		var top = wTop + (window.innerHeight / 2) - (h / 2);
		var title = "Use Bay Area Bikeshare!";
		var url = "https://www.facebook.com/sharer/sharer.php?u="+quote+"&t="+title;
		var newwindow = window.open(url, "Tweet!", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
		if (window.focus) {newwindow.focus()}
			return false;
	}

	openShare (url){
	var newwindow=window.open(url,'name','height=550,width=700');
	if (window.focus) {newwindow.focus()}
		return false;
	}

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
					 	<li><a><button onClick={this.facebookModal}><i className="fa fa-facebook"></i></button></a></li>
					 	<li><a><button onClick={this.twitterModal}><i className="fa fa-twitter"></i></button></a></li>
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
