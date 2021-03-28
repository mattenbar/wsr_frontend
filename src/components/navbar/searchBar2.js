import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../../actions/searchAction';
import { withRouter } from 'react-router';

function SearchBar2(props) {
    
    const defaultSearchTerm = useSelector(state => {
        // console.log("searchBarSTATE", state.search.search) //state.search.search === ""
        return (state.search.search)
    })

    const [searchTerm, setSearchTerm] = useState(defaultSearchTerm)

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(searchAction(searchTerm))

        setSearchTerm(defaultSearchTerm)

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