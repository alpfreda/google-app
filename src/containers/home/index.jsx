import Index from '../../components/home'
import { connect } from 'react-redux'
import { fetchTopGames, fetchNewGames } from '../../redux/actions/home-action'

const mapStateToProps = (state, ownProps) => {
  return {
    topGames: state.home.topGames,
    newGames: state.home.newGames
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTopGames: () => dispatch(fetchTopGames()),
    fetchNewGames: () => dispatch(fetchNewGames())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index)