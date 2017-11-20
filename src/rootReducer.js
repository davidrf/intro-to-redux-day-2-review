const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

export const changeFirstName = payload => ({ payload, type: CHANGE_FIRST_NAME });

export const changeLastName = payload => ({ payload, type: CHANGE_LAST_NAME });

const initialState = {
  firstName: '',
  lastName: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
