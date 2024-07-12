const initialState = {
    user: {
      role: 'user', // default role
    },
  };
  
  const authReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ROLE':
        return {
          ...state,
          user: {
            ...state.user,
            role: action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default authReducers;
  