import React, { PureComponent } from 'react'
import List from './list'

class Index extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchTopGames, fetchNewGames } = this.props
    fetchTopGames()
    fetchNewGames()
  }

  componentDidUpdate() {
  }

  render() {
    const { topGames, newGames } = this.props

    return <div>
      <List title='New & updated games' list={topGames.list} error={topGames.error} isLoading={topGames.isLoading} />
      <List title='Low on space' subTitle='Light weight games' list={newGames.list} error={newGames.error} isLoading={newGames.isLoading} />
    </div>
  }
}

export default Index