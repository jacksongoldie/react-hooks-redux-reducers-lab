//const initialState = { numberOfPresents: 0 };
// const action = {
//   type: "presents/increase",
// };

export function managePresents(state, action) {
  switch (action.type){
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state;
  }
}
