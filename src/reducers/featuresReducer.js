export default function manageFeatures(state = [], action) {
  
  switch (action.type) {
      
    case "FETCH_FEATURES":
          
          return state.concat(action.payload.feature.data);


      default:
          return state;
  }
}