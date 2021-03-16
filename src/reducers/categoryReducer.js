export default function manageCategories(state = [], action) {
  switch (action.type) {
      case "FETCH_CATEGORIES":
          
          return state.concat(action.payload.category.data);


      default:
          return state;
  }
}
