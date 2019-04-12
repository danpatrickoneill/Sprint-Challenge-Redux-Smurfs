import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_SMURFS_SUCCESS,
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_SMURFS_FAILURE,
        err
      });
    });
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_SMURF_SUCCESS,
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_SMURF_FAILURE,
        err
      });
    });
};

export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_SMURF_SUCCESS,
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UPDATE_SMURF_FAILURE,
        err
      });
    });
};

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        smurfs: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DELETE_SMURF_FAILURE,
        err
      });
    });
};
