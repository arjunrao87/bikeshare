import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Details extends React.Component{

	render(){
		var station = this.props.selectedStation;
		if( station != null && station.stationName != null ){
			var stationStatus = (station.status === "IN_SERVICE" ) ? "activeStatus" : "inactiveStatus";
			return(
				<StickyContainer>
				<div className="col-sm-7 bootcards-cards hidden-xs" id="listDetails">
					<Sticky>
					<div id="contactCard" className = "follow-">
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
							</div>
						</div>
					</div>
				</Sticky>
				</div>
			</StickyContainer>
			);
		} else{
			return (<div/>);
		}
	}
}

export default Details;
