import React from 'react';
import Select from 'react-select';

class Summary extends React.Component{

  constructor( props ){
    super(props);
    this.state={selectValue:{label:"",value:""}, tabStations:[], selectedIndex : null};
    this.updateValue = this.updateValue.bind( this );
    this.getCellState = this.getCellState.bind( this );
  }

  updateValue (newValue) {
    var newStations = [];
    this.props.detailsStation(null);
    if( newValue != null ){
      this.setState({selectedIndex:null});
      this.props.stations.map( ( station,index ) => {
          if( station.stationName === newValue.label ){
            newStations.push( station );
          }
          return newStations;
        }
      );
  		this.setState({selectValue:{label:newValue.label,value:newValue.value}, tabStations:newStations});
    }
	}

  getStationNames( stations ){
    var localStations = [];
    stations.map( (station,index) => (localStations.push({value:station.stationName,label:station.stationName, clearableValue: true})));
    return localStations;
  }

  handleValueClick(option, event) {
    if (!this.props.onValueClick) return;
    this.props.onValueClick(option, event);
  }

  onItemClick(item, index, e) {
    this.props.detailsStation(item);
    this.setState({selectedIndex: index});
  }

  getCellState( index ){
    return this.state.selectedIndex !== index ? "list-group-item pjax" : "list-group-item pjax active";
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
							      <div className="form-group arrangement">
												<Select
													name="form-field-name"
												  value={this.state.selectValue.label}
													options={this.getStationNames(this.props.stations)}
													onChange={this.updateValue}
                          onValueClick={this.handleValueClick}
                          resetValue=""
												/>
							      </div>
							    </div>
							</div>
						</div>
					</div>
          <div>
  					<div className="list-group">
    					{stationsToRender.map( (station,index) => (
    							<div key={index} onClick={this.onItemClick.bind(this, station, index)} className={this.getCellState(index)}>
    								<h4 className="list-group-item-heading">{station.stationName}</h4>
    								<p className="list-group-item-text">{station.availableBikes} bikes available</p>
    							</div>
    						))}
  					</div>
          </div>
				</div>
			</div>
		);
	}
}

export default Summary;
