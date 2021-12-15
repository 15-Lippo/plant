import * as actions from '../index.action';
import * as govApis from './api.gov';

export const getVoteData = (voteNumber) => {
  return (dispatch) => {
    dispatch({ type: actions.FETCH_VOTE });
    govApis
      .submitVote(voteNumber)
      .then((voteRes) => {
        govApis
          .getVoteDataApi(voteRes.success)
          .then((res) => {
            if (res.success) {
              dispatch({
                type: actions.FETCH_VOTE_SUCCESS,
                data: res.data,
              });
            } else {
              throw 'Error in gov api';
            }
          })
          .catch(() => {
            dispatch({ type: actions.FETCH_VOTE_FAILED });
          });
      })
      .catch(() => {
        dispatch({ type: actions.FETCH_VOTE_FAILED });
      });
  };
};

export const getVoteResults = () => {
  return (dispatch) => {
    dispatch({ type: actions.FETCH_VOTE });
    govApis
      .getVoteDataApi(true)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: actions.FETCH_VOTE_RESULTS,
            data: res.data,
          });
        } else {
          throw 'Error in gov api';
        }
      })
      .catch(() => {
        dispatch({ type: actions.FETCH_VOTE_FAILED });
      });
  };
};

export const checkIfAlreadyVoted = (address) => {
  return (dispatch) => {
    dispatch({ type: actions.FETCH_VOTE });

    govApis.checkVote(address).then((res) => {
      dispatch({
        type: actions.FETCH_ALREADY_VOTED,
        data: res,
      });
    });
  };
};
