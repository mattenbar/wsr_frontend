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
        this.props.history.push('/search')
    }
    
    render() {
        return (
            console.log("searchBar1", this.props),
            console.log("searchBar1", this.state),
            // console.log("searchBar1", search),
            <div className="searchbar">

                <form onSubmit={this.handleOnSubmit} >
                    {/* <label className="search-icon">SEARCH</label> */}
                    <input
                        
                        type="search"
                        className="searchbarinput"
                        value={this.state.searchTerm}
                        onChange={this.handleOnChange}
                        placeholder="&#xF002;"
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

export default withRouter(connect(mSTP, mDTP)(SearchBar));
// export default SearchBar;