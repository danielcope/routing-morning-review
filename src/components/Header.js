import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h2>Nice to Meet Me</h2>
      <Link to='/'>{`< Back to the Conference Room`}</Link>
    </div>
  );
}

export default Header