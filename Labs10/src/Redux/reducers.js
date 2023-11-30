
const defaultState = []


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_TOUR":
      if (state.some(tour => tour.toursId === action.payload.toursId)) {
        console.log("Tour already exists, not adding.");
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_TOUR":
      const updatedState = state.filter(tour => tour.toursId !== action.payload.id);
      console.log(updatedState)
      return updatedState;

    default:
      return state;
  }
}

