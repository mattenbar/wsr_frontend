import React, { useState } from 'react';
import Article from './article';

export function Search(props) {

    const [posts, setPosts] = useState(props.posts)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTerms, setSearchTerms] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [sorryMessage, setSorryMessage] = useState("")

    const handleOnChange = (e) => {
        let values = e.target.value
        setSearchTerm(values)
        let valuesSplit = values.split(' ')
        setSearchTerms(valuesSplit)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const filteredPosts = []
        if (searchTerms.length > 0) {
            for(let i = 0; i < searchTerms.length; i++) {
                filteredPosts.push(...props.posts.filter(post => post.attributes.title.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                    post.attributes.author.toLowerCase().includes(searchTerms[i].toLowerCase()) ||
                    post.attributes.content.toLowerCase().includes(searchTerms[i].toLowerCase())
                ))
            }
            setSearchResults(filteredPosts)
            if (filteredPosts.length === 0) {
                setSorryMessage('There are no articles that match your search.')
            }
        }
    }   

    let postsMapped

        if (searchResults.length > 0) {
                postsMapped = searchResults.map(post => { 
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
                        <form onSubmit={handleOnSubmit} >
                            <label className="search-icon" >SEARCH</label>
                            <input type="search" className="input" value={searchTerm} onChange={handleOnChange}/>
                        </form>
                        <div>
                            <ul>{postsMapped}</ul>
                        </div>
                    </div>
                )
        } else {
            return (
                <div>
                    <form onSubmit={handleOnSubmit} >
                        <label className="search-icon" >SEARCH</label>
                        <input type="search" className="input" value={searchTerm} onChange={handleOnChange}/>
                    </form>
                    {console.log("you are here", sorryMessage)}
                    {sorryMessage && (
                        <div>{sorryMessage}</div>
                    )}
                </div>
            )
        }
}

export default Search;