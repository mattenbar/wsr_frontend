import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withRouter } from "react-router";

class Search extends React.Component {

    state = {
        posts: this.props.posts,
        searchTerm: this.props.search,
        searchTerms: [],
        searchResults: [],
        sorryMessage: ''
    }

    searchPosts = () => {
        // debugger
        if (this.state.searchTerm.length > 0) {
            let posts = this.props.posts

                let newSearchTerm = this.state.searchTerm
                // debugger
                let searchTerms = newSearchTerm.split(' ')
            
            const filteredPosts = []
            
            // debugger
            if (searchTerms.length > 0) {
                for(let i = 0; i < searchTerms.length; i++) {
                    filteredPosts.push(posts.filter( post => post["attributes"]["title"].toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                        post["attributes"]["author"].toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                        post["attributes"]["content"].toLowerCase().includes(searchTerms[i].toLowerCase())
                    ))
                }
            }
            
            let filteredPostsCount = filteredPosts[0].length
            if (filteredPostsCount > 0) {
                this.setState({
                    searchResults: filteredPosts
                })
            } else if (filteredPostsCount === 0) {
                this.setState({
                    sorryMessage: 'There are no articles that match your search.'
                })
            }
            this.setState({
                searchTerm: ""
            });
        }
        // this.props.history.push('/search')
    }

    componentDidMount = () => {
        // console.log("component Mounted", this.props.search)
        // console.log("searchTerm", this.state.searchTerm)
        // debugger
        // if (this.state.searchTerm !== undefined) {
            this.setState({
                searchTerm: this.props.search
            });
            
        if (this.props.search.length !== 0) {
            // let posts = this.props.posts

            // this.setState({
            //     searchTerm: this.props.search
            // });

            // let newSearchTerm = this.state.searchTerm
            // // debugger
            // let searchTerms = newSearchTerm.split(' ')
            // this.searchPosts(posts, searchTerms)
            this.searchPosts()
        }
        
    }

    componentWillReceiveProps(props) {
        this.setState({ searchTerm: this.props.search })
        if (this.props.search.length !== 0) {
            this.searchPosts()
        }
        
    }

    componentDidUpdate = (props) => {
        // console.log("it updated", props)
        // if (this.state.searchTerm !== this.props.search) {
        //     this.props.history.push('/search')
        // }
        // // debugger
        // if (this.state.searchTerm !== this.props.search) {
        //     let posts = this.props.posts

        //     let newSearchTerm = this.state.searchTerm
        //     // debugger
        //     let searchTerms = newSearchTerm.split(' ')
        //     this.searchPosts(posts, searchTerms)
        // }
    }

    // handleOnChange = (e) => {
    //     console.log("e", e)
    //     this.setState({
    //         searchTerm: e.target.value
    //     });
    // }

    // handleOnSubmit = (e) => {
    //     e.preventDefault()

    //     let posts = this.props.posts
    //     let searchTerm = this.state.searchTerm
    //     let searchTerms = searchTerm.split(' ')

    //     this.searchPosts(posts, searchTerm, searchTerms)
    // } 

    render() {
        // console.log("search props ", this.props)
        // console.log("search state", this.state)
        // debugger
        let postsMapped
        
        if (this.state.searchResults.length > 0) {
            // debugger
                let posts = this.state.searchResults[0]
                postsMapped = posts.map(post => { 
                    // debugger
                    return (
                        <div key={post.id}>
                            <li>
                                <h3>{post.attributes.title}</h3>
                            </li>
                        </div>
                    )
                })
                return (
                    <div className="searchPage">
                        {/* <form onSubmit={this.handleOnSubmit} >
                            <label className="search-icon" >SEARCH</label>
                            <input type="search" className="input" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                        </form> */}
                        <div>
                            <ul>{postsMapped}</ul>
                        </div>
                    </div>
                )
        } else if (this.state.sorryMessage !== ""){
            return (
                <div>
                    {/* <form onSubmit={this.handleOnSubmit} >
                        <label className="search-icon" >SEARCH</label>
                        <input type="search" className="input" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    </form> */}
                    <div><h2>{this.state.sorryMessage}</h2></div>
                </div>
            )
        } else if (this.state.sorryMessage === ""){
            return (
                
                <div>
                    {/* <form onSubmit={this.handleOnSubmit} >
                        <label className="search-icon" >SEARCH</label>
                        <input type="search" className="input" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    </form> */}
                    <div><h2>Please Enter In Your Search Above</h2></div>
                </div>
            )
        }
    }
}

function mSTP(state){
    return {
        search: state.search
    }
}

export default withRouter(connect(mSTP)(Search));


