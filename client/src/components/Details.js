import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Details extends React.Component{

	render(){
		var station = this.props.selectedStation;
		if( station != null && station.stationName != null ){
			var stationStatus = (station.status === "IN_SERVICE" ) ? "activeStatus" : "inactiveStatus";
			//var url = "https://maps.googleapis.com/maps/api/staticmap?center="+station.latitude+","+station.longitude+"&zoom=13&size=1000x1000&sensor=false&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222"
			var url = "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=1000x400&markers=size:mid%7Ccolor:red%7C"+station.latitude+","+station.longitude;
			console.log( "URL = " + url );
			return(
				<div className = "detailsCard">
				<div className="col-sm-7 bootcards-cards hidden-xs " id="listDetails">
					<div id="contactCard">
						<div className="panel panel-default">
							<div className="panel-heading clearfix" id={stationStatus}>
								<h3 className="panel-title pull-left">{station.stationName}</h3>
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
								<img src={url}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
		} else{
			return (<div/>);
		}
	}
}

export default Details;
