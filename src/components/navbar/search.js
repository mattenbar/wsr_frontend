import React from 'react';
import { connect } from 'react-redux';
import Article from './article';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts,
            searchTerm: "",
            searchTerms: [],
            searchResults: [],
            sorryMessage: ""
        }
    }

    handleOnChange = (e) => {
        // console.log("searchTerm", e.target.value)
        let values = e.target.value
        this.setState({
            searchTerm: values
        })
        let valuesSplit = values.split(' ')
        this.setState({
            searchTerms: valuesSplit
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const filteredPosts = []
        if (this.state.searchTerms.length > 0) {
            for(let i = 0; i < this.state.searchTerms.length; i++) {
                filteredPosts.push(this.state.posts.filter(post => {
                    post.attributes.title.toLowerCase().includes(this.state.searchTerms[i].toLowerCase()) ||
                    post.attributes.author.toLowerCase().includes(this.state.searchTerms[i].toLowerCase()) ||
                    post.attributes.content.toLowerCase().includes(this.state.searchTerms[i].toLowerCase())
                }))
            }
            this.setState({
                searchResults: filteredPosts
            })
            if (filteredPosts.length === 0) {
                this.setState({
                    sorryMessage: 'There are no articles that match your search.'
                })
            }
        }
    }


    render() {

        console.log("search", this.props.posts)

        let postsMapped
        
        if (this.props.posts.length > 0) {
            let posts = this.props.posts
            postsMapped = posts.map(post => { 
                return (
                <div>
                    <li>
                        <img className="searchImage" src={post.attributes.image} />
                        <h1>{post.attributes.title}</h1>

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
        } else {
            return (
                <div>
                    <button><img className="search-icon" src='/search.svg' /></button>
                </div>
            )
        }
    }
}

export default Search;
