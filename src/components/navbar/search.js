import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Search extends React.Component {

    state = {
        posts: this.props.posts,
        searchTerm: this.props.search,
        searchTerms: [],
        searchResults: [],
        sorryMessage: ''
    }

    searchPosts = (posts, searchTerm, searchTerms) => {
        const filteredPosts = []
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

    componentDidMount = () => {

        if (this.state.searchTerm !== undefined) {
            let posts = this.props.posts
            let searchTerm = this.props.search
            let searchTerms = searchTerm.split(' ')
        
            this.searchPosts(posts, searchTerm, searchTerms)
        }
        
    }

    handleOnChange = (e) => {
        console.log("e", e)
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        let posts = this.props.posts
        let searchTerm = this.state.searchTerm
        let searchTerms = searchTerm.split(' ')

        this.searchPosts(posts, searchTerm, searchTerms)
    } 

    render() {
        // debugger
        let postsMapped
        
        if (this.state.searchResults.length > 0) {
            // debugger
                let posts = this.state.searchResults[0]
                postsMapped = posts.map(post => { 
                    // debugger
                    return (
                        <div>
                            <li>
                                <h3>{post.attributes.title}</h3>
                            </li>
                        </div>
                    )
                })
                return (
                    <div className="searchPage">
                        <form onSubmit={this.handleOnSubmit} >
                            <label className="search-icon" >SEARCH</label>
                            <input type="search" className="input" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                        </form>
                        <div>
                            <ul>{postsMapped}</ul>
                        </div>
                    </div>
                )
        } else if (this.state.sorryMessage !== ""){
            return (
                <div>
                    <form onSubmit={this.handleOnSubmit} >
                        <label className="search-icon" >SEARCH</label>
                        <input type="search" className="input" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    </form>
                    <div><h2>{this.state.sorryMessage}</h2></div>
                </div>
            )
        } else if (this.state.sorryMessage === ""){
            return (
                
                <div>
                    <form onSubmit={this.handleOnSubmit} >
                        <label className="search-icon" >SEARCH</label>
                        <input type="search" className="input" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    </form>
                    <div><h2>Please Enter In Your Search Above</h2></div>
                </div>
            )
        }
    }
}

function mSTP(state){
    return {
        search: state.search[0]
    }
}

export default connect(mSTP)(Search);
