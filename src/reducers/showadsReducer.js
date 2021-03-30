export default function manageShowads(state = [], action) {
  switch (action.type) {

      case "FETCH_SHOWADS":
          return state.concat(action.payload.showads.data);



      default:
          return state;
  }
}

