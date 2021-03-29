export const SET_FILTERED_POSTS = "SET_FILTERED_POSTS"

export const setFilteredPosts = (filteredPosts) => (dispatch) => {
    dispatch({ type: SET_FILTERED_POSTS, payload: filteredPosts })
}