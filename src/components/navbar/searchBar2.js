import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setFilteredPosts } from '../../actions/setFilteredPosts';

function SearchBar2(props) {

    const storeProps = useSelector(state => {

        return state
    })

    const posts = storeProps.posts

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

            dispatch(setFilteredPosts(filteredPosts))
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        filterPosts(searchTerm)

        setSearchTerm("")

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
        </div>
    );
}

export default withRouter(SearchBar2);
