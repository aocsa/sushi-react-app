import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarouselView from './Carousel';
import Home from './Home';
import CheckoutView from './checkout'
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
// import {dishes} from './dishes'
import {HashRouter, Switch, Route} from 'react-router-dom'
import App from './App';

const Index = () => (
   <Provider store={store}>
      <HashRouter>
      {/* <Carousel dishes={dishes} /> */}
         <Switch>
            <Route  exact path = "/" component={App}/>
            <Route  path = "/home" component={App}/>
            <Route  path = "/carousel" component={CarouselView}/>
            <Route  path = "/details" component={CheckoutView}/>
        </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
