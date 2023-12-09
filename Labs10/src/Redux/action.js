export const action = {type: "", payload: {}};

export const incrementCount = (tourName) => {
  return {
    type: "INCREMENT_COUNT",
    payload: {name: tourName}
  }
}

export const decrementCount = (tourName) => {
  return {
    type: "DECREMENT_COUNT",
    payload: {name: tourName}
  }
}