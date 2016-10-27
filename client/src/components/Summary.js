import React from 'react';

class Summary extends React.Component{

	render(){
		return(
			<div>
				<pre>{this.props.stations.map(
		    			(val,index) => { return <li key={index} >{val.stationName} </li> } )}
		    	</pre>
			</div>
		);
	}
}

export default Summary;