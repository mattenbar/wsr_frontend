import React from 'react';
import { Link } from 'react-router-dom';

function searchBar(props) {
    return (
        <div className="searchbar">
            <Link to='/search'>
                <button ><img className="search-icon" src='/search.svg' /></button>
            </Link>
        </div>
    );
}

export default searchBar;

// import React, { useState } from "react";
// import { Route } from "react-router-dom";
// // import history from '../../history';

// import { withRouter } from "react-router";

// import Search from './search';


// function SearchBar(props) {

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
//         // debugger

//         // props.history.push({ 
//         //     pathname: '/search',
//         //     state: searchResults
//         // });

//         // debugger
    
//         props.history.push('/search', {searchResults: searchResults})

//         // return (
//         //     <Route
//         //     exact
//         //     path={'/search'}
//         //     render={props => (
//         //     <Search { ...props }
//         //     searchResults={searchResults}
//         //     />
//         //     )}
//         //     />
//         // )
//     } 

//     return (
//         console.log("searchBar1", props),
//         <div className="searchbar">
//             {/* <Link to='/search'>
//                 <button ><img className="search-icon" src='/search.svg' /></button>
//             </Link> */}
//             <form onSubmit={handleOnSubmit} >
//                 <label className="search-icon">SEARCH</label>
//                 <input
//                     type="search"
//                     className="input"
//                     value={searchTerm}
//                     onChange={handleOnChange}
//                 />
//             </form>
//         </div>
//     );
// }

// export default withRouter(SearchBar);
// // export default SearchBar;
