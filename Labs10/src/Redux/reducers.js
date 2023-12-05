import {combineReducers} from "redux";

const defaultStateTour = []

const defaultStateCost = {
  count : 1
}

const defaultAmount = {
  amount : 0
}

export const rootReducer = combineReducers({
  toursReduce: reducerTour,
  countReduce: totalCountReducer,
  amountReduce: totalAmountReducer
})

export function reducerTour(state = defaultStateTour, action) {
  switch (action.type) {
    case "ADD_TOUR":
      if (state.some(tour => tour.toursId === action.payload.toursId)) {
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


export function totalCountReducer(state = defaultStateCost, action) {
  switch (action.type) {
    case "ADD_COUNT":
      return {...state, count: state.count + action.payload}
    case "GET_COUNT":
      return {...state, count: state.count - action.payload}
    case "ADD_ALL_COUNT":
      if (isNaN(action.payload)){
        return {count: 1}
      }
      console.log({count: action.payload})
      return {count: action.payload}

    case "DEFAULT_COUNT":
      return {count: 0}
    default:
      return state
  }
}

export function totalAmountReducer(state = defaultAmount, action) {
  switch (action.type) {
    case "ADD_AMOUNT":
      return {...state, amount: state.amount + action.payload }
    case "GET_AMOUNT":
      return {...state, amount: state.amount - state.amount}
    default:
      return state
  }
}

