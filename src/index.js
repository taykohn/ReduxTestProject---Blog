import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter: Interacts with the history library and decides what to render based on the URL
// Route: A react component that provides the configuration/customization to React Router. Decides what component to show based on url path.
// Switch: Takes in collection of different routes, looks at those routes and matches with first route that matches the url request. 
//      IMPORTANT: we need to list routes from most specific down, since the path match is fuzzy.
//      In other words, path="if a user goes to this route, I want you to show me ___ component"

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import redux-promise
import promise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// wire redux-promise to applyMiddleware call
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// component = "a react component that we can render inside any other react component"
// If we didn't use a Switch here, react would render both PostsNew and PostsIndex component to the DOM, because the path '/posts/new' contains /
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));