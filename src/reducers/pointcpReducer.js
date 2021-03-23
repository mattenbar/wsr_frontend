export default function managePcps(state = [], action) {
  switch (action.type) {
      case "FETCH_POINTCPS":
          return state.concat(action.payload.pointcp.data);

      case 'ADD_PCP':
          
          return state.concat(action.payload);

      default:
          return state;
  }
}

