import React, { Component } from 'react';
import ServerCallAPI from '../helpers/ServerCallAPI';
import Summary from './Summary';
import Details from './Details';
import Header from './Header';
import '../css/BikeShare.css';
 
class BikeShare extends Component {

	constructor( props ){
		super(props);
		this.state = {stations:[], time:""};
		this.queryAPI();
	}

	queryAPI(){
		console.log( "QueryAPI called..." );
		ServerCallAPI.retrieveBikeData((data) => {
			this.setState({stations:data.stationBeanList, time:data.executionTime});
			return data;
		});
	}

	render() {
	  return (
	    <div className="bikeShare">
	    	<Header time={this.state.time}/>
	    	<Summary stations={this.state.stations}/>
	    	<Details/>
	    </div>
	  );
	}
}

export default BikeShare;