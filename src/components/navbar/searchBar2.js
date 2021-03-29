import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../../actions/searchAction';
import { withRouter } from 'react-router-dom';
// import { Redirect } from 'react-router'
import { setFilteredPosts } from '../../actions/setFilteredPosts';

function SearchBar2(props) {

    const storeProps = useSelector(state => {
        console.log("searchBARComponent", state.search.filteredPosts)
        // state.posts = (17)[{...}, {...}, {...}]
        // state.categories = (17)[{...}, {...}, {...}]
        // state.search.search = "logo"
        // you also have pcps & user
        return state
    })

    const posts = storeProps.posts
    
    // const defaultSearchTerm = useSelector(state => {
    //     // console.log("searchBarSTATE", state.search.search) //state.search.search === ""
    //     return (state.search.search)
    // })

    const [searchTerm, setSearchTerm] = useState("")
    const [fireRedirect, setFireRedirect] = useState(false)

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const dispatch = useDispatch()


    const filterPosts = (searchTerm) => {
        
        let searchTermsArray = []

        if (searchTerm.length > 0 && searchTerm !== undefined) {
            searchTermsArray = searchTerm.split(' ')
        

            let filteredPosts = []

            if (searchTermsArray.length > 0) {
                for (let i = 0; i < searchTermsArray.length; i++) {
                    filteredPosts = filteredPosts.concat(posts.filter(post => post["attributes"]["title"].toLowerCase().includes(searchTermsArray[i].toLowerCase()) ||
                    post["attributes"]["author"].toLowerCase().includes(searchTermsArray[i].toLowerCase()) ||
                    post["attributes"]["content"].toLowerCase().includes(searchTermsArray[i].toLowerCase())
                    ))
                }
            }

            console.log("filteredPosts", filteredPosts)

            dispatch(setFilteredPosts(filteredPosts))
            
            // let correctFilteredPosts = filteredPosts[0]
            // let filteredPostsCount = correctFilteredPosts.length

            // if (filteredPostsCount > 0) {
            //     addResults(correctFilteredPosts)
            // } else if (filteredPostsCount === 0) {
            //     setSorryMessage('There are no articles that match your search.')
            // }
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        // dispatch(searchAction(searchTerm))

        filterPosts(searchTerm)



        // setFireRedirect(true)




        setSearchTerm("")

        // setFireRedirect(false)

        props.history.push('/search')

    }

    return (
        <div className="searchbar">
            <form onSubmit={handleOnSubmit} >
                <input
                    type="search"
                    className="searchbarinput"
                    value={searchTerm}
                    name="searchTerm"
                    onChange={handleOnChange}
                    placeholder="&#xF002;"
                />
            </form>
            {/* {fireRedirect && (
                // <Redirect to='/search' />
                <Redirect
                    to={{
                        pathname: "/search",
                        state: { searchTerm: searchTerm }
                    }}
                />
            )} */}
        </div>
    );
}

export default withRouter(SearchBar2);
// export default SearchBar2;
