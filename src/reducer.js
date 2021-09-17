const reducer = (state, action) => {
  if (action.type === 'ADD_ANIMAL') {
    const tempAnimals = state.animals
    tempAnimals.push(action.payload)
    console.log(tempAnimals)
    return { ...state, animals: tempAnimals }
  }
  return state
}

export default reducer
