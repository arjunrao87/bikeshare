import React from 'react';

class Details extends React.Component{

	render(){
		return(	
			<div className="col-sm-7 bootcards-cards hidden-xs" id="listDetails">
				<div id="contactCard">	
					<div className="panel panel-default">
						<div className="panel-heading clearfix">
							<h3 className="panel-title pull-left">Bike Station Details</h3>
						</div>
						<div className="list-group">
							<div className="list-group-item">
								<label>Name</label>
								<h4 className="list-group-item-heading">Acey, Sofia</h4>
							</div>
							<div className="list-group-item">
								<label>Company</label>
								<h4 className="list-group-item-heading">Masung Corp.</h4>
							</div>
							<div className="list-group-item">
								<label>Job Title</label>
								<h4 className="list-group-item-heading">Finance Director (ZCT)</h4>
							</div>
							<div className="list-group-item">
								<label>Department</label>
								<h4 className="list-group-item-heading">Finance</h4>
							</div>
							<a className="list-group-item" href="tel://+1 650-555-0055">
								<label>Phone</label>
								<h4 className="list-group-item-heading">+1 650-555-0055</h4>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Details;