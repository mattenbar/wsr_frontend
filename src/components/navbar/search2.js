import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Search2(props) {

    const storeProps = useSelector(state => {
        console.log("searchComponent", state)
        // state.posts = (17)[{...}, {...}, {...}]
        // state.categories = (17)[{...}, {...}, {...}]
        // state.search.search = "logo"
        // you also have pcps & user
        return state
    })

    const posts = storeProps.posts

    const searchTerm = storeProps.search.search
    // const [searchTermsArray, setSearchTermsArray] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [sorryMessage, setSorryMessage] = useState("")

    const addResults = (filteredPosts) => {
        setSearchResults(prevResults => [...prevResults, {
            filteredPosts
        }])
    }
//    const [items, setItems] = useState([]);

//   const addMoreItem = () => {
//     setItems(prevItems => [...prevItems, {
//       id: prevItems.length,
//       value: getRandomNumber()
//     }]);

    const searchPosts = () => {

        let searchTermsArray = []

        if (searchTerm.length > 0 && searchTerm !== undefined) {
            searchTermsArray = searchTerm.split(' ')
        

            const filteredPosts = []

            if (searchTermsArray.length > 0) {
                for (let i = 0; i < searchTermsArray.length; i++) {
                    filteredPosts.push(posts.filter(post => post["attributes"]["title"].toLowerCase().includes(searchTermsArray[i].toLowerCase()) ||
                    post["attributes"]["author"].toLowerCase().includes(searchTermsArray[i].toLowerCase()) ||
                    post["attributes"]["content"].toLowerCase().includes(searchTermsArray[i].toLowerCase())
                    ))
                }
            }
            
            let correctFilteredPosts = filteredPosts[0]
            let filteredPostsCount = correctFilteredPosts.length

            if (filteredPostsCount > 0) {
                addResults(correctFilteredPosts)
            } else if (filteredPostsCount === 0) {
                setSorryMessage('There are no articles that match your search.')
            }
        }
    }


    useEffect(() => {

        if (props.search !== undefined) {
            searchPosts()
        }

    })

    let postsMapped

    if (searchResults.length > 0) {
        let searchResultPosts = searchResults[0].filteredPosts
        postsMapped = searchResultPosts.map(post => {
            return (
                <div key={post.id} className="searchResultPost">
                    <li>
                        <h3>{post.attributes.title}</h3>
                    </li>
                </div>
            )
        })
        return (
            // console.log("searchComponentPROPS", props.search), //"logo"
            console.log("searchResults", searchResults[0].filteredPosts),
            <div className="searchPage">
                <div>
                    <ul>{postsMapped}</ul>
                </div>
            </div>
        );
    } else if (sorryMessage.length > 0) {
        return (
            <div>
                <h2>{sorryMessage}</h2>
            </div>
        )
    } else if (sorryMessage === "") {
        return (
            <div>
                <h2>Please Enter In Your Search Above</h2>
            </div>
        )
    }
}

export default Search2;