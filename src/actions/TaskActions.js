import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TASK_UPDATE, TASK_CREATE, TASKS_FETCH_SUCCESS, TASK_SAVE, TASK_DELETE } from './types';

export const taskUpdate = ({ prop, value }) => {
  return {
    type: TASK_UPDATE,
    payload: { prop, value }
  };
};

export const taskCreate = ({ name, description, complete }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/tasks`)
      .push({ name, description, complete })
      .then(() => {
        Actions.pop();
        dispatch({ type: TASK_CREATE });
      });
  };
};

export const tasksFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/tasks`)
      .on('value', snapshot => {
        dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const taskSave = ({ name, description, complete, uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .set({ name, description, complete })
      .then(() => {
        Actions.pop();

        dispatch({ type: TASK_SAVE });
      });
  };
};

export const taskDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
        dispatch({ type: TASK_DELETE });
      });
  };
};
