import React, { Component } from 'react';
import ServerCallAPI from '../helpers/ServerCallAPI';

class BikeShare extends Component {

	constructor( props ){
		super(props);
		this.queryAPI();
		this.state = {data:[]};
	}

	queryAPI(){
		console.log( "QueryAPI called..." );
		ServerCallAPI.retrieveBikeData((data) => {
			this.setState({data:data});
			return data;
		});
	}

	render() {
	  return (
	    <div>
	    	<pre>{this.state.data.executionTime}</pre>
	    </div>
	  );
	}
}

export default BikeShare;