import React, { PureComponent } from 'react'
import Item from './item'
import Loader from '../common/loader';

class List extends PureComponent {
  render() {
    const { list, isLoading, error, title, subTitle } = this.props
    return <div className='container'>
      {
        !isLoading ?
          error ? <div className='error-alert'>{error}</div> :
            (list || []).length > 0 &&
            <div className='cards-box'>
              <div className='headline'>
                <h3 className='headline-text'>
                  {title}
                  <div className='headline-sub-text'>{subTitle}</div>
                </h3>
                <button className='headline-btn'>See more</button>
              </div>
              <div className='cards-inner'>
                {
                  list.map(item => <Item key={item.name} item={item} />)
                }
              </div>
            </div>
          : <Loader />
      }
    </div>
  }
}

export default List