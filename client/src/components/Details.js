import React from 'react';

class Details extends React.Component{

	render(){
		return(
			<div id="bootcards">
				<div className="navbar navbar-default navbar-fixed-top" role="navigation">
					<div className="container">
					<a className="navbar-brand no-break-out" title="Customers" href="/">Bay Area Bike Share</a>
					</div>
				</div>  
				
	  			<div className="container bootcards-container" id="main">
					<div className="row">
						<div className="col-sm-5 bootcards-list" id="list" data-title="Contacts">
							<div className="panel panel-default">				
								<div className="panel-body">
									<div className="search-form">
										<div className="row">
										    <div className="col-xs-9">
										      <div className="form-group">
											      <input type="text" className="form-control" placeholder="Search stations..."/>
											      <i className="fa fa-search"></i>
										      </div>
										    </div>
										</div>						    
									</div>					
								</div>
								<div className="list-group">
										<a className="list-group-item pjax"  href="">
											<h4 className="list-group-item-heading">Acey, Sofia</h4>
											<p className="list-group-item-text">Masung Corp.</p>
										</a>					
								</div>
							</div>
						</div>
					
						<div className="col-sm-7 bootcards-cards hidden-xs" id="listDetails">
							<div id="contactCard">	
								<div className="panel panel-default">
									<div className="panel-heading clearfix">
										<h3 className="panel-title pull-left">Contact Details</h3>
										<div className="btn-group pull-right visible-xs">
											<a className="btn btn-primary" href="/contacts/VBMJHwcLX3Vx/edit"
												data-toggle="modal"
												data-target="#editModal">
												<i className="fa fa-pencil"></i>
												<span>Edit</span>
											</a>
										</div>	
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
					</div>
	  			</div>
			</div> 
		);
	}
}

export default Details;