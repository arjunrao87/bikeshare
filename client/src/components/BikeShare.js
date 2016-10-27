import React, { Component } from 'react';
import ServerCallAPI from '../helpers/ServerCallAPI';

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
	    <div>
	    	<pre>{this.state.time}</pre>
	    	<pre>{this.state.stations.map(
	    			(val,index) => { return <li key={index} >{val.stationName} </li> } )}
	    	</pre>
	    </div>
	  );
	}
}

export default BikeShare;