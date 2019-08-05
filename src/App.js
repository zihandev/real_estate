import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Homes from './Components/Homes';
import Story from './Components/Story';
import Footer from './Components/Footer';
import RoomContainer from './Components/RoomContainer';
import singleRoom from './Components/singleRoom';

class App extends Component {
  render() {
    return (
  <div>
     {/* <Route path="/" exact component={Sidebar} />   */}
      <Route path="/" exact component={Header} />  
      <Route path="/" exact component={Homes} />  
      <Route path="/" exact component={Story} />  
      <Route path="/" exact component={Footer} />  
      <Route path="/rooms" exact component={RoomContainer} />
      <Route path="/rooms/:slug" component={singleRoom} />
  </div>
   );
  } 
 }


export default App;
