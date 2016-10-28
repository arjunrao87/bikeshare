import React from 'react';

class Summary extends React.Component{

	render(){
		return(
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
					{this.props.stations.map( (station,index) => (
							<a key={index} className="list-group-item pjax"  href="">
								<h4 className="list-group-item-heading">{station.stationName}</h4>
								<p  className="list-group-item-text">{station.availableBikes} bikes available</p>
							</a>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Summary;
