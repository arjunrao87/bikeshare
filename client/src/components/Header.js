import React from 'react';

class Header extends React.Component{

	render(){
		return(
			<div>
				<div className="navbar navbar-default navbar-fixed-top" role="navigation">
					<div className="container">
					<a className="navbar-brand no-break-out" href="/">Bay Area Bike Share</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;