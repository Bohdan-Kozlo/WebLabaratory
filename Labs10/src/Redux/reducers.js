
const defaultState = {
  tourList: []
};

const findIndexByName = (arr, name) => {
  return arr.findIndex((item) => item.name === name);
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TOUR":
      const findIndex = findIndexByName(state.tourList, action.payload.name);
      if (findIndex === -1) {
        return {...state, tourList: [...state.tourList, action.payload] };
      } else {
        const updateTourList = [...state.tourList, action.payload];
        updateTourList[findIndex] = {
          ...updateTourList[findIndex],
          count: updateTourList[findIndex].count + 1
        };
        return {...state, tourList: updateTourList};
      }
    case "REMOVE_TOUR":
      const updatedTourList = state.tourList.filter(
          (tour) => tour.name !== action.payload.name
      );
      return { ...state, tourList: updatedTourList };
    case "INCREMENT_COUNT":
      return {
        ...state,
        tourList: state.tourList.map((tour) => {
          if (tour.name === action.payload.name) {
            return {...tour, count: tour.count + 1};
          }
          return tour
        })
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        tourList: state.tourList.map((tour) => {
          if (tour.name === action.payload.name && tour.count > 0) {
            return {...tour, count: tour.count - 1};
          }
          return tour
        })
      }
    default:
      return state;
  }
}
