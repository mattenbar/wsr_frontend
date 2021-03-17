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