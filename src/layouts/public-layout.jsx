import React from 'react'
import Routes from '../routes'
import Navbar from './../components/common/navbar';

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default PublicLayout
