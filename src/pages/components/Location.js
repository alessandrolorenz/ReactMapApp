import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue, changeValue1, callLocation, changeValue1Add, changeValueAdd } from './locActions'
import { makeState } from '../Map/mapActions'
// import { changeValue1 } from './locActions1'

class Location extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.addLong = this.addLong.bind(this)
    this.subLong = this.subLong.bind(this)
    this.addLat = this.addLat.bind(this)
    this.subLat = this.subLat.bind(this)
  }

  handleChange(event) {
    this.props.viewport.latitude = parseFloat(this.props.value) || -27.601268;
    this.props.viewport.longitude = parseFloat(this.props.value1);
    this.props.callLocation(this.props.viewport);
  }

  addLong(v1) {
    const inc = parseFloat(v1) + this.props.step;
    this.props.viewport.longitude = parseFloat(inc) || -48.521822;
    this.props.changeValue1Add(inc)
    this.props.callLocation(this.props.viewport);
  }

  subLong(v1) {
    const inc = parseFloat(v1) - this.props.step;
    this.props.viewport.longitude = parseFloat(inc) || -48.521822;
    this.props.changeValue1Add(inc)
    this.props.callLocation(this.props.viewport);
  }

  addLat(v) {
    const inc = parseFloat(v) + this.props.step;
    this.props.viewport.latitude = parseFloat(inc) || -27.601268;
    this.props.changeValueAdd(inc)
    this.props.callLocation(this.props.viewport);
  }

  subLat(v) {
    const inc = parseFloat(v) - this.props.step;
    this.props.viewport.latitude = parseFloat(inc) || -27.601268;
    this.props.changeValueAdd(inc)
    this.props.callLocation(this.props.viewport);
  }

  render() {
    return (
      <>

        <div className="card" style={{ background: "#1950692f", padding: "10px"}} >
          <h1 style={{ textAlign: "center", marginBottom: '10px', fontSize: '40pt' }}>
            <strong> MapaBox App </strong><br />
          </h1>
          <div style={{ textAlign: "center",  marginBottom: '100px' }}>
            <p>Projeto criado utiliando em ReactJS com Redux. Este pequeno projeto mostra o mapa e permite navegar pelo controller ou digitando as coordenadas. O desafio foi fazer o projeto misturando alguns conhecimentos provindos dos cursos e tutoriais e criar algo novo. As referências foram: <br />
              <small>https://www.youtube.com/watch?v=u99tNt3TZf8 <br /></small>
              <small>https://blog.rocketseat.com.br/reactjs-mapbox-airbnb/<br /></small>
            </p>
          </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div className='col-md-6'>
                <h3 style={{ textAlign: "center" }} >LATITUDE</h3>
                <h5 style={{ textAlign: "center" }} >{this.props.value}</h5>
                <button onClick={() => this.addLat(this.props.value)}><i className="fa fa-arrow-up fa-2x"></i></button>
                <button onClick={() => this.subLat(this.props.value)}><i className="fa fa-arrow-down fa-2x"></i></button>
              </div>
              <div className='col-md-6'>
                <h3 style={{ textAlign: "center" }} >LONGITUDE</h3>
                <h5 style={{ textAlign: "center" }}  >{this.props.value1}</h5>
                <button onClick={() => this.addLong(this.props.value1)}><i className="fa fa-arrow-right fa-2x"></i></button>
                <button onClick={() => this.subLong(this.props.value1)}><i className="fa fa-arrow-left fa-2x"></i></button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4px" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "4px", textAlign: "center" }}>
                <div className='col-md-3' >
                  <div>

                    <label  >Latitude:  </label>
                    <input type="number" onChange={this.props.changeValue} value={parseFloat(this.props.value)} required />
                  </div>
                </div>
                <div className='col-md-6' >
                  <i className="fa fa-arrows fa-5x"></i>
                </div>
                <div className='col-md-3' >
                  <label  >Longitude:  </label>
                  <input type="number" onChange={this.props.changeValue1} value={parseFloat(this.props.value1)} required />

                </div>
              </div>
              <div className='col-md-12'>
                <button onClick={this.handleChange}><i className="fa fa-search-plus"></i></button>
              </div>
            </div>
          </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    value: state.value,
    value1: state.value1,
    viewport: state.viewport,
    step: state.step
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue, changeValue1, callLocation, makeState, changeValue1Add, changeValueAdd }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Location)








