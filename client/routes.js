import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './modules/App/components/App';
import { Provider } from 'react-redux';
import store from './store/store.js';


const ClientRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>  
                <Switch>  
                    <Route exact path='/' component={App} />                              
                </Switch>           
            </BrowserRouter>
        </Provider>
    )
}


export default ClientRoutes