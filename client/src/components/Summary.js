import React from 'react';
import Select from 'react-select';

class Summary extends React.Component{

  constructor( props ){
    super(props);
    this.state={selectValue:{label:"",value:""}, tabStations:[]};
    this.updateValue = this.updateValue.bind( this );
  }

  updateValue (newValue) {
		console.log('State changed to ' + newValue.label);
    var newStations = [];
    this.props.stations.map(
      function(station,index){
        if( station.stationName === newValue.label ){
          newStations.push( station );
        }
      }
    );
		this.setState({selectValue:{label:newValue.label,value:newValue.value}, tabStations:newStations});
	}

  getStationNames( stations ){
    var localStations = [];
    stations.map( (station,index) => (localStations.push({value:station.stationName,label:station.stationName})));
    return localStations;
  }

  handleValueClick(option, event) {
    if (!this.props.onValueClick) return;
    this.props.onValueClick(option, event);
  }

  displayDetails( station, event ){
    console.log( "The station clicked was " + station.stationName )
  }

	render(){
    var stationsToRender = ( this.state.tabStations.length > 0 ) ? this.state.tabStations : this.props.stations;
		return(
			<div className="col-sm-5 bootcards-list" id="list" data-title="Contacts">
				<div className="panel panel-default">
					<div className="panel-body">
						<div className="search-form">
							<div className="row">
							    <div className="col-xs-9">
							      <div className="form-group">
												<Select
													name="form-field-name"
													value={this.state.selectValue.label}
													options={this.getStationNames(this.props.stations)}
													onChange={this.updateValue}
                          onValueClick={this.handleValueClick}
												/>
							      </div>
							    </div>
							</div>
						</div>
					</div>
					<div className="list-group">
  					{stationsToRender.map( (station,index) => (
  							<a key={index} onClick={this.displayDetails(station)} className="list-group-item pjax"  href="">
  								<h4 className="list-group-item-heading">{station.stationName}</h4>
  								<p className="list-group-item-text">{station.availableBikes} bikes available</p>
  							</a>
  						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Summary;
