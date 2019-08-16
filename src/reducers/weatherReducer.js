const initialState = {};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      if (state === initialState) return state;
      else throw new Error(`${type} is not a valid type for weatherReducer`);
  }
};
