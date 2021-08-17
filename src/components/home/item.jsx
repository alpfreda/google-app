import React from 'react'

const Item = ({ item }) => {
  const title = item.name
  const img = item.img
  const occupation = (item.occupation || []).join(',')

  return <div className='card-box'>
    <a className='card-item-header' href='#'>
      <img className='card-item-pic' src={img} />
    </a>
    <div className='card-item-body'>
      <a href='#' className='card-item-title'>{title}
      </a>
      <a href='#' className='card-item-sub-title '>{occupation}</a>
        <span className='blur'></span>
    </div>
    <div className='card-item-footer'>
      <div className='card-item-ratings'>
        <div className="card-item-ratings-item full"></div>
        <div className="card-item-ratings-item full"></div>
        <div className="card-item-ratings-item full"></div>
        <div className="card-item-ratings-item full"></div>
        <div className="card-item-ratings-item"></div>
      </div>
      <a href='#' className='card-item-price'>TRY 2.79</a>
    </div>
  </div>
}

export default Item