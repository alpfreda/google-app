import { homeConstants } from '../constants'
import initialState from './initial-state'

const homeReducer = (state = initialState.home, action) => {
  switch (action.type) {
    case homeConstants.FETCH_TOP_GAMES_INIT:
      return {
        ...state,
        topGames: {
          ...state.topGames,
          isLoading: true,
          error: null
        }
      }
    case homeConstants.FETCH_TOP_GAMES_SUCCESS:
      return {
        ...state,
        topGames: {
          ...state.topGames,
          isLoading: false,
          list: action.payload
        }

      }
    case homeConstants.FETCH_TOP_GAMES_ERROR:
      return {
        ...state,
        topGames: {
          ...state.topGames,
          isLoading: false,
          error: action.payload
        }
      }

      case homeConstants.FETCH_NEW_GAMES_INIT:
        return {
          ...state,
          newGames: {
            ...state.newGames,
            isLoading: true,
            error: null
          }
        }
      case homeConstants.FETCH_NEW_GAMES_SUCCESS:
        return {
          ...state,
          newGames: {
            ...state.newGames,
            isLoading: false,
            list: action.payload
          }
  
        }
      case homeConstants.FETCH_NEW_GAMES_ERROR:
        return {
          ...state,
          newGames: {
            ...state.newGames,
            isLoading: false,
            error: action.payload
          }
        }
    default:
      return state
  }
}

export default homeReducer
