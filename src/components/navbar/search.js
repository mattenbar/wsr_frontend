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

    componentDidMount = () => {
        let posts = this.props.posts
        let searchTerm = this.state.searchTerm
        let searchTerms = searchTerm.split(' ')
        // console.log("searchTerms", searchTerms)
        // debugger
        const filteredPosts = []
        if (searchTerms.length > 0) {
            for(let i = 0; i < searchTerms.length; i++) {
                filteredPosts.push(posts.filter( post => post["attributes"]["title"].toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                    post["attributes"]["author"].toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                    post["attributes"]["content"].toLowerCase().includes(searchTerms[i].toLowerCase())
                ))
            }
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

    render() {
        // console.log("search mSTP", this.state)
        
        let postsMapped
        if (this.state.searchResults.length > 0) {
            // debugger
                let posts = this.state.searchResults[0]
                postsMapped = posts.map(post => { 
                    // debugger
                    return (
                        <div>
                            <li>
                                <h1>{post.attributes.title}</h1>
                            </li>
                        </div>
                    )
                })
                return (
                    <div className="searchPage">
                        <div>
                            <ul><Link>{postsMapped}</Link></ul>
                        </div>
                    </div>
                )
        } else {
            return (
                
                <div>
                    <div>There are no articles that match your search.</div>
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

// import React, { useState } from 'react';
// import Article from './article';

// export function Search(props) {

//     const [posts, setPosts] = useState(props.posts)
//     const [searchTerm, setSearchTerm] = useState("")
//     const [searchTerms, setSearchTerms] = useState([])
//     const [searchResults, setSearchResults] = useState([])
//     const [sorryMessage, setSorryMessage] = useState("")

//     const handleOnChange = (e) => {
//         let values = e.target.value
//         setSearchTerm(values)
//         let valuesSplit = values.split(' ')
//         setSearchTerms(valuesSplit)
//     }

//     const handleOnSubmit = (e) => {
//         e.preventDefault()
//         const filteredPosts = []
//         if (searchTerms.length > 0) {
//             for(let i = 0; i < searchTerms.length; i++) {
//                 filteredPosts.push(...props.posts.filter(post => post.attributes.title.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
//                     post.attributes.author.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
//                     post.attributes.content.toLowerCase().includes(searchTerms[i].toLowerCase())
//                 ))
//             }
//             setSearchResults(filteredPosts)
//             if (filteredPosts.length === 0) {
//                 setSorryMessage('There are no articles that match your search.')
//             }
//         }
//     }   

//     let postsMapped

//         if (searchResults.length > 0) {
//                 postsMapped = searchResults.map(post => { 
//                     return (
                        
//                     <div>
//                         <li>
//                             <h1>{post.attributes.title}</h1>

//                         </li>
//                     </div>
//                     )
//                 })
//                 return (
//                     <div className="searchPage">
//                         <form onSubmit={handleOnSubmit} >
//                             <label className="search-icon" >SEARCH</label>
//                             <input type="search" className="input" value={searchTerm} onChange={handleOnChange}/>
//                         </form>
//                         <div>
//                             <ul>{postsMapped}</ul>
//                         </div>
//                     </div>
//                 )
//         } else {
//             return (
//                 <div>
//                     <form onSubmit={handleOnSubmit} >
//                         <label className="search-icon" >SEARCH</label>
//                         <input type="search" className="input" value={searchTerm} onChange={handleOnChange}/>
//                     </form>
//                     {console.log("you are here", sorryMessage)}
//                     {sorryMessage && (
//                         <div>{sorryMessage}</div>
//                     )}
//                 </div>
//             )
//         }
// }

// export default Search;