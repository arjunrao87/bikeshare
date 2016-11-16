import React, { Component } from 'react';
import ServerCallAPI from '../helpers/ServerCallAPI';
import Summary from './Summary';
import Details from './Details';
import Header from './Header';
import '../css/BikeShare.css';

class BikeShare extends Component {

	constructor( props ){
		super(props);
		this.state = {stations:[], time:"", selectedStation:{}, startAPIQuery:null}
		this.startQueryAPI = this.startQueryAPI.bind( this );
	}

	startQueryAPI(){
		if( this.state.startAPIQuery == null ){
			setInterval( () => {
  				ServerCallAPI.retrieveBikeData((data) => {
					this.setState({stations:data.stationBeanList, time:data.executionTime});
					return data;
				});
			}, 5000);
			this.setState( {startAPIQuery:true});
		}
	}

	render() {
	  this.startQueryAPI();
	  return (
	    <div id="bootcards">
	    	<Header time={this.state.time}/>
	    	<div className="container bootcards-container" id="main">
		    	<div className="row">
		    		<Summary stations={this.state.stations} myFunc={this.handleChildFunc.bind(this)}/>
		    		<Details selectedStation={this.state.selectedStation}/>
		    	</div>
	    	</div>
	    </div>
	  );
	}

	handleChildFunc(val){
		this.setState({selectedStation:val});
	}
}

export default BikeShare;
