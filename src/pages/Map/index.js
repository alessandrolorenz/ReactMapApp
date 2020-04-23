import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import {makeState} from './mapActions'

import MapGL from "react-map-gl";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoiYWxlc3NhbmRyb2xvcmVueiIsImEiOiJjazk4eWRoeDgwcGt4M2RxeHFtMnh3N25xIn0.jadFmlNDC89JRV7v-hA_4w";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    return (
      <MapGL 
        width={width}
        height={height}
        {...this.props.teste.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.props.makeState({ viewport })}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    teste: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeState }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);

