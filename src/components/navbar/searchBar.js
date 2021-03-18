import React, { Component } from "react";
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import { searchAction } from '../../actions/searchAction';
// import history from '../../history';

import { withRouter } from "react-router";

import Search from './search';


class SearchBar extends React.Component {

    state = {
        searchTerm: "",
    }

    // const [searchTerm, setSearchTerm] = useState("")
    // const [searchTerms, setSearchTerms] = useState([])
    // const [searchResults, setSearchResults] = useState([])
    // const [sorryMessage, setSorryMessage] = useState("")

    handleOnChange = (e) => {
        let searchTerm = {...this.state}
        let currentState = searchTerm
        //let {name, value} = e.target
        currentState["searchTerm"] = e.target.value
        //debugger
        this.setState({
            searchTerm: currentState.searchTerm
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatchSearch(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
        // this.props.history.push('/search')
    }

    // handleOnSubmit = (e) => {
    //     e.preventDefault()
    //     const filteredPosts = []
    //     if (searchTerms.length > 0) {
    //         for(let i = 0; i < searchTerms.length; i++) {
    //             filteredPosts.push(...props.posts.filter(post => post.attributes.title.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
    //                 post.attributes.author.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
    //                 post.attributes.content.toLowerCase().includes(searchTerms[i].toLowerCase())
    //             ))
    //         }
    //         setSearchResults(filteredPosts)
    //         if (filteredPosts.length === 0) {
    //             setSorryMessage('There are no articles that match your search.')
    //         }
    //     }
        // debugger

        // props.history.push({ 
        //     pathname: '/search',
        //     state: searchResults
        // });

        // debugger
    
        // props.history.push('/search', {searchResults: searchResults})

        // return (
        //     <Route
        //     exact
        //     path={'/search'}
        //     render={props => (
        //     <Search { ...props }
        //     searchResults={searchResults}
        //     />
        //     )}
        //     />
        // )
    
    render() {
        return (
            // console.log("searchBar1", props),
            <div className="searchbar">

                <form onSubmit={this.handleOnSubmit} >
                    <label className="search-icon">SEARCH</label>
                    <input
                        type="search"
                        className="input"
                        value={this.state.searchTerm}
                        onChange={this.handleOnChange}
                    />
                </form>
            </div>
        );
    }
}

function mSTP(state){
    return {
        search: state.searchTerm
    }
}

function mDTP(dispatch){
    return {
        dispatchSearch: (searchTerm) => dispatch(searchAction(searchTerm))
    }
}



export default connect(mSTP, mDTP)(SearchBar);
// export default SearchBar;
