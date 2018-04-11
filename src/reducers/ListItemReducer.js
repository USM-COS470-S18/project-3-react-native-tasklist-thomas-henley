import { TASK_UPDATE } from '../actions/types';

const INITIAL_STATE = { name: '', description: '', complete: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
