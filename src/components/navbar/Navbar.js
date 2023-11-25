import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark  " style={{backgroundColor:'#3ac390'}}>
      <div className="container-fluid">
      <span>
        <Link className="navbar-brand" to={`/home`}>
        Group Discussion
        </Link>
        </span>

        <div className="dropdown mx-2">
          

          <span
            className="dropdown-toggle mx-5 text-light border border-dark rounded-5 p-2 text-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          Hello user
          </span>

          <ul className="dropdown-menu my-2">
            <li>
              <Link className="dropdown-item" to={`/edashboard`}>
                Home
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar