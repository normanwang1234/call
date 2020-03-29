import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoadingScreen from './screens/LoadingScreen';
import VideoScreen from './screens/VideoScreen';


const Main = () => (
    <Switch>
        <Route exact path="/call" component={LoadingScreen}/>
        <Route path="/call/video" component={VideoScreen} />
    </Switch>
)
    
export default Main;