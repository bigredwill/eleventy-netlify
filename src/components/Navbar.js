import React from 'react'
import { Link } from 'gatsby'
import githubIcon from '../img/github-icon.svg'

const routes = [
  {
    title: 'About Me',
    href: '/',
  },
  {
    title: 'Writing',
    href: '/blog',
  },
  {
    title: 'Now',
    href: '/now',
  },
]

const linkStyles = 'link dim green-blue f5 f4-m f4-l dib ml3-ns ml2 v-btm'
// function to determine if link is active or deeper routes
const isPartiallyActive = ({ isPartiallyCurrent, location, href }) => {
  // debugger;
  return (isPartiallyCurrent && href !== '/') ||
    (href === '/' && location.pathname === '/')
    ? { className: `${linkStyles} b ul` }
    : null
}

const Navbar = ({ route = '/' }) => (
  <nav className="measure-wide center pb3 pt4 sans-serif">
    <div className="tracked mid-gray dib f5 f4-m f4-l v-btm">Will Simons</div>
    {routes.map(obj => {
      return (
        <Link
          getProps={isPartiallyActive}
          className={linkStyles}
          to={obj.href}
          title={obj.title}
          key={obj.title}
        >
          {obj.title}
        </Link>
      )
    })}
    
  </nav>
)

export default Navbar
