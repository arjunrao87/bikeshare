import React from 'react';

class Details extends React.Component{

	render(){
		var station = {"id":2,"stationName":"San Jose Diridon Caltrain Station","availableDocks":15,"totalDocks":27,"latitude":37.329732,"longitude":-121.901782,"statusValue":"In Service","statusKey":1,"status":"IN_SERVICE","availableBikes":12,"stAddress1":"San Jose Diridon Caltrain Station","stAddress2":"","city":"San Jose","postalCode":"","location":"Crandall Street","altitude":"","testStation":false,"lastCommunicationTime":"2016-10-27 18:09:53","landMark":"San Jose","is_renting":true};
		var isAvailable = (station.status === "IN_SERVICE" ? "Active station" : "Inactive station" );
		return(
			<div className="col-sm-7 bootcards-cards hidden-xs" id="listDetails">
				<div id="contactCard">
					<div className="panel panel-default">
						<div className="panel-heading clearfix">
							<h3 className="panel-title pull-left">{station.stationName} ( {isAvailable} )</h3>
						</div>
						<div className="list-group">
							<div className="list-group-item">
								<label>Location</label>
							<h4 className="list-group-item-heading">{station.stAddress1}, {station.location}, {station.city}</h4>
							</div>
							<div className="list-group-item">
								<label>Total # of bikes</label>
							<h4 className="list-group-item-heading">{station.totalDocks}</h4>
							</div>
							<div className="list-group-item">
								<label>Last update time</label>
							<h4 className="list-group-item-heading">{station.lastCommunicationTime} PST</h4>
							</div>
							<div className="list-group-item">
								<label>Map</label>
							<h4 className="list-group-item-heading">{station.latitude}, {station.longitude}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Details;
