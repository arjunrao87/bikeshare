import React from 'react';

class Header extends React.Component{

	render(){
		var executionTime = this.props.time;
		return(
			<div>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						 <a href="/about" className="navbar-brand">Bay Area Bike Share</a>
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
