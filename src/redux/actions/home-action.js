import { homeConstants } from '../constants'
import axios from '../../utils/api'

export const fetchTopGames = () => {
  return (dispatch, getState) => {
    const topGames = getState().home.topGames
    if (!topGames.isLoading && topGames.error === null) {
      dispatch({ type: homeConstants.FETCH_TOP_GAMES_INIT })
      return axios.get('characters?limit=6')
        .then(response => {
          dispatch({
            type: homeConstants.FETCH_TOP_GAMES_SUCCESS,
            payload: response.data,
          })
        }).catch(error => {
          dispatch({
            type: homeConstants.FETCH_TOP_GAMES_ERROR,
            payload: error.message,
          })
        })
    }
  }
}

export const fetchNewGames = () => {
  return (dispatch, getState) => {
    const newGames = getState().home.newGames
    if (!newGames.isLoading && newGames.error === null) {
      dispatch({ type: homeConstants.FETCH_NEW_GAMES_INIT })
      return axios.get('characters?limit=16')
        .then(response => {
          dispatch({
            type: homeConstants.FETCH_NEW_GAMES_SUCCESS,
            payload: response.data.slice(7, 13),
          })
        }).catch(error => {
          dispatch({
            type: homeConstants.FETCH_NEW_GAMES_ERROR,
            payload: error.message,
          })
        })
    }
  }
}