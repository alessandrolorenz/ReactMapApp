import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css'

import Dimensions from "react-dimensions";
import { Container, Content } from "./styles";
import Map from "../Map";

import store from '../../store/index'
import Repositories from '../components/Repositories';
import Location from '../components/Location';

const DimensionedMap = Dimensions()(Map);
 class App extends Component {
render(){
  return (
    <>
      <Provider store={store}>

        <Content>
          {/* <Repositories /> */}
          <Location />
        </Content>

          <Container>
            <DimensionedMap  />
          </Container>

      </Provider>
    </>
  );

}
};

export default App;