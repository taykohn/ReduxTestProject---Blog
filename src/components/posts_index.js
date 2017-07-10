import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    // as soon as react knows this component is about to be rendered (user enters url path), automatically call action creator
  
    // TERM: "lifecycle method" - function on a react component class that is automatically called by react.
    // FUNCTION: "componentDidMount" - lifecycle method that will automatically be called by react when the component is rendered to the DOM.
    // fetches data after component shows up - doesn't matter before or after because fetching data is async operation.
    // React doesn't have a concept of NOT rendering a component until a piece of data is loaded/available. 
    // FUNCTION: "componentWillMount" - lifecycle method that will automatically be called before the component is rendered.
    // 'componentWillMount' changes the state before initial component render, which will cause a rerender after component is displayed. Multiple renders are generally unnecessary.
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        // Anchor Tags vs. Link tags:
        // Anchor tags do discrete navigation between different routes within app
        // Anchor tags are caught by the browser and the browser reloads all html and state goes away.
        // Link tags utilize navigation within react-router
        // Link tags are caught by router and router changes the content.
      
        // "to" property on Link tags (line 46) is the new route that will be navigated to when user clicks.
        // Link tags behave like anchor tags, but instead of specifying href prop, specify "to". 
				// When rendered, they look exactly like an anchor tag.
        // When using a 'to' -link, there is built-in prevention of the default behavior that using an anchor tag would have created:
      	// ie: re-rendering all the HTML, and losing state.
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        On This Page, You Can Add A Post.
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

// Use the 'connect' function to wire an action creator to component for usage with Redux.
// If you will not be passing anything to mapStateToProps, set the first arg to null.
// For the second arg, rather than passing in extra function (mapStateToDispatch), pass in the action creator itself: fetchPosts.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex); // same as { fetchPosts: fetchPosts }
