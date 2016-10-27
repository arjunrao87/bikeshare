import React, { Component } from 'react';
import ServerCallAPI from './ServerCallAPI';

class BikeShare extends Component {

	constructor( props ){
		super(props);
		this.queryAPI();
	}

	queryAPI(){
		console.log( "QueryAPI called..." );
		ServerCallAPI.retrieveBikeData((data) => {
			console.log( data );
		});
	}

	render() {
	  return (
	    <div>
	    	<pre>Hello World</pre>
	    </div>
	  );
	}
}

export default BikeShare;